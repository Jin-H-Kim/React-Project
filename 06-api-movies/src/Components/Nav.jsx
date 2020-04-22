import React from 'react';
import {Link}from 'react-router-dom';

function Nav(){
    return(
        <div>            
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    )
}

export default Nav