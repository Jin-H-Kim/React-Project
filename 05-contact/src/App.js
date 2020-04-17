import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';

class App extends React.Component{
  constructor(props){
    super(props)    
    this.state = {
        contact : [
            {
                id: 1,
                name: "adam",
                tel: "010-4441-3579"
            },
            {
                id: 2,
                name: "han",
                tel: "010-1234-5678"
            },
            {
                id: 3,
                name: "kim",
                tel: "010-7673-3579"
            }
        ]
    }
}
  render(){
    return(
      <div className="App">
        <Contact data={this.state.contact}></Contact>
      </div>
    )
  }
}

export default App;
