const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname,  'build')));

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
