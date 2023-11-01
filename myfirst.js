var http = require('http');
var dt = require('./myfirstmodule');
var formidable = require('formidable');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  // res.write(req.url);
  // res.write("The date and time are currently: " + dt.myDateTime());
  // res.end();
  // if (req.url == '/fileupload') {
  //   var form = new formidable.IncomingForm();
  //   form.parse(req, function (err, fields, files) {
  //     res.write('File uploaded');
  //     res.end();
  //   });
  // } else {

  //   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  //   res.write('<input type="file" name="filetoupload"><br>');
  //   res.write('<input type="submit">');
  //   res.write('</form>');
  //   return res.end();
  // }
  function countdown(seconds) {
    for (let i = seconds; i >= 0; i--) {
      console.log(`Countdown: ${i} seconds remaining`);
      res.write("Countdown:"+ i +" seconds remaining");
    }
    console.log("Countdown complete!");
  }

  console.log("Start countdown...");
  countdown(5);
  console.log("End of program.");
}).listen(5000, '127.0.0.1');