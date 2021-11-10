import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (item, i) =>
                <p key={i}>{item.title} {item.description}</p>
            )}
        </div>
    )
}
    
export default ProductList;

