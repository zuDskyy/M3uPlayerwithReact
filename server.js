const express = require('express');
const fs = require('fs');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const server = express();

server.use(express.static(path.join(__dirname,  'build')));

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.use('/proxy', createProxyMiddleware({
    target: 'http://example.com', // Placeholder target, will be dynamically overwritten
    changeOrigin: true,
    pathRewrite: (path, req) => {
      return ''; // Remove all path when forwarding request
    },
    onProxyReq: (proxyReq, req, res) => {
      const url = req.query.url; // Get the target URL from the query parameter
      if (url) {
        // Set the full URL for the proxy request
        proxyReq.path = url;
      }
    }
  }));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
