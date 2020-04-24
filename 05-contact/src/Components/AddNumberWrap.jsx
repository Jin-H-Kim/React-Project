import React from 'react'
import AddNuberInner from './AddNumberInner'

class AddNuberWrap extends React.Component{
    render(){
        return(
            <div className="box">
                Add Wrap
                <AddNuberInner sizeCheck={function(size){
                    this.props.sizeCheck(size)
                }.bind(this)}></AddNuberInner>
            </div>
        )
    }
}

export default AddNuberWrap;