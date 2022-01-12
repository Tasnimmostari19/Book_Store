import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hook/useFirebase';



const Login = () => {
    const { signinWithGoogle } = useFirebase();

    return (
        <div>
            <Button size="small" style={{ backgroundColor: 'rgb(30 58 138)' }} onClick={signinWithGoogle}>Google SignIn</Button>
        </div>
    );
};

export default Login;