import React, {Component} from 'react';
import axios from 'axios';

class PersonList extends Component{
    state = {
        person_fetch : '',
        person_axios : '',
    }
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json()
            })
            .then(json => {
                //console.log(json)
                //return json
                this.setState({
                    person_fetch:json
                })
            })
        
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(res => {
                //console.log(res)
                this.setState({
                    person_axios : res.data
                })
            })
    }
    render(){
        let persons = this.state.person_axios
        //console.log(persons)
        return(
            <div>
                <h1>Person List</h1>
                <ul>
                  {persons ? persons.map(function(person){
                      return <li key={person.id}>{person.name} - {person.email}</li>
                  }) : "Loding"}  
                </ul>
            </div>
        )
    }
}

export default PersonList;