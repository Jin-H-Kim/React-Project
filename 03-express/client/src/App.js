import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers : ""
    }
  }
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render(){
    return(
      <div className="App">
        <ul className="userList">
          {this.state.customers ? this.state.customers.map(function(v, i){
            return(
              <li key={i}>
                <p className="userImg"><img src={v.img} alt={v.name + "alt 입니다"} /></p>
                <p className="userName">{v.name} / {v.age}</p>
                <p className="userGender">{v.gender}</p>
                <p className="userJob">{v.job}</p>
              </li>
            )
          }): "loding"}
          
        </ul>
      </div>
    )
  }
}


export default App;
