import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props
        console.log(history, location)
        if(location.state === undefined){
            history.push('/')
        }
        
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <div>
                    <h1>{location.state.title}</h1>
                    <p><img src={location.state.img} alt={location.state.title} /></p>
                </div>
            )
        }else{
            return null
        }
        
    }
}

// function Detail({location}){
//     console.log(location)
//     return(
//         <div>
//             <h1>Detail Page</h1>
//             <p>{location.state !== undefined ? location.state.title : 'loding'}</p>
//         </div>
//     )
// }

export default Detail;