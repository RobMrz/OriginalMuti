const http = require('http');
const sqlite3 = require('sqlite3').verbose();

http.createServer(function (request, response) {
    // set the Access-Control-Allow-Origin header
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
  // Connect to the database
  const db = new sqlite3.Database('C:/Users/User-PC/Downloads/Programs/SQLite/OM.db');

  // Execute a SELECT statement
  db.all('SELECT * FROM Users', [], (err, rows) => {
    if (err) {
      throw err;
    }

    // write the data to the response body
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(rows));

    // close the database connection
    db.close();
  });
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');



