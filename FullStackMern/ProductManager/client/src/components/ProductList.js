import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deletePerson = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.people.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;



