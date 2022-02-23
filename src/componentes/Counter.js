import { Component } from "react";
class Counter extends Component{

    constructor()
    {
        super()
        this.state={
            Counter:0,

        }
    }

    increment=()=>{
        {
            this.setState({
        Counter:this.state.Counter+1, })
        }
    }

    decrement()
    {
        this.setState({
       Counter:this.state.Counter-1, })
    }

    render()
    {
        return (
            <div>
        <h1>Count value is {this.state.Counter}</h1>
        <button onClick={()=>this.increment}>increment</button><br/>
        <button onClick={()=>this.decrement()}>decrement</button>
        </div>)
    }
}
    
    export default Counter;