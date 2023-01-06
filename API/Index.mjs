import http from 'http';
import sqlite3 from 'sqlite3';
import {db} from './Globals.mjs'

var index = function SQLQuery(response) {

  // // Execute a SELECT statement
  db.all('SELECT * FROM Users', [], (err, rows) => {
    if (err) {
      throw err;
    }

  //   // write the data to the response body
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(rows));

  //   // close the database connection
    db.close();
  });
}

export default index;
