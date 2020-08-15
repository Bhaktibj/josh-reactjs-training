import './App.css';
import React, { Component } from 'react';
// import GreetUser from './components/GreetUser';
import ProductList from './components/ProductList'
class App extends Component{
  render(){
  return (
    <div className="App">
    <div className="container d-flex align-items-center flex-column">
      <ProductList />
      </div>
    </div>
  );
}
}

export default App;