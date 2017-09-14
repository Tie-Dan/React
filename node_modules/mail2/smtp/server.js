const tcp = require('net');
/**
 * [CRLF description]
 * @type {String}
 */
const CRLF = '\r\n';
/**
 * [SMTPServer description]
 * @param {[type]} options [description]
 */
function SMTPServer(options, callback){
  this.options = options || {};
  this.server = tcp.createServer(this.process.bind(this, callback));
};
/**
 * [function description]
 * @param  {[type]} sock [description]
 * @return {[type]}      [description]
 */
SMTPServer.prototype.process = function(callback, sock){
  var message = {};
  /**
   * [response description]
   * @param  {[type]} code [description]
   * @param  {[type]} msg  [description]
   * @return {[type]}      [description]
   */
  function response(code, msg){
    sock.write([ code, msg ].join(' ') + CRLF);
  };
  /**
   * [parse description]
   * @param  {[type]} line [description]
   * @return {[type]}      [description]
   */
  var msg = '';
  function parse(line){
    msg += (line + CRLF);
    switch(line.split(/\s/)[0]){
      case 'HELO':
      case 'EHLO':
        response(250, 'OK');
        msg = '';
        break;
      case 'MAIL':
        message.from = line.split(':')[1];
        response(250, 'OK');
        msg = '';
        break;
      case 'RCPT':
        (message['recipients'] ||
        (message['recipients'] = [])).push(line.split(':')[1]);
        response(250, 'OK');
        msg = '';
        break;
      case 'DATA':
        response(354, 'start input end with . (dot)');
        msg = '';
        break;
      case '.':
        message.content = msg;
        response(250, 'Bye');
        msg = '';
        break;
      case 'QUIT':
        callback(message);
        sock.end();
        break;
    }
  };
  /**
   * [data description]
   * @type {String}
   */
  var data = '', parts = [];
  sock.on('error', function(err){
    console.log(err);
  }).on('data', function(chunk){
    console.log(chunk);
    data += chunk;
    parts = data.split(CRLF);
    data = parts.pop();
    parts.forEach(parse);
  });
  /**
   * [response description]
   */
  response(220, 'Mail Server');
};
/**
 * [function description]
 * @param  {[type]}   port     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
SMTPServer.prototype.listen = function(port, callback){
  this.server.listen.apply(this.server, arguments);
};

module.exports = SMTPServer;
