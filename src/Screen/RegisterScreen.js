import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/main.css'
import '../assets/css/responsive.css'
import { login, register } from '../redux/Actions/userAction';
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";
import { useLocation, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import Toast from "../Components/LoadingError/Toast";
import { Link } from 'react-router-dom';
export default function RegisterScreen() {
    const location = useLocation();
    const history = useNavigate();
    const dispatch = useDispatch()
    const toastId = React.useRef(null);
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const toggleChecked = () => setClick(value => !value);
    const toggleChecked1 = () => setClick1(value => !value);

    const [key, setKey] = useState("");
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    function onChange(value) {
        setKey(value);
    }
    function generate_string(n = 30) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error } = userRegister
    useEffect(() => {
        if (userInfo) {
            history(redirect);

        }
    }, [userInfo, history, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Confirm password does not match!", Toastobjects);
            }
        }
        else {
            const apiKey = generate_string();
            dispatch(register(name, email, password, apiKey));
        }
    };

    return (
        <div>
            <Toast />
            <section className='pl-0 pr-0 max-w-[2100px]'>
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
                                <h1 id="title">Sign up</h1>
                                <p>
                                    <span id="subtitle">Do you have an account?  </span>
                                    <span id="subtitleLink">
                                        <a class="auth-link" href="/login">Login</a>
                                    </span>
                                </p>
                                <div className='content'>
                                    <form onSubmit={submitHandler}>
                                        <div className='input-control'>
                                            <input placeholder="Full Name" id="text" autocomplete="email" type="text" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." name="Input.Email"
                                                onChange={(e) => setName(e.target.value)}

                                            />
                                        </div>
                                        <div className='input-control'>
                                            <input placeholder="Email Address" id="email" autocomplete="email" type="text" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." name="Input.Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className='input-control'>
                                            <input placeholder="Password" id="password" autocomplete="current-password" type={click ? "text" : 'password'} data-val="true" data-val-maxlength="The field Password must be a string or array type with a maximum length of '30'." data-val-maxlength-max="30" data-val-required="The Password field is required."
                                                maxlength="30" name="Input.Password"
                                                onChange={(e) => setPassword(e.target.value)}

                                            />
                                            <div className='toggle-password'>
                                                <a onClick={toggleChecked}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />

                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='input-control'>
                                            <input placeholder="Confirm Password" id="password" autocomplete="current-password" type={click1 ? "text" : 'password'} data-val="true" data-val-maxlength="The field Password must be a string or array type with a maximum length of '30'." data-val-maxlength-max="30" data-val-required="The Password field is required."
                                                maxlength="30" name="Input.Password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}

                                            />
                                            <div className='toggle-password'>
                                                <a onClick={toggleChecked1}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />

                                                    </svg>
                                                </a>
                                            </div>
                                        </div>


                                        <button type="submit">Sign up</button>
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
