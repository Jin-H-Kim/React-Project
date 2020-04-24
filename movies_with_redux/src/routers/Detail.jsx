import React from 'react';
import store from '../Store';

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            like : 0
        }
        // store.subscribe((e)=>{
        //     this.setState({
        //         like: store.getState().number
        //     })
        // })
    }
    componentDidMount(){
        console.log(store.getState().number)
        if(localStorage.liked){
            let liked = JSON.parse(localStorage.liked)
            this.setState({
                like : liked
            })
        }else{
            this.setState({
                like : 0
            })
        }

        const {location, history} = this.props
        if(location.state === undefined){
            history.push('/')
        }
    }
    render(){
        //console.log(this.props.location)
        if(this.props.location.state){
            return(
                <div >
                    <p>
                        {this.props.location.state.title}
                        ({this.state.like})
                    </p>
                    <p>{this.props.location.state.desc}</p>
                </div>
            )
        }else{
            return null
        }
        
    }
}

export default Detail;