import React from 'react';
import ViewInner from '../containers/ViewInner';

class ViewWrap extends React.Component{
  render(){
    return (
      <ViewInner size={this.props.size} unit={'kg'} name={'wow'}></ViewInner>
    );
  }
  
}

export default ViewWrap;
