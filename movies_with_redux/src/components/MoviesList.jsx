import React from 'react';
import { Link } from 'react-router-dom';

class MoviesList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies: "",
            keyword: ""
        }
    }
    componentDidMount() {
        this.makeMoveList();
    }
    async makeMoveList() {
        const movies = await this.callApi()
        this.setState({
            movies
        })
    }
    callApi() {
        return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
            .then(res => res.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }
    makeList = (movies) => {
        if(movies){
            movies.sort();
            movies = movies.filter((data)=>{
                return data.title.indexOf(this.state.keyword) > -1;
            })
            return (movies.map(function(movie, index){
                return (<li key={movie.id}>
                    <div className="movieWrap">
                        <p className="img">
                            <Link to={{
                                pathname: `./detail/${movie.id}`,
                                state: {
                                    title: movie.title,
                                    desc: movie.summary,
                                }
                            }}>
                                <img src={movie.medium_cover_image} alt={movie.title} />
                            </Link>
                        </p>
                        <div className="info">
                            <p className="title">{movie.title}</p>
                            <div className="genres">
                            {movie.genres.map(function(genre, index){
                                return <span key={genre+"_"+index}>{genre}</span>
                            })}
                            </div>
                            <p className="summary">{movie.summary}</p>
                        </div>
                    </div>
                </li>)
            }))
        }else{
            return "Loding..."
        }
    }
    render(){
        return(
            <div>
                <div className="serachBox">
                    <input type="text" onChange={(e)=>{
                        this.setState({
                            keyword: e.target.value
                        })
                    }}></input>
                </div>
                <div className="listWrap">
                    <ul>
                        {this.makeList(this.state.movies)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MoviesList;