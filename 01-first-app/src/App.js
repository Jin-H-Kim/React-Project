import React from 'react';
import './App.css';
import Top from './components/Top';
import List from './components/List';
import ListContent from './components/ListContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      selected: 0,
      welcome: {
        title: 'Welcome',
        desc: 'Welcome to my first-react-app!!!',
      },
      contents: [
        {id:0, title:'HTML', desc:'HTML is hyper markup language!!'},
        {id:1, title:'CSS', desc:'CSS is design!!'},
        {id:2, title:'Javascript', desc:'Javascript is action!!'},
      ]
    }
  }
  
  makeContent(){
    var _title, _desc, _article = null;
    var _selected = this.state.selected;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ListContent title={_title} desc={_desc}></ListContent>
    }else if(this.state.mode === "read"){
      _title = this.state.contents[_selected].title;
      _desc = this.state.contents[_selected].desc;
      _article = <ListContent title={_title} desc={_desc}></ListContent>
    }else if(this.state.mode === "create"){
      _article = <CreateContent onChangeContent={(_title, _desc)=>{
        let _content = Array.from(this.state.contents);
        let _id = _content.length;
        _content.push({id:_id, title:_title, desc:_desc});
        this.setState({
          contents: _content,
          mode: 'read',
          selected: _id
        })
      }}></CreateContent>
    }else if(this.state.mode === 'update'){
      _article = <UpdateContent
        title={this.state.contents[_selected].title}
        desc={this.state.contents[_selected].desc}
        onChangeContent={(_title, _desc)=>{
          let _content =Array.from(this.state.contents)
          _content[_selected] = {id:_selected, title:_title, desc:_desc}
          this.setState({
            contents: _content,
            mode: 'read',
          })
        }}
      ></UpdateContent>
    }
    // else if(this.state.mode === 'delete'){
    //   let _data = Array.from(this.state.contents)
    //   _data.splice(_selected,1)
    //   let _content = _data.map(function(v, i){
    //     return {id:i, title:v.title, desc:v.desc}
    //   })
    //   console.log(_content)
    //   this.setState({
    //     contents : _content,
    //     selected: 0
    //   })
    //   //_article = <ListContent title={_title} desc={_desc}></ListContent>
    // }

    return(_article)
  }
  render(){
    return (
      <div className="App">

        <Top title="WEB" onChangeMode={()=>{
          this.setState({
            mode : 'welcome'
          })
        }}></Top>
        <List 
          data={this.state.contents}
          onChangeMode={(_idx)=>{
            this.setState({
              mode: 'read',
              selected: _idx
            })
          }}
        ></List>
        <Control onChangeMode={(_mode)=>{
          if(_mode === 'delete'){
            let _data = Array.from(this.state.contents)
            _data.splice(this.state.selected,1)
            let _content = _data.map(function(v, i){
              return {id:i, title:v.title, desc:v.desc}
            })
            console.log(_content)
            this.setState({
              mode : 'read',
              contents : _content,
              selected : (this.state.selected > 0) ? this.state.selected-1 : 0
            })
            //_article = <ListContent title={_title} desc={_desc}></ListContent>
          }else{
            this.setState({
              mode: _mode
            })
          }
          
        }}></Control>
        {this.makeContent()}

      </div>
    );
  }
}


export default App;
