import React from 'react'

class ViewNuberInner extends React.Component{
    render(){
        return(
            <div className="">
                View Inner
                <p>{this.props.size}</p>
            </div>
        )
    }
}

export default ViewNuberInner;