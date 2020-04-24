import React from 'react';

class AddInner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size: 1
        }
    }
    render(){
        return(
            <div>
                AddInner
                <div>
                    <input type="text" value={this.state.size} onChange={(e)=>{
                        this.setState({
                            size : e.target.value
                        })
                    }} />
                    {/* <button type="button" onClick={(e)=>{
                        this.props.changeValue(this.state.size)
                    }}>Add</button> */}
                    <button type="button" onClick={(e)=>{
                        // store.dispatch({type:'MAKE', size: this.state.size})
                        this.props.onClick(this.state.size)
                    }}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddInner;