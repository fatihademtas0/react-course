import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);

            const credential =
                GoogleAuthProvider.credentialFromResult(response);

            const token = credential.accessToken;

            const user = response.user;

            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = response.user;

            if (user) {
                toast.success("User created successfully.");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            toast.error("Error creating user: " + error.message);
        }
    };

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = response.user;

            if (user) {
                navigate("/");
                toast.success("You have logged in successfully.");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            toast.error("Error logging in: " + error.message);
        }
    };

    return (
        <div className='auth'>
            <h3 className='title'>Login / Sign Up</h3>
            <div className='login-input'>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='text'
                    placeholder='your email...'
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='your password...'
                />
            </div>

            <div className='button-div'>
                <button onClick={loginWithGoogle}>Login with Google</button>

                <button onClick={login}>Login</button>

                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    );
}

export default Auth;
