import React from 'react';
import './App.css';
import AddWrap from './components/AddWrap';
import ViewWrap from './components/ViewWrap';
import { Provider } from 'react-redux';
import store from './Store'

class App extends React.Component{
  state = {
    size : 0
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AddWrap chageSize={(_size)=>{
            this.setState({
              size: Number(_size) + Number(this.state.size)
            })
          }}></AddWrap>
          <ViewWrap size={this.state.size}></ViewWrap>
        </div>
      </Provider>
    );
  }
  
}

export default App;
