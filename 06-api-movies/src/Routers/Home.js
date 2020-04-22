import React from 'react';
import './Home.css';
import MoviesList from '../Components/MoviesList'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies : ''
    }
  }
  componentDidMount(){
    this._getMoviesList()
  }
  _getMoviesList = async () => {
    var movies = await this._calApi();
    this.setState({
      movies : movies
    })
  }
  _calApi(){
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }
  render(){
    return(
      <div className={this.state.movies ? "moviewWrap" : "listWrap"}>
        {this.state.movies ? <MoviesList data={this.state.movies}></MoviesList> : "Loding...."}
      </div>
    )
  }
}

export default Home;
