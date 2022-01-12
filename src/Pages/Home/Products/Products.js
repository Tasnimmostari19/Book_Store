import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h2 className='m-5' style={{ color: 'rgb(30 58 138)' }}>Books</h2>
            <Row xs={1} md={4} className="g-4 m-4">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </>
    );
};

export default Products;