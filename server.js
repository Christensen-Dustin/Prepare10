const connectionString = process.env.DATABASE_URL || "postgres://mboyxxguszqiuc:5923050be96786641b297de723b4e9b90e7380e336a34c8b637dd853a04d912a@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d83naof1orve8s?ssl=true";

const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});

var sql = "SELECT * FROM eventAccount";
var sql2 = "SELECT * FROM eventEntry";
var sql3 = "SELECT * FROM eventTheme";
var sql4 = "SELECT * FROM eventNote";
var sql5 = "SELECT * FROM eventThemeConnection";
var sql6 = "SELECT * FROM eventNoteConnection";
var rows = '';

pool.query(sql, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});

pool.query(sql2, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});

pool.query(sql3, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});

pool.query(sql4, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});

pool.query(sql5, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});

pool.query(sql6, function(err, result) {
    // If an error occurred....
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
    
    // Log this to the console for debugging purposes.
    console.log("Back from DB with results: ");
    console.log(result.rows);
    
});