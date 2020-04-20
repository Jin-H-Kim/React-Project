import React from 'react';

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        }
    }
    _makeList(data){
        data.sort();
        data = data.filter((v) => {
            return v.title.toLowerCase().indexOf(this.state.keyword) > -1
        })
        return data.map(function(value){
            return(
                <li key={value.id}>
                    <p className="img"><img src={value.medium_cover_image} alt={value.title} /></p>
                    <div className="desc">
                        <p className="title">{value.title} ({value.rating})</p>
                        <p> 
                            {value.genres.map(function(genre, i){
                                return <span key={genre + i} className="genres">{genre}</span>
                            })}
                        </p>
                        <p className="summary">{value.summary}</p>
                    </div>
                    
                </li>
            )
        })
    }
    render(){
        return(
           <div>
               <div className="searBox">
                   <input type="text" placeholder="SEARCH TITLE" onChange={(e)=>{
                       this.setState({
                            keyword: e.target.value
                       })
                   }} />
               </div>
               <div>
                   <ul className="list">
                       {this._makeList(this.props.data)}
                   </ul>
               </div>
           </div> 
        )
    }
}

// function MoviesList({data}){
//     return(
//         <div>
//             <div>
//                 <input type="text" />
//             </div>
//             <ul>
//                 {data.map(function(value){
//                     return (
//                     <li key={value.id}>
//                         <p>{value.title}</p>
//                     </li>
//                     )
//                 })}
//                 <li></li>
//             </ul>
//         </div>
//     )
// }

export default MoviesList;