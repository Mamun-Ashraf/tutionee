import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import security from '../../../Assets/security.jpg';
import { AuthContext } from '../../../Contexts/Authprovider';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { login, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
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
        <div className='md:flex items-center'>
            <div className='md:w-1/2'>
                <img src={security} alt='' className='hidden md:block' />
            </div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-11/12 mx-auto md:w-96 p-7  bg-green-300 rounded'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be at least 6 characters or longer' }
                                })}
                                className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                        </div>
                        <input className='btn w-full' value='Login' type="submit" />
                        <div>
                            {loginError && <p className='text-red-500'>{loginError}</p>}
                        </div>
                    </form>
                    <p>New User? <Link to='/signup' className='text-blue-500'>Register here</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    <br />
                    <button onClick={handleFacebookSignIn} className='btn btn-outline w-full'>CONTINUE WITH FACEBOOK</button>
                </div>
            </div>
        </div>
    );
};

export default Login;