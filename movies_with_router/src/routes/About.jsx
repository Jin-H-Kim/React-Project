import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Jin',
            city: 'Seoul',
            data: [
                {
                    name: 'Kim',
                    age: 40
                }
            ]
        }
    }
    componentDidMount(){
        this.setState({
            data : [
                ...this.state.data,
                {
                    name: 'Jodan',
                    age: 60
                }
            ]
        })
        if(localStorage.user){
            const user = JSON.parse(localStorage.user)
            this.setState(user)
        }
    }
    componentWillUpdate(prevProp, prevState){
        localStorage.user = JSON.stringify(prevState)
    }
    render(){
        return(
            <div className="aboutBox">
                This is About Page
                <p>{this.state.name} / {this.state.city}</p>
                <button type="button" onClick={(e)=>{
                    if(this.state.name === "Jin"){
                        this.setState({
                            name: 'Hyuk',
                            city: 'LA'
                        })
                    }else{
                        this.setState({
                            name: 'Jin',
                            city: 'Seoul'
                        })
                    }
                    
                }}>
                    change Storage
                </button>
            </div>
        )
    }
}

export default About;