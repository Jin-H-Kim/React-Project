import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className="nav">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        )
    }
}

export default Home;