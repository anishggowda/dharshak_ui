
var mysql = require("mysql")
var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        username:"root",
        password:"root"
    }
)
db.connect((err)=>{
  if(err) throw err;
  console.log("connected")
})

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "select * from login where username=? and password=?",[username,password],
        (err,result)=>{
            if(err) {
                response.send({err:err})
            }
            if(result.length>0){
                res.send(result)
            }
            else{
                alert("you have entered wrong credentials")
            }
        }

    )
})