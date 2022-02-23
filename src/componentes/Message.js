import { Component } from "react";
class Message extends Component{
    render()
    {
        return <h1>This is a class component {this,this.props.content}</h1>
    }
}
    
    export default Message;