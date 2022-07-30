import React, { useEffect, useState, useRef, useContext } from 'react';
import Logo from './../logo';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../../context/AuthProvider';


const SignIn = () => {

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const [success, setSeccess] = useState(false);
    const { signIn, googleSignIn, faceBookSignIn } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErr('');
    }, [email, pass]);

    const handelGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate('/profile');
        } catch (err) {
            console.log(err.message);
        }
    };

    const handelFaceBookSignIn = async (e) => {
        e.preventDefault();
        try {
            await faceBookSignIn();
            navigate('/profile');
        } catch (err) {
            console.log(err.message);
        }
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (email.length > 6 && pass.length >= 8) {
            try {
                await signIn(email, pass);
                setErr('logged in successfully');
                navigate('/profile');

            } catch (err) {
                if (err) {
                    setErr('this email not registered');
                }
                setErr(err.message);
            }
        }


    };
    return (
        <section className='login-form-section-wrapper'>
            <section className='form-section'>
                <div className="container">
                    <div className="form-wrapper">

                        <Logo />
                        <h1 className='form-welcome'>Welcome Back</h1>
                        <div className="auth-buttons">

                            <button className='google-login' onClick={handelGoogleSignIn}>
                                <FaGoogle className='google-icon' /><p className='google-text'>Log in with Google</p></button>
                            <button className='facebook-login' onClick={handelFaceBookSignIn} >
                                <FaFacebook className='facebook-icon' />
                                <p className='facebook-text'>Log in with facebook</p>
                            </button>
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