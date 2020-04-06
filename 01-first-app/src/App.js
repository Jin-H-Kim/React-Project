import React from 'react';
import './App.css';
import Top from './components/Top';
import List from './components/List';
import ListContent from './components/ListContent';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      welcome: {
        title: 'Welcome',
        desc: 'Welcome to my first-react-app!!!',
      } 
    }
  }
  render(){
    return (
      <div className="App">

        <Top title="WEB" onChangeMode={()=>{
          this.setState({
            mode : 'welcome'
          })
        }}></Top>
        <List></List>
        <ListContent title={this.state.welcome.title} desc={this.state.welcome.desc}></ListContent>

      </div>
    );
  }
}


export default App;
