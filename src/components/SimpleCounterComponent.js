import { Component } from "react";

class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         toggle:true
      }
    }
    handleToggle=()=>{
        this.setState((prevState)=>({
            toggle:!prevState.toggle,
        }))
    }
    handleCount=()=>{
        if (this.state.toggle){
            this.setState((prevState)=>({
                count: prevState.count+1
            }))
        }else{
          this.setState({
              count:this.state.count
          })
        }
    }
    render() {
        console.log("This is Simple Component")
        return (
          <div>
            <h2>Simple Component</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleToggle}>Set Toggle</button>
            <button onClick={this.handleCount}>Counter</button>
          </div>
        );
    }
}
export default SimpleCounterComponent;
