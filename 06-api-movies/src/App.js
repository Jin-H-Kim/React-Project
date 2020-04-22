import React from 'react';
import About from './Routers/About'
import Home from './Routers/Home';
import Detail from './Routers/Detail'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'
import Nav from './Components/Nav';


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Nav></Nav>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
