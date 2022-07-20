import React, { useState } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Logo from './../logo';
import './style.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [policesAgreement, setPolicesAgreement] = useState(false);


    const formSubmit = (e) => {
        e.preventDefault();
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
                                <FaGoogle className='google-icon' /><p className='google-text'>Continue with Google</p></button>
                            <button className='facebook-login'><FaFacebook className='facebook-icon' /><p className='facebook-text'>Continue with facebook</p></button>
                        </div>
                        <div className="or-wrapper">
                            <hr />
                            <p className='or'>OR</p>
                            <hr />
                        </div>
                        <form className='form' onSubmit={() => formSubmit()}>
                            <input
                                type="email"
                                placeholder='Email or Username'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                name="password"
                                id=""
                                placeholder='Password'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                            />
                            <input
                                type="password"
                                name="confirm-password"
                                id=""
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