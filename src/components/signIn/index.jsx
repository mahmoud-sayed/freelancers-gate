import React, { useEffect, useState, useRef } from 'react';
import Logo from './../logo';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './style.scss';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
const SignIn = () => {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const [success, setSeccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErr('');
    }, [email, pass]);

    const handelSubmit = (e) => {
        e.preventDefault();
        setErr('logged in successfully');
    };
    return (
        <section className='login-form-section-wrapper'>
            <section className='form-section'>
                <div className="container">
                    <div className="form-wrapper">

                        <Logo />
                        <h1 className='form-welcome'>Welcome Back</h1>
                        <div className="auth-buttons">

                            <button className='google-login'>
                                <FaGoogle className='google-icon' /><p className='google-text'>Log in with Google</p></button>
                            <button className='facebook-login'><FaFacebook className='facebook-icon' /><p className='facebook-text'>Log in with facebook</p></button>
                        </div>
                        <div className="or-wrapper">
                            <hr />
                            <p className='or'>OR</p>
                            <hr />
                        </div>
                        <form onSubmit={handelSubmit} className='form' >
                            <p className={err ? 'errMessage' : 'offScreen'}>{err}</p>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder='Email or Username'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                autoComplete='off'
                                required
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                autoComplete='off'
                                required
                            />
                            <div className="remember-and-forget-pass">
                                <div className="check-box-wrapper">
                                    <input type="checkbox" name="remember-me" id="remember-me" />
                                    <label htmlFor='remember-me'>Remember me</label>
                                </div>
                                <p className='forget-password'>Forgot Password?</p>

                            </div>
                            <input type="submit" value="Log in" />
                        </form>
                        <hr />
                        <div className="have-no-account-wrapper">
                            <p>Don't have an account?</p>
                            <p className='sign-up'><Link to='/registration'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default SignIn;