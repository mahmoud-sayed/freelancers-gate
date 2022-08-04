import React, { useState, useRef, useEffect } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Logo from './../logo';
import './style.scss';
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { handelRegistrationSubmit } from "../../redux/userReducer/action";
import { Link, useNavigate } from 'react-router-dom';

//firebase imports
import { useUserAuth } from './../../context/AuthProvider';
import SetCookies from "../CookiesHandling/setCookies";
import RemoveCookies from "../CookiesHandling/removeCookies";


// will accept E-mails like this >> "workingexample@email.com", 
const emailRGX = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

// Minimum 5 characters, at least one letter and one number:
const passRGX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const Register = () => {


    const userRef = useRef(); // to set the focus on the user when the component load
    const errRef = useRef(); // to set the focus on the error when there is error set so the screen reader can get it

    // to handel the email input with errors and focus
    const [email, setEmail] = useState(''); // to get the user Input
    const [validEmail, setValidEmail] = useState(false); // to check the validity of the email
    const [emailFocus, setEmailFocus] = useState(false); // to know that we focus on that field or not

    // to handel the password input with errors and focus
    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false); // to check the validity of the password
    const [passFocus, setPassFocus] = useState(false); // to know that we focus on that field or not


    // to handel the password input with errors and focus
    const [confirmPass, setConfirmPass] = useState('');
    const [validConfirmPass, setValidConfirmPass] = useState(false); // to check the validity of the password
    const [validPassFocus, setValidPassFocus] = useState(false); // to know that we focus on that field or not

    // to handel the agreement
    const [policesAgreement, setPolicesAgreement] = useState(false);

    // form validation errors
    const [errMessage, setErrMessage] = useState('');
    //const [success, setSuccess] = useState(false);

    //firebase Auth
    const { signUp, user } = useUserAuth();

    // to Navigate the user to another page
    const navigate = useNavigate();


    //redux
    const dispatch = useDispatch();

    useEffect(() => {
        // to set the focus on the email input once the component render
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = emailRGX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = passRGX.test(pass);
        setValidPass(result);
        const match = pass === confirmPass;
        setValidConfirmPass(match);
    }, [pass, confirmPass]);


    useEffect(() => {
        setErrMessage('');
    }, [email, pass, validPass]);



    const formSubmit = async (e) => {
        e.preventDefault();
        // if submit button hacked with js
        const v1 = emailRGX.test(email);
        const v2 = passRGX.test(pass);
        if (!v1 || !v2 || policesAgreement === false) {
            setErrMessage('invalid entry');
        } else {
            try {
                await signUp(email, pass);
                RemoveCookies('token');
                SetCookies('token', JSON.stringify(user.accessToken));
                handelRegistrationSubmit(email, pass, policesAgreement, dispatch);
                setErrMessage('Registered Successfully');
                navigate("/profile", { replace: true });
            } catch (err) {
                if (err) setErrMessage('email already registered');
            }

        }
    };


    return (
        <section className="sign-up-form-section">

            <section className='form-section'>
                <div className="container">
                    <div className="form-wrapper">

                        <Logo />
                        <h1 className='form-welcome'>Sign Up</h1>
                        <div className="auth-buttons">

                            <button className='google-login'>
                                <FaGoogle className='google-icon' /><p className='google-text'>Sign Up with Google</p></button>
                            <button className='facebook-login'><FaFacebook className='facebook-icon' /><p className='facebook-text'>Sign Up with facebook</p></button>
                        </div>
                        <div className="or-wrapper">
                            <hr />
                            <p className='or'>OR</p>
                            <hr />
                        </div>
                        <form className='form' onSubmit={formSubmit}>
                            <p ref={errRef} className={errMessage ? 'errMessage' : 'offScreen'} aria-live='assertive'>{errMessage}</p>
                            <input
                                type="email"
                                ref={userRef}
                                autoComplete='off'
                                placeholder='Email or Username'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                aria-invalid={validEmail ? 'false' : 'true'}
                                aria-describedby="uidnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <p id="uidnote" className={emailFocus && email && !validEmail ? 'instructions' : 'offScreen'}>set valid email Example: workingexample@email.com</p>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                required
                                aria-describedby='passNode'
                                aria-invalid={validPass ? 'false' : 'true'}
                                onChange={(e) => setPass(e.target.value)}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                                value={pass}
                            />
                            <p id="passNode" className={passFocus && !validPass ? 'instructions' : 'offScreen'}>password must be a minimum of 8 characters including number, Upper, Lower And one special character</p>
                            <input
                                type="password"
                                name="confirm-password"
                                required
                                aria-invalid={validPass ? 'false' : 'true'}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                onFocus={() => setValidPassFocus(true)}
                                onBlur={() => setValidPassFocus(false)}
                                placeholder='confirm password'
                                value={confirmPass}
                                id='myInput'
                            />
                            <p id="confirmed" className={validPassFocus && !validConfirmPass ? 'instructions' : 'offScreen'}>
                                Must match the first password  input field
                            </p>
                            <div className="polices-agreement">
                                <div className="check-box-wrapper">
                                    <input
                                        type="checkbox"
                                        name="remember-me"
                                        id="agree"
                                        onChange={() => setPolicesAgreement(!policesAgreement)}
                                        checked={policesAgreement}
                                    />

                                    <label htmlFor='agree'>I agree to the Freelancer-gate<span className="colored">User Agreement</span> and <span className="colored">Privacy Policy</span>.</label>

                                </div>
                            </div>
                            <button className={!validEmail || !validPass || !validConfirmPass || !policesAgreement ? 'submit-button-disabled' : "submit-button"}
                                disabled={!validEmail || !validPass || !validConfirmPass || !policesAgreement ? true : false} type="submit" >Join Freelancers Gate</button>
                        </form>
                        <hr />
                        <div className="have-no-account-wrapper">
                            <p>Don't have an account?</p>
                            <p className='sign-up'><Link to='/login'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </section >

    );
};

export default Register;