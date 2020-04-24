import React from 'react';
import './App.css';
import AddNuberWrap from './Components/AddNumberWrap';
import ViewNumberWrap from './Components/ViewNumberWrap';

class App extends React.Component{
  constructor(props){
    super(props)    
    this.state = {
      size : 1
    }
  }
  render(){
    return(
      <div className="App">
        <AddNuberWrap sizeCheck={(size)=>{
          this.setState({
            size : Number(this.state.size) + Number(size)
          })
        }}></AddNuberWrap>
        <ViewNumberWrap size={this.state.size}></ViewNumberWrap>
      </div>
    )
  }
}

export default App;
