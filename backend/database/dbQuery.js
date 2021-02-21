<<<<<<< HEAD
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
=======
const {adminpool,customerpool} = require("./config.js");

function adminExecuteSQL(sql, placeholder) {
  return new Promise((res, rej) => {
    adminpool.getConnection(function (err, connection) {
      // if (err) throw err; // not connected!

      // Use the connection

      if (!err) {
        //console.log("DataBase Connected".cyan.underline);
      } else {
        console.log("DataBase Connection Failed...".red.bold);
        throw err;
      }

      connection.query(sql, placeholder, async (error, results, fields) => {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) {
          rej({ error });
        }
        res(results);

        // Don't use the connection here, it has been returned to the pool.
      });
    });
  });
}

function customerExecuteSQL(sql, placeholder) {
  return new Promise((res, rej) => {
    customerpool.getConnection(function (err, connection) {
      // if (err) throw err; // not connected!

      // Use the connection

      if (!err) {
        //console.log("DataBase Connected".cyan.underline);
      } else {
        console.log("DataBase Connection Failed...".red.bold);
        throw err;
      }

      connection.query(sql, placeholder, async (error, results, fields) => {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) {
          rej({ error });
        }
        res(results);

        // Don't use the connection here, it has been returned to the pool.
      });
>>>>>>> e9ff792d859f92c39c23a24519d481fe58af14f8
    });
  });
}

module.exports = { adminExecuteSQL,customerExecuteSQL };
