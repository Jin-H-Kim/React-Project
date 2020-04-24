import React from 'react';
import store from '../store'

class ViewInner extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            number: store.getState().number
        }
        store.subscribe(()=>{
            this.setState({
                number: store.getState().number
            })
        })
    }
    render(){
        return(
            <div>
                ViewInner
                <p>{this.state.number}</p>
            </div>
        )
    }
}

export default ViewInner;