import React, { Component } from "react";
import axios from 'axios'
import "../index.css";
import "../style.css";


export default class ButtonPage extends Component {

  constructor(props){
    super();
    this.sendMessage = this.sendMessage.bind(this)

  }
  state={
    message:"",
    recievedMessage:"",
    renderMessage:[]
  }
  messageArray =[];
 
  uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }


  sendMessage(messageObj){
    
    
    const rasaMessageObj = {
      message:this.state.message,
      sender: this.uuidv4()
    };
    this.messageArray.push({type:"to",value:this.state.message})
    this.setState({renderMessage:this.messageArray})
    this.state.renderMessage.push()
    axios.post("http://localhost:5005/webhooks/rest/webhook",rasaMessageObj).then(result=>{
      console.log(result.data[0]);
     this.messageArray.push({type:"from",value:result.data[0].text})
      this.setState({renderMessage:this.messageArray})
      this.setState({message:""})
    })
     
  }
  render() {
    return (
      <div className="container">
          <div className="row">
  <div className="column">
  <h3>Chat</h3>
        <br />
        <button  class="button-border btn-primary ">
          <span>Orientation</span>
        </button>
        <br></br>
        <button  class="button-border btn-secondary ">
          <span>Training</span>
        </button>
        <br></br>
        <button className="button-border btn-danger ">
          <span>Frequently Asked Questions</span>
        </button>
        <br></br>
        <button className="button-border btn-warning ">
          <span>Personal Details</span>
        </button>
        <br></br>
        <button className="button-border btn-dark ">
          <span>Suggestion Scheme</span>
        </button>
  </div>
  <div className="column1">
  <div class="centered">
    <div class="chatbox">
        <div class="chatlogs" style={{height:400}}>
          {
            this.state.renderMessage.map((message,index)=>{
             return( message.type === "from" ? (
                <div class="chat user" key={index}>
                <div class="user-photo"></div>
                <p class="chat-message">{message.value}</p>
            </div>
              ) :<div class="chat bot"key={index}>
              <div class="user-photo"></div>
              <p class="chat-message">{message.value}</p>
          </div>)
            })
          }
      
    
           
        </div>
        <div class="chat-form">
            <input onChange={(e)=>{this.setState({message:e.target.value})}} value={this.state.message}></input>
            <button onClick={this.sendMessage}>Send</button>
        </div>
    </div>
    </div>
  </div>
</div>
      </div>
      

    );
  }
}
