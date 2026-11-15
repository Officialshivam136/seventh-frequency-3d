// Tiny static file server (optional). Usage: node serve.js  -> http://localhost:8377
const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.glb':'model/gltf-binary'};
http.createServer((q,s)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';
  const f=path.join(__dirname,path.normalize(p));if(!f.startsWith(__dirname)){s.writeHead(403);return s.end()}
  fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);return s.end('not found')}s.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream','Cache-Control':'no-store'});s.end(d)})
}).listen(8377,()=>console.log('http://localhost:8377'));
