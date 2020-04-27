import React from 'react';
import './App.css';
import axios from 'axios'

class Nav extends React.Component{
  render(){
    let listTag = [];
    let data = this.props.list
    for(let i=0; i < data.length; i++){
      listTag.push(
        <li key={data[i].id}>
          <a href={data[i].id} data-id={data[i].id} onClick={(e)=>{
            e.preventDefault();
            this.props.onChangeValue(e.target.dataset.id)
          }}>
            {data[i].list}
          </a>
        </li>
      )
    }
    return(
      <nav>
        <ul>
          {listTag}
          {/* <li><a href="1">HTML</a></li>
          <li><a href="2">CSS</a></li>
          <li><a href="3">JS</a></li> */}
        </ul>
      </nav>
    )
  }
}

class Article extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

class AddList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      addList : ""
    }
  }
  render(){
    return(
      <form onSubmit={(e)=>{
        e.preventDefault()
        
        const list = {
          ...this.state
        }
        console.log(list)
        axios.post('http://localhost:3000/public/list.json', {list});

        console.log(this.addList)
      }}>
        <input type="text" onChange={(e)=>{
          this.setState({
            addList: e.target.value
          })
        }}></input>
        <button type="submit">ADD</button>
      </form>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title: "Welcome",
      desc: "HELLO",
      list: []
    }
  }
  componentDidMount(){
    //console.log(axios.get("list.json"))
    axios.get("list.json")
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      
    // fetch("list.json")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       list: json
    //     })
    //   })
  }
  render(){
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav list={this.state.list} onChangeValue={(id)=>{
          fetch(id+".json")
            .then(res=>res.json())
            .then(json=>{
              this.setState({
                title : json.title,
                desc: json.desc
              })
            })
        }}></Nav>
        <Article title={this.state.title} desc={this.state.desc}></Article>
        <AddList></AddList>
      </div>
    );
  }
  
}

export default App;
