'use strict';
const dns     = require('dns');
const tcp     = require('net');
const Message = require('../mime');

Message.CRLF = '\r\n';

/**
 * [SMTP description]
 * @param {[type]} options [description]
 * @docs https://tools.ietf.org/html/rfc821
 */
function SMTP(options){
  return this;
}
/**
 * [connectMx description]
 * @param  {[type]}   domain   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function connectMx(domain, callback){
  var endpoints = [];
  function connect(i){
    if (i >= endpoints.length)
      return callback(new Error('can not connect to any SMTP server'));
    var sock = tcp.connect(25, endpoints[i], function(err){
      if(err) {
        console.error('Error on connectMx for: ', endpoints[ i ], err);
        return connect(i++);
      }
      console.log("MX connection created: ", endpoints[ i ]);
      callback(null, sock);
    });
  };

  dns.resolveMx(domain, function(err, records){
    endpoints = (records || []).sort(function(a, b){
      return a.priority - b. priority;
    }).map(function(mx){
      return mx.exchange;
    }).concat([ domain ]);
    connect(0);
  });
};

/**
 * [send description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
SMTP.send = function(message){
  var client = new SMTP.Client();
  return client.send(message);
};
/**
 * [post description]
 * @param  {[type]}   domain     [description]
 * @param  {[type]}   from       [description]
 * @param  {[type]}   recipients [description]
 * @param  {[type]}   body       [description]
 * @param  {Function} callback   [description]
 * @return {[type]}              [description]
 */
SMTP.prototype.post = function(domain, from, recipients, body, callback){
  var queue = [], step = 0;
  function command(cmd, argv){
    return cmd + (argv ? (' ' + argv) : '');
  };
  queue.push(command('MAIL', Message.kv('FROM', Message.q(from.address))));
  queue = queue.concat(recipients.map(function(recipient){
    return command('RCPT', Message.kv('TO', Message.q(recipient)));
  }));
  queue.push('DATA');
  queue.push('QUIT');
  queue.push('');
  connectMx(domain, function(err, sock){
    if(err) return callback(err);
    /**
     * [w description]
     * @param  {[type]} s [description]
     * @return {[type]}   [description]
     */
    function w(s){
      console.log('<- %s', s);
      sock.write(s + Message.CRLF);
    };
    /**
     * [response description]
     * @param  {[type]} code [description]
     * @param  {[type]} msg  [description]
     * @return {[type]}      [description]
     */
    function response(code, msg){
      switch(code){
        case 220:
          if(/ESMTP/i.test(msg)){
            w(command('EHLO', from.host))
          }else{
            w(command('HELO', from.host))
          }
          break;
        case 221:
          sock.end();
          break;
        case 250:
          w(queue[step++]);
          break;
        case 354:
          w(body);
          w('');
          w('.');
          w('');
          break;
        default:
          console.error('-x SMTP responds error code %s', code);
          sock.end();
          break;
      };
    };
    /**
     * [msg description]
     * @type {String}
     */
    var msg = '';
    function parse(line){
      console.log('-> %s', line);
      msg += (line + Message.CRLF);
      if(/^\d+\s/.test(line)){
        response(parseInt(line, 10), msg);
        msg = '';
      }
    }
    /**
     * [data description]
     * @type {String}
     */
    var data = '', parts = []
    sock.on('error', function(){
       console.error('-x fail to connect ');
    }).on('data', function(chunk){
      data += chunk;
      parts = data.split(Message.CRLF);
      data = parts.pop();
      parts.forEach(parse);
    });

  });
};

/**
 * [post description]
 * @param  {[type]}   domain     [description]
 * @param  {[type]}   from       [description]
 * @param  {[type]}   recipients [description]
 * @param  {[type]}   body       [description]
 * @param  {Function} callback   [description]
 * @return {[type]}              [description]
 */
SMTP.prototype.send = function(message, callback){
  if(!(message instanceof Message)){
    message = new Message(message);
  }
  var groupByHost = {}, recipients = [];
  if(message.to) recipients.push(message.to);
  if(message.cc) recipients.push(message.cc);
  if(message.bcc)recipients.push(message.bcc);
  recipients = recipients.map(function(recipient){
    var address = Message.parseAddress(recipient);
    (groupByHost[ address.host ] ||
    (groupByHost[ address.host ] = [])).push(address.address);
    return address.address;
  });
  var from = Message.parseAddress(message.from);
  Object.keys(groupByHost).map(function(domain){
    this.post(domain, from, groupByHost[domain], message.toString(), callback);
  }.bind(this));
  return this;
};


SMTP.Client = SMTP;
SMTP.Server = require('./server');
SMTP.createServer = function(options){
  return new SMTP.Server(options);
};

module.exports = SMTP;
