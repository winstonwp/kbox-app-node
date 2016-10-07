var http = require('http');
var port = process.env.PORT || 80;

var requestHandler = function(request, response){
  response.end('Simple nodejs server <br> Keep up the good work!!');
}

var server = http.createServer(requestHandler);

server.listen(port, function(err){
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on %s`, port);
})
