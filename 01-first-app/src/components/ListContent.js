import React from 'react';

class ListContent extends React.Component{
    render(){
        return(
            <div className="listContent">
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default ListContent;