var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World v1.1");
});

app.listen(4000, function () {
  console.log('Basic Node App listening on port 4000!')
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});
