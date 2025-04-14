import React from "react";

function Auth() {
    return (
        <div className='auth'>
            <h3 className='title'>Login / Sign Up</h3>
            <div className='login-input'>
                <input type='text' placeholder='your email...' />

                <input type='password' placeholder='your password...' />
            </div>

            <div className='button-div'>
                <button>Login</button>

                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default Auth;
