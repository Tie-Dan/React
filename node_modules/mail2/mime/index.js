const util   = require('util');
const Stream = require('stream');
const types  = require('./types');

/**
 * [MIME description]
 */
function MIME(message){
  Stream.call(this);
  this.buffer  = '';
  this.headers = {};
  this.body    = {};
  for(var k in message){
    this[k] = message[k];
  }
  return this;
};

MIME.CRLF = '\n';
MIME.TYPES = types;

/**
 * [PARSE_STATUS description]
 * @type {Object}
 */
MIME.PARSE_STATUS = {
  BODY        : 0x00,
  PART_HEADER : 0x01,
  PART_BODY   : 0x02,
  END         : -1
};

util.inherits(MIME, Stream);

MIME.q = function(address){
  return '<' + address + '>';
};

MIME.kv = function(key, value){
  return [ key, value ].join(': ');
};

MIME.trim = function(s){
  return s.replace(/^"|"$/, '');
}

MIME.filter = function(str){
  return !!str.trim();
};

/**
 * [extension description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
MIME.extension = function(type){
  return MIME.TYPES[ type ].extensions;
};

/**
 * [lookup description]
 * @param  {[type]} filename [description]
 * @return {[type]}          [description]
 */
MIME.lookup = function(filename){
  var ext = filename.replace(/.*[\.\/\\]/, '').toLowerCase();
  return Object.keys(MIME.TYPES).filter(function(type){
    var def = MIME.TYPES[ type ];
    return ~(def.extensions||[]).indexOf(ext);
  })[0];
};


var aliaes = {
  from: 'From',
  to  : 'To'  ,
  cc  : 'Cc'  ,
  bcc : 'Bcc' ,
};

Object.keys(aliaes).forEach(function(alias){
  MIME.prototype.__defineGetter__(alias, function(){
    return this.headers[ aliaes[alias] ];
  });

  MIME.prototype.__defineSetter__(alias, function(from){
    this.headers[ aliaes[alias] ] = from;
  });
});



/**
 * [function description]
 * @param  {[type]} name  [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
MIME.prototype.header = function(name, value){
  this.headers[ name ] = value;
  return this;
};

/**
 * [write description]
 * @param  {[type]} buf [description]
 * @return {[type]}     [description]
 */
MIME.prototype.write = function(buf){
  this.buffer += buf;
  var LINE = MIME.CRLF + MIME.CRLF;
  var sp = this.buffer.indexOf(LINE);
  if(sp > -1){
    var str = this.buffer.substr(0, sp);
    this.headers = MIME.parseHeaders(str);
    this.emit('headers', this.headers);
    this.buffer = this.buffer.substr(sp);
  }
  return this;
};

/**
 * [end description]
 * @param  {[type]} buf [description]
 * @return {[type]}     [description]
 */
MIME.prototype.end = function(buf){
  if(buf) this.write(buf);
  var contentType = this.headers[ 'Content-Type' ];
  this.body = MIME.parseBody(this.buffer, contentType);
  this.emit('body', this.body);
  this.emit('end', this);
  return this;
};

/***/
MIME.prototype.toString = function(){
  var message = [], self = this;
  Object.keys(this.headers).forEach(function(header){
    message.push(MIME.kv(header, self.headers[ header ]));
  });
  message.push(null);
  message.push(this.body._);
  return message.join('\n');
};

/**
 * [parse description]
 * @param  {[type]} content     [description]
 * @param  {[type]} contentType [description]
 * @return {[type]}             [description]
 */
MIME.parse = function(content, contentType){
  var mime = new MIME();
  if(typeof contentType === 'undefined'){
    return mime.end(content);
  }else{
    return mime.parseBody(content, contentType);
  }
};

/**
 * [parseAddress description]
 * @param  {[type]} address [description]
 * @return {[type]}         [description]
 */
MIME.parseAddress = function(address){
  var host = (address.replace(/^(.+@)/g,'').replace(/>/,''));
  var user = (address.match(/^(?:.+<)?(.+)@.+$/)[1]);
  var name = (address.match(/^(.+)<.+>$/) || [])[1] || '';
  return {
    host    : host,
    user    : user,
    name    : name,
    address : [ user, host ].join('@')
  };
};
/**
 * [parseHeaders description]
 * @param  {[type]} header [description]
 * @return {[type]}        [description]
 */
MIME.parseHeaders = function(header){
  return header
  .replace(/\n\s+/g, '')
  .split(MIME.CRLF)
  .filter(MIME.filter)
  .map(MIME.parseHeader)
  .reduce(function(item, cur){
    for(var k in cur) item[k] = cur[k];
    return item;
  }, {});
};

/**
 * [parseHeader description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
MIME.parseHeader = function(str){
  var h = {};
  var p = str.indexOf(':');
  if(p > -1){
    var k  = str.substr(0, p).trim();
    var v  = str.substr(++p).trim();
    h[ k ] = MIME.parseHeaderValue(v);
  }
  return h;
};

/**
 * [parseHeaderValue description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
MIME.parseHeaderValue = function(str){
  var h = {};
  str.split(/;\s?/).map(function(option){
    option = MIME.trim(option);
    var kv = option.match(/^(.+?)=(.*)$/);
    if(kv){
      h[ MIME.trim(kv[1]) ] = MIME.trim(kv[2]);
    }else{
      h._ = option;
    }
  });
  return h;
};

/**
 * [end description]
 * @param  {[type]} buf [description]
 * @return {[type]}     [description]
 */
MIME.parseBody = function(content, contentType){
  var j=-1, h='', body = { _: '' };
  var status = MIME.PARSE_STATUS.BODY;
  var lines = (content || '').toString().split(MIME.CRLF);
  if(typeof contentType === 'string'){
    contentType = MIME.parseHeaderValue(contentType);
  }
  while(lines.length){
    line = lines.shift();
    if(line == '--$--'.replace('$', contentType.boundary)){
      status = MIME.PARSE_STATUS.END;
      break;
    }
    if(line == '--$'.replace('$', contentType.boundary)){
      status = MIME.PARSE_STATUS.PART_HEADER;
      continue;
    }
    switch(status){
      case MIME.PARSE_STATUS.BODY:
        body._ += line;
        break;
      case MIME.PARSE_STATUS.PART_HEADER:
        if(line.trim() == ''){
          status = MIME.PARSE_STATUS.PART_BODY;
          body[ ++j ] = { body: '', headers: MIME.parseHeaders(h) };
          h = '';
          continue;
        }
        h += line + MIME.CRLF;
        break;
      case MIME.PARSE_STATUS.PART_BODY:
        body[j].body += line;
        break;
    }
  }
  return body;
};

module.exports = MIME;
