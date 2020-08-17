import './App.css';
import React, { Component } from 'react';
import GreetUser from './components/GreetUser';
// import ProductList from './components/ProductList';
import LoginContainer from './containers/LoginContainer';
class App extends Component{
  render(){
  return (
    <div className="App">
      <GreetUser name="Bhakti" surname="Jadhav"/>
    <div className="container d-flex align-items-center flex-column">
      {/* <ProductList /> */}
      <LoginContainer />
      </div>
    </div>
  );
}
}

export default App;