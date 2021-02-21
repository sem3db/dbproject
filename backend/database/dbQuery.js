const pool = require("./config.js");

function executeSQL(sql,placeholder){
    return new Promise((res,rej)=>{
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
           
            // Use the connection
            connection.query(sql,placeholder, async (error, results, fields)=> {

                // When done with the connection, release it.
                connection.release();
            
                // Handle error after the release.
                if (error){
                    rej({error});
                }else{
                    res(results);
                }

                // Don't use the connection here, it has been returned to the pool.
            });
          });
    });
}

module.exports = {executeSQL};