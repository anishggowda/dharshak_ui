import React from "react"
import Form from "./login.component"
import {Redirect} from "react-router-dom"
class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleauth = this.handleauth.bind(this);
    }
    handleauth=()=>{
        
        this.props.history.push("/chat")
    }
    render(){
        return(
            <div className="App">
            <h1>Welcome to darshak portal</h1>
            <Form handleauth={this.handleauth}/>
            </div>
        )
    }
}
export default Home;