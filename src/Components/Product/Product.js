import React, {Component} from 'react';

export default class Product extends Component {
  constructor(props){
    super(props)

  }


  render() {
    let {product} = this.props
    return  (
      <div className='productTile'>
        <img 
        src={product.image_url} 
        alt={product.product_name} />

        <div className='productTileDesc'>
          <p>{product.product_name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    )
  }
}