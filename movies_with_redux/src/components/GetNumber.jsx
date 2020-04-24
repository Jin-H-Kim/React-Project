import React from 'react'
import store from '../Store'

class GetNumber extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            size: store.getState().number
        }
        store.subscribe((e)=>{
            this.setState({
                size: store.getState().number
            })
        })
    }
    componentWillUpdate(){
        let data = JSON.stringify(this.props.size+1)
        localStorage.liked = data
        console.log(localStorage.liked)
    }
    componentDidMount(){
        
    }
    up(size){
        let data = JSON.parse(localStorage.liked)
        return data
    }
    render(){
        
        return(
            <div>
                STORE : {this.props.size} / 

                LOCALSTORAGE : {this.up()}
            </div>
        )
    }
}

export default GetNumber