import React from 'react'
import ViewNuberInner from './ViewNuberInner'

class ViewNumberWrap extends React.Component{
    render(){
        return(
            <div className="box">
                View Wrap
                <ViewNuberInner size={this.props.size}></ViewNuberInner>
            </div>
        )
    }
}

export default ViewNumberWrap;