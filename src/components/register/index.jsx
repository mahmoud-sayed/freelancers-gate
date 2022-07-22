import React, { useState, useRef, useEffect } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Logo from './../logo';
import './style.scss';
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { handelRegistrationSubmit } from "../../redux/userReducer/action";

// will accept E-mails like this >> "workingexample@email.com", 
const emailRGX = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

// Minimum 5 characters, at least one letter and one number:
const passRGX = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$');

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
    const [sucess, setSucsess] = useState(false);


    //redux
    const dispatch = useDispatch();

    useEffect(() => {
        // to set the focus on the email input once the component render
        //userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = emailRGX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = passRGX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const match = pass === validPass;
    }, [pass, validPass]);

    useEffect(() => {
        setErrMessage('');
    }, [email, pass, validPass]);



    const formSubmit = (e) => {
        e.preventDefault();

        /*
                if (!emailRGX.test(email)) {
                    setEmailError('enter valid email');
                } else {
                    setEmailError('');
                }
        
                if (!pass.test(passRGX)) {
                    setPassError('enter at lest 5 characters, at least one letter and one number');
                } else {
                    setPassError('');
                }
        
                if (!confirmPass.test(passRGX) && pass !== confirmPass) {
                    setConfirmPassError('password not match');
                } else {
                    setConfirmPassError('');
                }
        
                if (
                    email.match(emailRGX)
                    &&
                    pass.match(passRGX)
                    &&
                    confirmPass.match(passRGX)
                    &&
                    pass === confirmPass
                ) {
                    handelRegistrationSubmit(email, pass, policesAgreement, dispatch);
                }*/
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

                            />
                            <input
                                type="password"
                                name="password"

                                placeholder='Password'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                            />
                            <input
                                type="password"
                                name="confirm-password"

                                placeholder='confirm password'
                                onChange={(e) => setConfirmPass(e.target.value)}
                                value={confirmPass}
                            />
                            <div className="polices-agreement">
                                <div className="check-box-wrapper">
                                    <input
                                        type="checkbox"
                                        name="remember-me"
                                        id="agree"
                                        onChange={(e) => setPolicesAgreement(!policesAgreement)}
                                        checked={policesAgreement}
                                    />

                                    <label htmlFor='agree'>I agree to the Freelancer <span className="colored">User Agreement</span> and <span className="colored">Privacy Policy</span>.</label>
                                </div>
                            </div>
                            <input type="submit" value="Join Freelancers Gate" />
                        </form>
                        <hr />
                        <div className="have-no-account-wrapper">
                            <p>Don't have an account?</p>
                            <p className='sign-up'>Sign In</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default Register;