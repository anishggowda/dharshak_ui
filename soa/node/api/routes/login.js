var mysql = require("mysql")
var express = require("express");
var app = express.Router();
var cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        database:"soa",
        username:"root",
        password:"root",
    }
)
db.connect((err)=>{
  if(err) throw err;
  console.log("connected")
})

app.post("/"
,(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "select * from login where username=? and password=?",[username,password],
        (err,result)=>{
            if(err) {
                res.send({err:err})
            }
            if(result.length>0){
                res.send(result)
            }
            else{
                res.send("please check your user name or password")
            }
        }

    )
})
module.exports = app;