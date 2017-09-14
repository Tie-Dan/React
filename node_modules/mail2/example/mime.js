const fs 	  = require('fs');
const Message = require('../mime');

const message = new Message();

// message.from = 'hi@lsong.org';

// message.headers[ 'From'    ] = 'from@lsong.org';
// message.headers[ 'To'      ] = 'to@lsong.org';
// message.headers[ 'Subject' ] = 'title';
//
// message.body = { _: 'hello' };

message.on('headers', function(headers){
  console.log(headers);
});

message.on('body', function(msg){
  console.log(msg);
});

// message.on('end', function(msg){
//   console.log(msg);
// });

// console.log( MIME.extension( MIME.lookup('a.txt') ) );
//
// var message = new Message({
//   from : '',
//   to   : '',
//   cc   : '',
//   bcc  : '',
//   subject: '',
//   content: '',
// });
//
fs.createReadStream('./docs/mail.txt').pipe(message);
// const message = Message.parse(fs.readFileSync('./docs/smtp-qq.txt', 'utf8'));
// console.log(message);

