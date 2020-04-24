import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            keyword: ''
        }
    }
    fnSearch = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }
    fnMakeList = (movies) => {
        movies.sort();
        movies = movies.filter((movie)=>{
            return movie.title.toLowerCase().indexOf(this.state.keyword) > -1;
        })
        return(
            movies.map(function(movie, index){
                return(
                    <li key={movie.id}>
                        <div className="movieWrap">
                            <div className="img">
                                <p>
                                    <Link to={{
                                        pathname: `/detail/${movie.id}`,
                                        state: {
                                            img: movie.medium_cover_image,
                                            title: movie.title,
                                            genres: movie.genres,
                                            summary: movie.summary
                                        }
                                    }}>
                                        <img src={movie.medium_cover_image} alt={movie.title} />
                                    </Link>
                                </p>
                            </div>
                            <div className="info">
                                <p className="title">
                                    <Link to={{
                                        pathname: `/detail/${movie.id}`,
                                        state: {
                                            img: movie.medium_cover_image,
                                            title: movie.title,
                                            genres: movie.genres,
                                            summary: movie.summary
                                        }
                                    }}>
                                        {movie.title} (<span>{movie.rating}</span>)
                                    </Link>
                                </p>
                                <p className="genres">{movie.genres.map(function(genre, index){
                                    return <span key={genre + "_" + index}>{genre}</span>
                                })}</p>
                                <p className="summary">{movie.summary}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }
    render(){
        return(
            <div>
                <div className="serachBox">
                    <input type="text" placeholder="SEARCH TITLE" onChange={(e)=>{
                        this.fnSearch(e);
                    }} />
                </div>
                <ul className="listWrap">
                    {this.fnMakeList(this.props.movies)}
                </ul>
            </div>
        )
    }
}

export default List;