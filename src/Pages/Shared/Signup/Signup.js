import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import security from '../../../Assets/security.jpg';
import { AuthContext } from '../../../Contexts/Authprovider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { createUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');

    const handleSignup = data => {
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully');
            })
            .catch(error => {
                console.log(error.message);
                setSignupError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='md:flex'>
            <div className='md:w-1/2 flex justify-end items-center'>
                <img src={security} alt='' className='hidden md:block' />
            </div>
            <div className='h-[800px] flex items-center'>
                <div className='w-11/12 mx-auto md:w-96 p-7  bg-green-300 rounded'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name",
                                {
                                    required: "Name is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full mb-3">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be at least 6 characters or longer' }
                                })}
                                className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        </div>
                        <input className='btn w-full mb-2' value='Sign Up' type="submit" />
                        <div>
                            {signupError && <p className='text-red-500'>{signupError}</p>}
                        </div>
                    </form>
                    <p>Already have an account? <Link to='/login' className='text-blue-500'>Please login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full mb-3'>CONTINUE WITH GOOGLE</button>
                    <br />
                    <button onClick={handleFacebookSignIn} className='btn btn-outline w-full'>CONTINUE WITH FACEBOOK</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;