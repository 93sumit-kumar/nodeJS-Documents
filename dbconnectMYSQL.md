```node
const mySql = require('mysql')

const conn = mySql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "new_database"
  }
)
conn.connect(function(err){
  if(err) throw err
  console.log("connected...")
})
