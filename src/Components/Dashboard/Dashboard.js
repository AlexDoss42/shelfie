import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {


  render(){
    return  (
      <div>
        {this.props.inventory
        .map((product, i) => {
          return <Product 
                  key = {i}
                  product = {product}/>
        })}

        
      </div>

    )
  }
}