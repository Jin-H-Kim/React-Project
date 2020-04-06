import React from 'react';

class List extends React.Component{
    render(){
        return(
            <div className="list">
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JAVASCRIPT</a></li>
                </ul>
            </div>
        );
    }
}

export default List;