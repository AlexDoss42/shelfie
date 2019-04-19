import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image_url: '',
      product_name: '',
      price: ''
    }
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClickAdd = () => {

    // Makes sure each input is filled out before submitting

    let { image_url, product_name, price } = this.state

    if (image_url === '') {
      alert('Image URL is required')
    } else if (product_name === '') {
      alert('Product Name is required')
    } else if (price === '') {
      alert('Price is required')
    } else {
      alert('You added a product')
    }
  }

  handleClickCancel = () => {
    this.setState({
      image_url: '',
      product_name: '',
      price: ''
    })
    document.getElementById('addForm').reset()
  }



  render() {
    return (
      <div className='addFormContainer'>

        <img
          className='imagePreview'
          src='http://www.webbdsc.com/wp-content/uploads/2017/11/noimage_camera.jpg'
          alt='add product preview' />

        <form id='addForm'>

          <p>Image URL:</p>
          <input
            onChange={this.handleChange}
            type='text'
            name='image_url' />


          <p>Product Name:</p>
          <input
            onChange={this.handleChange}
            type='text'
            name='product_name' />

          <p>Price:</p>
          <input
            onChange={this.handleChange}
            type='number'
            name='price'
            placeholder='0' />

        </form>

        <div className='formBtnsContainer'>

          <button
            className='formBtns'
            onClick={this.handleClickCancel}
          >Cancel</button>

          <button
            className='formBtns'
            onClick={this.handleClickAdd}
          >Add to Inventory</button>
        </div>

      </div>

    )
  }
}