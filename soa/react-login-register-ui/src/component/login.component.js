import React, { Component } from "react";
import {useState} from "react"
import axios from "axios"
import "../index.css"
function Form(props) {
    
    const [username,setusername]= useState('')
const [password,setpassword]= useState('')  



const login = ()=>{
    
  axios.post("http://localhost:8000/login",{
      username:username,
      password:password,
  }).then((response)=>{
    if(response.data[0].username && response.data[0].password){
      props.handleauth(response.data)
    }else{
      alert(response.data)
    }
  })
}
        return (
            <div className="App">
           

                <h3>HR ChatBot</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" onChange={(e)=>{setusername(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>{setpassword(e.target.value)}} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                

                <button className="btn btn-dark btn-lg btn-block"  onClick={login}>login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
           
            </div>
        );
    }

export default Form;
