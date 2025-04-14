import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <button>Login with Google</button>

                <button>Login</button>

                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    );
}

export default Auth;
