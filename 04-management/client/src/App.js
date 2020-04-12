import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      customers : ""
    }
  }
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({
        customers : res
      }))
      .catch(err => console.log(err));
  }
  callApi = async ()=>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body
  }
  render(){
    return(
      <div className="App">
        <ul className="userList">
          {this.state.customers ? this.state.customers.map(function(v){
            return (<li key={v.id}>
              <p className="userImg"><img src={v.image} alt="alt입니다" /></p>
              <p>{v.name} / {v.gender} / {v.birthday}</p>
              <p>{v.job}</p>
            </li>)
          }): "Loding..."}
        </ul>
      </div>
    )
  }
}

export default App;
