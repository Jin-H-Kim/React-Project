import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav'
import HOME from './routers/Home';
import ABOUT from './routers/About'
import DETAIL from './routers/Detail'
import {Provider} from 'react-redux'
import store from './Store'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Nav></Nav>
            <Route path="/" exact={true} component={HOME}></Route>
            <Route path="/about" component={ABOUT}></Route>
            <Route path="/detail/:id" component={DETAIL}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
  
}

export default App;
