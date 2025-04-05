import React from "react";
import { useFormik } from "formik";
import { registerFromSchemas } from "../schemas/RegisterFormSchema";

function RegisterForm() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            passwordConfirmation: "",
            term: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: registerFromSchemas,
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label>Email</label>
                    <input
                        type='text'
                        id='email'
                        placeholder='Enter your email...'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p className='input-error'>{errors.email}</p>
                    )}
                </div>

                <div className='input-div'>
                    <label>Age</label>
                    <input
                        type='number'
                        id='age'
                        placeholder='Enter your age...'
                        value={values.age}
                        onChange={handleChange}
                    />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>

                <div className='input-div'>
                    <label>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter your password...'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p className='input-error'>{errors.password}</p>
                    )}
                </div>

                <div className='input-div'>
                    <label>Password Confirmation</label>
                    <input
                        type='password'
                        id='passwordConfirmation'
                        placeholder='Enter your password again...'
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                    />
                    {errors.passwordConfirmation && (
                        <p className='input-error'>
                            {errors.passwordConfirmation}
                        </p>
                    )}
                </div>

                <div className='input-div'>
                    <div className='term'>
                        <label>Kullanıcı sözleşmesini kabul ediyorum.</label>
                        <input
                            type='checkbox'
                            id='term'
                            value={values.term}
                            onChange={handleChange}
                            className='checkbox'
                        />
                        {errors.term && (
                            <p className='input-error'>{errors.term}</p>
                        )}
                    </div>
                </div>

                <button type='submit' className='submit-button'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
