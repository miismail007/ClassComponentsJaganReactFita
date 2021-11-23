import React, { Component } from 'react'
import Header from './Header'
import Products from './Products'
import ToggleComponent from './ToggleComponent'

export class App extends Component {
  state = {
    title : "Fita Institute",
    products : [],
    toggle : false
  }
  render() {
    return (
      <div>
        <Header title = {this.state.title}/>
        <Products products = {this.state.products}/>
        <button onClick={()=>{
          this.setState({products : [...this.state.products, Math.floor(Math.random() * 100)]})
        }}>Add Product</button>
        <button onClick={()=>{
          this.setState({ toggle : !this.state.toggle })
        }}>Toggle</button>
        {this.state.toggle && <ToggleComponent products = {this.state.products}/>}
        
      </div>
    )
  }
}

export default App
