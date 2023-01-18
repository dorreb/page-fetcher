const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
  }

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    const byteSize = body.length;
    console.log(`\nDownloaded and saved ${byteSize} bytes to./ index.html\n`);
  });
});






