import React from 'react';
import AddInner from '../containers/AddInner'

class AddWrap extends React.Component {
  render(){
    return (
      <AddInner chageSize={this.props.chageSize}></AddInner>
    );
  }
  
}

export default AddWrap;
