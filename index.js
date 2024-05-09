const http = require('http');


const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

  res.end('Serhii Orlov\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});