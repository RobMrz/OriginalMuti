import http from 'http';
import sqlite3 from 'sqlite3';
import index from './Index.mjs';
//import inventory from './Inventory.js';

let db;

http.createServer(function (request, response) {

    // set the Access-Control-Allow-Origin header
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    // Connect to the database
    db = new sqlite3.Database('C:/Users/User-PC/Downloads/Programs/SQLite/OM.db');

    //JS Function call
    try {
        index(response);
    } catch (error) {
        console.error(error);
    }
  

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


export {db};
