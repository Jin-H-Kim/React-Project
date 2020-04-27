import React, {Component} from 'react';
import axios from 'axios';

class PersonAdd extends Component{
    state = {
        user: ''
    }
    handleSubmit =(e)=>{
        //console.log('aa')
        e.preventDefault();
        const user = {
            name : this.state.user
        }
        axios.post("http://localhost:3000/", {user})
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }
    render(){
        return(
            <div>
                <h1>Person ADD</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={(e)=>{
                        this.setState({
                            user: e.target.value
                        })
                    }}></input>
                    <button type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

export default PersonAdd;