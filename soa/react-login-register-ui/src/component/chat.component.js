import React, { Component } from "react";
import "../index.css";
import "../style.css";


export default class ButtonPage extends Component {
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
        <div class="chatlogs">
            <div class="chat user">
                <div class="user-photo"></div>
                <p class="chat-message">hello 1</p>
            </div>
            <div class="chat bot">
                <div class="user-photo"></div>
                <p class="chat-message">hello2</p>
            </div>
            <div class="chat user">
                <div class="user-photo"></div>
                <p class="chat-message">hello 3</p>
            </div>
            <div class="chat bot">
                <div class="user-photo"></div>
                <p class="chat-message">hello 3</p>
            </div>
        </div>
        <div class="chat-form">
            <textarea></textarea>
            <button>Send</button>
        </div>
    </div>
    </div>
  </div>
</div>
      </div>
      

    );
  }
}
