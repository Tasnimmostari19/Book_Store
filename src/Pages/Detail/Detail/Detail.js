import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = () => {
    // const { _id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let savedName = '';

    const handleSubmit = e => {
        const form = { name, email };
        console.log(form);
        localStorage.setItem('form', JSON.stringify(form));
        e.preventDefault();
    }

    const getForm = () => {
        const form = localStorage.getItem('form');
        return form ? JSON.parse(form) : {};
    }


    useEffect(() => {
        const savedForm = getForm();
        savedName = savedForm.name;
        console.log(savedName);
        console.log(savedForm);
    }, [])

    return (
        <div>
            {/* <h2>{_id}</h2> */}


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={savedName} onChange={e => setEmail(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />

                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Detail;