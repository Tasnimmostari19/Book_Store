import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = () => {
    // const { _id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const savedName = useRef('');
    // let savedName = '';

    const getForm = () => {
        const form = localStorage.getItem('form');
        return form ? JSON.parse(form) : {};
    }

    const handleSubmit = e => {
        const existForm = getForm();
        // console.log('exist', existForm);
        // const form = { name, email };
        const newForm = { ...existForm.form, name, email };
        console.log(newForm);
        localStorage.setItem('form', JSON.stringify(newForm));
        e.preventDefault();
    }



    const savedForm = getForm();


    // useEffect(() => {
    //     const savedForm = getForm();
    //     savedName = savedForm.name;
    //     // console.log(savedName);
    //     console.log(savedForm);
    // }, [])
    console.log('outside effect', savedForm);

    return (
        <div>
            {/* <h2>{_id}</h2> */}


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={savedForm.email} onChange={e => setEmail(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" defaultValue={savedForm.name} onChange={e => setName(e.target.value)} />

                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Detail;