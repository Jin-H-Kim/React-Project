import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : null,
      user : [
        {id: 1, title: 'Kim'},
        {id: 2, title: 'Jin'},
        {id: 3, title: 'hyuk'}
      ]
    }
    //this.callApi = this.callApi.bind(this)
  }

  callApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          data : [{
            id : json.id,
            title : json.title,
            completed : json.completed
          }]
        })
      })
  }

  // callApi(){
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(function(res){
  //       return (
  //         res.json()
  //       )
  //     }.bind(this))
  //     .then(function(json){
  //       return this.setState({data : json.title})
  //     }.bind(this))
  // }

  componentDidMount(){
    setTimeout(()=>{
      this.callApi();
    }, 0)
  }
  render(){
    return(
      <div className="App">
        <div>
          {(this.state.data) ? this.state.data.map(function(v,idx){
            return <div key={idx}>{v.id}</div>
          }) : ""}
          {/* {this.state.user.map(function(v){
            //console.log(v)
            return(
              <div key={v.id}>{v.title}</div>
            )
          })} */}
          {(this.state.data) ? this.state.data.id +' / '+ this.state.data[0].title + " / " + this.state.data.completed : 'Data Loding....'}
        </div>
      </div>
    )
  }
}

export default App;
