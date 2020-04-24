import React from 'react';
import ViewInner from './ViewInner';

class ViewWrap extends React.Component{
    render(){
        return(
            <div>
                ViewWrap
                <ViewInner size={this.props.size}></ViewInner>
            </div>
        )
    }
}

export default ViewWrap;