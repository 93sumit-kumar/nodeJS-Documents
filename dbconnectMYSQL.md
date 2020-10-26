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
  conn.query("SELECT * FROM user", (err,res) => {
    if (err) throw err
    console.log("all data - ", res)
    console.log("1st user name - ", res[0].name)
    console.log("2nd user name - ", res[1].name)
  })
})
