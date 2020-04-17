import React from 'react';
import './App.css';
import Create from './components/Create';
import Delete from './components/Delete';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      customers : ""
    }
  }

  stateRefresh = (e) =>{
    this.setState({
      customers : ""
    })
    this.callApi()
      .then(res => this.setState({
        customers : res
      }))
      .catch(err => console.log(err));
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
              <Delete stateRefresh={this.stateRefresh} id={v.id}></Delete>
            </li>)
          }.bind(this)): "Loding..."}
        </ul>
        <Create stateRefresh={this.stateRefresh}></Create>
      </div>
    )
  }
}

export default App;
