import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Nav from './components/Nav'
import HOME from './routes/Home';
import ABOUT from './routes/About'
import DETAIL from './routes/Detail'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Nav></Nav>
          <Route path="/" exact={true} component={HOME}></Route>
          <Route path="/about" component={ABOUT}></Route>
          <Route path="/detail/:id" component={DETAIL}></Route>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
