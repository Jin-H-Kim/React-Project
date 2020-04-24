import React from 'react';

class ViewInner extends React.Component{
    render(){
        return (
        <div>{this.props._size}{this.props.unit}{this.props.name}</div>
        );
    }
  
}

export default ViewInner;
