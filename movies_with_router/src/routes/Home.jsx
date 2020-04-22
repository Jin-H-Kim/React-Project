import React from 'react';
import '../App.css';
import List from '../components/List'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies : ''
    }
  }
  
  componentDidMount(){
    this.makeMovies()
  }

  async makeMovies(){
    let data = await this.callApi()
    this.setState({
      movies : data
    })
  }

  callApi(){
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <div className={this.state.movies ? "movieList" : "movieList loding"}>
          {this.state.movies ? <List movies={this.state.movies}></List> : "Loding..."}
        </div>
      </div>
    )
  }
}


export default Home;
