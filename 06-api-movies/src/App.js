import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      welcome: "hello",
      movies: ""
    }
  }
  componentDidMount(){
    this.getMovies()
  }
  getMovies = async () => {
    let api = await this.callApi(); //json.data.movies
    //console.log(api)
    this.setState({
      movies : api
    })
  }
  callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(json => {
      console.log(json)
      return json.data.movies
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <Movies msg={this.state.welcome} data={this.state.movies}></Movies>
      // <div>
      //   {this.state.movies ? this.state.movies.map(function(v, i){
      //     return <p key={i}>{v.title}</p>
      //   }):'Loding...'}
      // </div>
    )
  }
}

export default App;
