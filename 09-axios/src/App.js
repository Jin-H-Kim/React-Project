import React from 'react';
import './App.css';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import Router from './components/Router';
function App() {
  return (
    <div className="App">
      <PersonList></PersonList>
      <PersonAdd></PersonAdd>
      <Router></Router>
    </div>
  );
}

export default App;
