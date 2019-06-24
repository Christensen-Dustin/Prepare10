const connectionString = process.env.DATABASE_URL || "postgres://mboyxxguszqiuc:5923050be96786641b297de723b4e9b90e7380e336a34c8b637dd853a04d912a@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d83naof1orve8s?ssl=true";

const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});

var sql = "SElECT * FROM accountEvent";
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