import React, { Component } from "react";
import "../index.css";

export default class ButtonPage extends Component {
  render() {
    return (
      <div className="container">
        <h3>Darshak Portal</h3>
        <br />
        <button style={{ width: 320 }} class="button-border btn-primary ">
          <span>Orientation</span>
        </button>
        <button style={{ width: 320 }} class="button-border btn-secondary ">
          <span>Training</span>
        </button>
        <button style={{ width: 320 }} class="button-border btn-danger ">
          <span>Frequently Asked Questions</span>
        </button>
        <button style={{ width: 320 }} class="button-border btn-warning ">
          <span>Personal Details</span>
        </button>
        <button style={{ width: 320 }} class="button-border btn-dark ">
          <span>Suggestion Scheme</span>
        </button>
      </div>
    );
  }
}
