import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(){
    super()

    this.state = {
        
      inventory: [ 
        {
          image_url: 'https://s7d4.scene7.com/is/image/JCPenney/ba24d21c-69cc-11e8-8878-637ff9228edf.jpg?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2',
          product_name: 'Brown Wing Tips',
          price: '$249.00'
        },
        {
          image_url: 'https://static1.squarespace.com/static/5a58dd57268b9690fe17d744/5a68ef588165f5fc535a4b3a/5a95dd19e4966ba2c2aa8cd6/1519770917559/_DSC0705.jpg',
          product_name: 'Rustic Dress Shoes',
          price: '$449.00'
        },
        {
          image_url: 'https://amp.businessinsider.com/images/5b3b978e4a26271d008b4847-750-563.jpg',
          product_name: 'Burgundy Gator Boots',
          price: '$399.00'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
          
          <Dashboard 
          inventory = {this.state.inventory}/>
          <Form />
          <Header />

      </div>
    );
  }
}

export default App;
