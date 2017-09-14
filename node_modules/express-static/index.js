const fs   = require('fs');
const url  = require('url');
const path = require('path');
const mime = require('mail2/mime');
/**
 * [exports description]
 * @param  {[type]} root    [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function(root, options){
  var defaults = {
    index: 'index.html'
  };
  options = options || {};
  for(var k in options)
    defaults[ k ] = options[ k ];
  options = defaults;
  /**
   * [function description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  return function(req, res, next){
    var pathname = url.parse(req.url).pathname;
    var filename = path.join(path.resolve(root), pathname);
    if(filename.endsWith('/') && typeof options.index === 'string') 
      filename += options.index;
    fs.stat(filename, function(err, stat){
      if(err) return next(err);
      if(stat.isDirectory()){
        if(options.index === true){
          return renderDirectory(root, filename, res);
        }
        res.writeHead(301, { 
          'Location': pathname + '/' 
        });
        return res.end();
      }
      if(new Date(req.headers['if-modified-since']) - stat.mtime == 0){
        res.writeHead(304);
        return res.end();
      }
      var type = mime.lookup(filename);
      var charset = /^text\/|^application\/(javascript|json)/.test(type) ? 'UTF-8' : false;
      res.setHeader('Last-Modified', stat.mtime);
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
      fs.createReadStream(filename).pipe(res);
    });
  };
};
/**
 * [renderDirectory description]
 * @param  {[type]}   dir      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function renderDirectory(cwd, dir, res){
  var content = '';
  content += '<h1>Index of '+ dir.replace(cwd, '') +'</h1>';
  content += '<hr />';
  fs.readdir(dir, function(err, files){
    content += '<table width="50%">';
    content += '<tr>';
    content += '<td><a href="..">../</a></td>';
    content += '</tr>';
    files.map(function(filename){
      var stat = fs.statSync(path.join(dir, filename));
      filename = filename +  (stat.isDirectory() ? '/' : '');
      content += '<tr>';
      content += '<td><a href="' + filename + '">' + filename + '</a></td>';
      content += '<td>' + (stat.mtime || '-')      +                '</td>';
      content += '<td>' + (stat.size        )      +                '</td>';
      content += '</tr>';
    }).join('');
    content += '</table>';
    content += '<hr/>';
    content += 'Powered by <a href="https://github.com/song940/kelp-static" >kelp-static</a>';
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
  });
}
