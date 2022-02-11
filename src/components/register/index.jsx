import React from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Logo from './../logo';
import './style.scss';

const Register = () => {
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
                        <form role="form" className='form'>
                            <input type="email" placeholder='Email or Username' />
                            <input type="password" name="password" id="" placeholder='Password' />
                            <input type="password" name="confirm-password" id="" placeholder='confirm password' />
                            <div className="polices-agreement">
                                <div className="check-box-wrapper">
                                    <input type="checkbox" name="remember-me" id="agree" />
                                    <label htmlFor='agree'>I agree to the Freelancer <span className="colored">User Agreement</span> and <span className="colored">Privacy Policy</span>.</label>
                                </div>
                            </div>
                            <input type="submit" value="Join Freelancers Gate" />
                        </form>
                        <hr />
                        <div className="have-no-account-wrapper">
                            <p>Don't have an account?</p>
                            <p className='sign-up'>Sign Up</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}

export default Register;