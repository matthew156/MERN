import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import ProductList from '../components/ProductList';
const Detail = (props) => {
    const [product, setProduct] = useState({ProductList})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <Link to={"/product/" + product._id + "/edit"}>
    Edit
</Link>
        </div>
    )
}
    
export default Detail;

