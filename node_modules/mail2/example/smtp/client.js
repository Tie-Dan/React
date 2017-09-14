const smtp = require('../../smtp');

smtp.send({
  headers: {
    From   : 'from@lsong.org',
    To     : 'to@lsong.org'  ,
    Subject: 'welcome mail'
  },
  body: { _: 'hello' }
}, function(err, reply){
  console.log(err, reply);
});
