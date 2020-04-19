import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';

class App extends React.Component{
  constructor(props){
    super(props)    
    this.state = {}
  }
  componentDidMount(){
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(res => res.json())
      .then(js => console.log(js))
      .catch(err => console.log(err))

    var set = setTimeout(()=>{
      this.setState({
        contact : [
            {
                id: 1,
                name: "adam",
                tel: "010-4441-3579"
            },
            {
                id: 2,
                name: "hams",
                tel: "010-1234-5678"
            },
            {
                id: 3,
                name: "kim",
                tel: "010-7673-3579"
            }
        ]
      })
    },3000)
  }
  _makeList = () => {
    var data = this.state.contact
    return <Contact data={data}></Contact>
  }
  render(){
    return(
      <div className="App">
        {this.state.contact ? this._makeList() : 'Loding....'}
      </div>
    )
  }
}

export default App;
