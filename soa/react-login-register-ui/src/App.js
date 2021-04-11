

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css"

import ButtonPage from "./component/button.components";
import ChatPage from "./component/chat.component";
import Form from "./component/login.component"
import Home from "./component/Home"
function App() {

  return (
  
      
  <Router>
   
      <div className="outer">
         <div className="inner">
            <Route exact path="/" component={Home} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/main" component={ButtonPage}  />
            <Route exact path="/chat" component={ChatPage}  />
            </div>
       </div>  
  
   </Router> 
  
  
  );
}

export default App;
