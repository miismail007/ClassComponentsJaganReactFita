import React, { Component } from 'react'

export class Products extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(product => (
                    <h1 key={product}>{product}</h1>
                ))}
                
            </div>
        )
    }
}

export default Products
