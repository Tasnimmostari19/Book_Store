import React, { useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();

    const signinWithGoogle = () => {
        console.log('entered');

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const loginUser = result.user;
                console.log(loginUser);


            })

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })

    }, [])


    return {
        user,
        signinWithGoogle,
        logOut

    }
};

export default useFirebase;

