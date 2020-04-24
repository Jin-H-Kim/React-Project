import React from 'react'

class AddNuberInner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 0
        }
    }
    add = () =>{
        this.props.sizeCheck(this.state.size)
    }
    render(){
        return(
            <div className="">
                Add Inner
                <div>
                    <input type="text" onChange={(e)=>{
                        this.setState({
                            size : e.target.value
                        })
                    }}></input>
                    <button type="button" onClick={function(){this.add()}.bind(this)}>전달</button>
                </div>
            </div>
        )
    }
}

export default AddNuberInner;