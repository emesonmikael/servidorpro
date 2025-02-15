const express = require('express');
   const { createProxyMiddleware } = require('http-proxy-middleware');
   const https = require('https');
   const fs = require('fs');

   const app = express();

   // Configuração do proxy
   app.use(
       '/',
       createProxyMiddleware({
           target: 'http://cdn.srvmain.top:80', // Servidor HTTP original
           changeOrigin: true,
           secure: false, // Ignora erros de certificado SSL (não recomendado para produção)
       })
   );

   

   // Inicia o servidor HTTPS na porta 443
   https.createServer( app).listen(443, () => {
       console.log('Servidor HTTPS rodando na porta 443');
   });