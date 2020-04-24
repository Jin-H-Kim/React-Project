import React from 'react';
import './App.css';
import AddWrap from './components/AddWrap'
import ViewWrap from './components/ViewWrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      size: 0
    }
  }
  render(){
    return (
      <div className="App">
        <AddWrap changeValue={(num)=>{
          this.setState({
            size: Number(num) + Number(this.state.size)
          })
        }}></AddWrap>
        <ViewWrap size={this.state.size}></ViewWrap>
      </div>
    );
  }
  
}

export default App;
