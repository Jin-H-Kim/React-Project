import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';

class App extends React.Component{
  constructor(props){
    super(props)    
    this.state = {
      mode: {
        title: 'welcome',
        desc: 'hi'
      },
      isSelected : '',
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
    }
  }
  componentDidMount(){
    this.setState({
      contact : [
          ...this.state.contact,
          {
            id: 4,
            name: "kim",
            tel: "010-7673-3579"
        }
      ]
    })
  }

  componentWillMount(){
    let stData = localStorage.objStart;
    if(stData){
      this.setState({
        mode : JSON.parse(stData)
      })
    }
    
    
  }
  componentDidUpdate(prevProps, prevState){
    //console.log("did Update" + prevState.mode)
    let obj = JSON.stringify(prevState.mode)
    let stateObj = JSON.stringify(this.state.mode)
    //console.log(obj, stateObj)
    if(obj !== stateObj){
      localStorage.objStart = stateObj
    }
    console.log("new localStorage - " + localStorage.objStart)
  }

  _handleSelected = (i) =>{
    this.setState({
      isSelected: i
    })
  }
  _makeList = () => {
    var data = this.state.contact
    return <Contact data={data} is={this.state.isSelected} chageV={this._handleSelected}></Contact>
  }
  render(){
    return(
      <div className="App">
        <div onClick={(e)=>{this.state.mode.title === 'welcome' ? 
          this.setState({
            mode : {
                title : 'read',
                desc : 'go'
              }
            })
            : 
            this.setState({
              mode: {
                title: 'welcome',
                desc: 'hi'
              }
            })
          }}>
          Chagne - {this.state.mode.title} - {this.state.mode.desc}
        </div>
        {this._makeList()}
      </div>
    )
  }
}

export default App;
