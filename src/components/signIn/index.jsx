import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Logo from './../logo';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../../context/AuthProvider';
import PopUpModal from '../PopUpModal/PopUpModal';

// cookies imports
import RemoveCookies from '../CookiesHandling/removeCookies';
import SetCookies from '../CookiesHandling/setCookies';


const SignIn = () => {

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);
    const { signIn, googleSignIn, faceBookSignIn, forgetPass, user } = useUserAuth();
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [emailToResetHisPass, setEmailToResetHisPass] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErr('');
    }, [email, pass]);

    useLayoutEffect(() => {

    }, [success]);

    const handelGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate('/profile');
        } catch (err) {
            if (err) setErr('something wrong with google login');
        }
    };

    const handelFaceBookSignIn = async (e) => {
        e.preventDefault();
        try {
            await faceBookSignIn();
            navigate('/profile');
        } catch (err) {
            if (err) setErr('something wrong with FaceBook login');
        }
    };

    const handelResetPassSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgetPass(emailToResetHisPass);
            setPopUpOpen(false);

        } catch (err) {
            if (err) setErr('something wrong');
        }
    };


    const handelSubmit = async (e) => {
        e.preventDefault();
        if (email.length > 6 && pass.length >= 8) {
            RemoveCookies('usrin');
            const userData = [email, pass];
            try {
                await signIn(email, pass);
                RemoveCookies('token');
                SetCookies('token', JSON.stringify(user.accessToken));
                navigate('/profile');

            } catch (err) {
                if (err) setErr('email or password not right');
            }
        } else {
            setErr('email or password not right');
        }


    };

    return (
        <section className='login-form-section-wrapper'>

            <section className='form-section'>
                <div className="container">
                    <PopUpModal
                        open={popUpOpen}
                    >
                        {success === true ?
                            <p>success</p>
                            :

                            <div className='popup-content-signIn'>
                                <form onSubmit={handelResetPassSubmit} className='reset-password-form'>
                                    <input type="text" autoComplete='off' placeholder='example@company.com' onChange={(e) => setEmailToResetHisPass(e.target.value)} value={emailToResetHisPass} />
                                    <div className='popup-buttons'>
                                        <button type='submit' className='submit-action'>Send</button>
                                        <button className='close-action' onClick={() => setPopUpOpen(false)}>Close</button>
                                    </div>
                                </form>
                            </div>
                        }

                    </PopUpModal>
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
                                onFocus={() => setErr('')}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                autoComplete='off'
                                required
                                onFocus={() => setErr('')}
                            />
                            <div className="remember-and-forget-pass">
                                {/* <div className="check-box-wrapper">
                                    <input type="checkbox" name="remember-me" id="remember-me" />
                                    <label htmlFor='remember-me'>Remember me</label>
                                </div> */}
                                <p className='forget-password' onClick={() => setPopUpOpen(!popUpOpen)}>Forgot Password?</p>

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