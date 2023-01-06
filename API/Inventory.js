import { global } from "./Globals.mjs"; 
import http from 'http';
import http from 'sqlite3';

http.createServer(function (request, response) {
    // set the Access-Control-Allow-Origin header
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
  // Connect to the database
  const db = new sqlite3.Database(global);


  function SQLQueryInventory() {
     // Execute a SELECT statement
  db.all('SELECT * FROM Inventory', [], (err, rows) => {
    if (err) {
      throw err;
    }

    // write the data to the response body
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(rows));

    // close the database connection
    db.close();
  });
}

SQLQueryInventory();
 
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');