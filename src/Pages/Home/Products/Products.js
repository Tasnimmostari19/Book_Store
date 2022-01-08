import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Row xs={1} md={2} className="g-4">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </Row>
    );
};

export default Products;