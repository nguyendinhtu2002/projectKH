import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";
import { toast } from "react-toastify";
import Toast from "../Components/LoadingError/Toast";
import axios from 'axios';
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, SetLoading] = useState(false)
    const [error, SetError] = useState('')
    const [data, setData] = useState('')
    const toastId = React.useRef(null);
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (email === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Email not can't empty", Toastobjects);
            }
        }
        else {
            SetLoading(true)
            axios.post('http://localhost:5000/api/users/forgotPassword', { email })

                .then(res => {
                    SetLoading(false)
                    if (!toast.isActive(toastId.current)) {
                        toastId.current = toast.success(res.data.message, Toastobjects);
                    }
                })
                .catch(err => {
                    SetLoading(false)
                    SetError(err.response.data.message)
                })
        }
    };
    return (
        <div>
            <Toast />
            <section className='pl-0 pr-0 max-w-[2100px] '>
                <div className='login-layout'>

                    <section className='left-section'>
                        <Link to='/'>
                            <img src="https://app.adcreative.ai/assets/svg/auth-logo.svg" class="left-section--logo" />
                        </Link>
                        <section className='left-section--texts'>
                            <h2 className='text-white'>Converting Ad Creatives by</h2>
                            <h1>Artifical Intelligence</h1>
                        </section>
                        <section className='left-section--carousel owl-carousel owl-theme owl-loaded owl-drag'>

                            <div className='owl-stage-outer'>
                                <div className='owl-stage ' >
                                    <div className='owl-item active center w-[600px] mr-[10px]'>
                                        <div className='item'>
                                            <img src="https://app.adcreative.ai/assets/png/auth/users/david.svg" alt="Matthew W." class="item--img" />
                                            <h4 class="item--name">David N.</h4>
                                            <h5 class="item--title">VP Digital Marketing</h5>
                                            <div class="item--rate">
                                                <img src="https://app.adcreative.ai/assets/png/auth/star.svg" alt="Star" />
                                                <img src="https://app.adcreative.ai/assets/png/auth/star.svg" alt="Star" />
                                                <img src="https://app.adcreative.ai/assets/png/auth/star.svg" alt="Star" />
                                                <img src="https://app.adcreative.ai/assets/png/auth/star.svg" alt="Star" />
                                                <img src="https://app.adcreative.ai/assets/png/auth/star.svg" alt="Star" />
                                            </div>
                                            <b>I am excited for the future using AdCreative.ai</b>
                                            <p className='text-white'>…I love having both data and AI involved in making our ads and overall testing process easier. I think our designers will love it too since we will need even less of their time.</p>
                                            <img src="https://app.adcreative.ai/assets/png/auth/g2a.svg" alt="G2A" class="item--g2a"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='content'>
                            <p class="mb-0 text-white">Optimized for</p>
                            <ul class="left-section--social-medias">
                                <li>
                                    <img src="https://app.adcreative.ai/assets/svg/social-media/facebook.svg" alt="Facebook" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/svg/social-media/instagram.svg" alt="Instagram" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/svg/social-media/linkedin.svg" alt="Linkedin" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/svg/social-media/google.svg" alt="Google" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/svg/social-media/bing.svg" alt="Bing" />
                                </li>
                            </ul>
                            <p>Copyright © 2022 - All rights reserved.</p>
                        </section>
                    </section>

                    <section className='right-section'>

                        <header className='login-layout--header'>

                            <ul class="login-layout--awards">
                                <li>
                                    <img src="https://app.adcreative.ai/assets/png/auth/recommendation.svg" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/png/auth/easiest-setup.svg" />
                                </li>
                                <li>
                                    <img src="https://app.adcreative.ai/assets/png/auth/est-roi.svg" />
                                </li>
                            </ul>
                        </header>
                        <section className='component'>

                            <section className='component-content'>
                                {error && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error}</Message>}
                                {loading && <Loading />}
                                <h1 id="title">Forgot Password</h1>
                                <p>
                                    <span id="subtitle">Do you have an account?  </span>
                                    <span id="subtitleLink">
                                        <Link class="auth-link" to="/login">Login</Link>
                                    </span>
                                </p>
                                <div className='content'>
                                    <form onSubmit={submitHandler}>

                                        <div className='input-control'>
                                            <input placeholder="Email Address" id="email" autocomplete="email" type="text" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." name="Input.Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <button type="submit">RESET MY PASSWORD</button>
                                    </form>
                                </div>
                            </section>
                        </section>
                    </section>

                </div >
            </section >
        </div >
    )
}

export default ForgotPassword