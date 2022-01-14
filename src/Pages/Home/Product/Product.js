import React from 'react';
import { Button, Card, Col, NavLink } from 'react-bootstrap';
import Detail from '../../Detail/Detail/Detail';

const Product = ({ product }) => {
    const { name, image, price, author, _id } = product;
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={image} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {author}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <NavLink to={`/detail/${_id}`}> <Button size="small" style={{ backgroundColor: 'rgb(30 58 138)' }}>Details</Button></NavLink>


                </Card.Body>
            </Card>
        </Col>


    );
};

export default Product;