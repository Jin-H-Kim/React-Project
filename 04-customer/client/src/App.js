import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers: ""
    }
  }
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({
        customers : res
      }))
      .catch(err => console.log(err))
  }
  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render(){
    return(
      <div className="App">
        <ul className="userList">
          {this.state.customers ? this.state.customers.map(function(v,i){
            return(
              <li key={i+'_'+v.name}>
                <p className="userImg"><img src={v.image} alt='alt' /></p>
                <p>{v.name} / {v.gender}</p>
                <p>{v.birthday} / {v.job}</p>
              </li>
            );
          }): "Loding..."}
        </ul>
      </div>
    );
  }
}

export default App;
