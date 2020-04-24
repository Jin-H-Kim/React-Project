import React from 'react';

class AddNumber extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size : 0
        }
    }
    render(){
        return(
            <div>
                <button type="button" onClick={(e)=>{
                    this.props.changeStore(this.state.size)
                }}>ADDtest</button>
            </div>
        )
    }
}

export default AddNumber;