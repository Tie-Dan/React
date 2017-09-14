const smtp = require('../../smtp');

const PORT = 25;

const server = smtp.createServer(function(message){
  console.log(message);
}).listen(PORT, function(){
  console.log('X-MAIL SERVER IS LISTENING ...');
});
