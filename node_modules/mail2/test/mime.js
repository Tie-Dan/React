const fs     = require('fs');
const path   = require('path');
const assert = require('assert');
const MIME   = require('../mime');

describe('MIME', function(){

  var filename = path.dirname(__dirname) + '/docs/smtp-qq.txt';

  it('MIME#pipe', function(done){


    var part = new MIME();

    part.on('header', function(headers){
      assert.equal(headers['Mime-Version']._, '1.0');
      assert.equal(headers['Subject']._, 'test');
      assert.equal(headers['Message-ID']._, '<tencent_4F34D055476789304B5F8318@qq.com>');
    });

    part.on('body', function(body){
      assert.equal(body._, 'This is a multi-part message in MIME format.');
      done();
    });

    fs.createReadStream(filename).pipe(part);

  });

  it('MIME#parse', function(){

    var content = fs.readFileSync(filename, 'utf8');
    var mime = MIME.parse(content);
    assert.equal(mime.headers['Mime-Version']._, '1.0');
    assert.equal(mime.headers['Subject']._, 'test');
    assert.equal(mime.headers['Message-ID']._, '<tencent_4F34D055476789304B5F8318@qq.com>');
    assert.equal(mime.body._, 'This is a multi-part message in MIME format.');
    assert.equal(mime.body[1].headers['Content-Transfer-Encoding']._, 'base64');
    assert.equal(mime.body[1].body, 'PGRpdj50ZXN0IG1haWw8L2Rpdj4=');
  });

  it('MIME#lookup', function(){

    assert.equal(MIME.lookup('a.txt'), 'text/plain');
    assert.deepEqual(MIME.extension('text/plain'), [ 'txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini' ]);

  });

});