import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/main.css'
import '../assets/css/responsive.css'
import { login } from '../redux/Actions/userAction';
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";
import { useLocation, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import Toast from "../Components/LoadingError/Toast";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import logo from "../assets/images/logo.svg"
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

function LoginScreen() {
    const location = useLocation();
    const history = useNavigate();
    const dispatch = useDispatch()
    const toastId = React.useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClick] = useState("");
    const [key, setKey] = useState("");

    const [ip, setIp] = useState("");
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const toggleChecked = () => setClick(value => !value);
    function onChange(value) {
        setKey(value);
    }
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    useEffect(() => {
        if (userInfo) {
            history(redirect);

        }
        axios.get("https://api.ipify.org/?format=json")
            .then((data) => setIp(data.data.ip))
    }, [userInfo, history, redirect]);
    const submitHandler = async (e) => {
        e.preventDefault();

        if (key === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please solve Captcha correctly!", Toastobjects);
            }
        }
        else {

            await dispatch(login(email, password, ip));
        }
    };


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AZVIEW LOGIN</title>
                <meta name="description" content="AZVIEW SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <Toast />
            <section className='pl-0 pr-0 max-w-[2100px] auth-container'>
                <div className='login-layout'>

                    <section className='left-section'>
                        <Link to='/'>
                            <img src={logo} class="left-section--logo" />
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
                                            <p className='text-white'>???I love having both data and AI involved in making our ads and overall testing process easier. I think our designers will love it too since we will need even less of their time.</p>
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
                            <p>Copyright ?? 2022 - All rights reserved.</p>
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
                                <h1 id="title">Log In</h1>
                                <p>
                                    <span id="subtitle">Don???t have an account? </span>
                                    <span id="subtitleLink">
                                        <a class="auth-link" href="/register">Sign Up</a>
                                    </span>
                                </p>
                                <div className='content'>
                                    <form onSubmit={submitHandler}>
                                        <div className='input-control'>
                                            <input placeholder="Email Address" id="email" autocomplete="email" type="email" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." name="Input.Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <span class="field-validation-valid" data-valmsg-for="Input.Email" data-valmsg-replace="true"></span>
                                        </div>
                                        <div className='input-control'>
                                            <input placeholder="Password" id="password" autocomplete="current-password" type={click ? "text" : 'password'} data-val="true" data-val-maxlength="The field Password must be a string or array type with a maximum length of '30'." data-val-maxlength-max="30" data-val-required="The Password field is required."
                                                maxlength="30" name="Input.Password"
                                                onChange={(e) => setPassword(e.target.value)}

                                            />
                                            <div className='toggle-password'>
                                                <a onClick={toggleChecked}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />

                                                    </svg>
                                                </a>
                                                <span class="field-validation-valid" data-valmsg-for="Input.Password" data-valmsg-replace="true"></span>
                                            </div>
                                        </div>
                                        <ReCAPTCHA
                                            sitekey="6LcRaFIiAAAAANLbe50sGaWbNP7LOlkJGcPnuVVT"
                                            onChange={onChange}
                                        />
                                        <section className='credentials-util'>
                                            <div>
                                                <label class="ad-checkbox" for="rememberMe">
                                                    <input id="rememberMe" type="checkbox" data-val="true" data-val-required="The Remember me? field is required." name="Input.RememberMe" value="true" />
                                                    <span class="ad-checkbox--inner"></span>
                                                    <p>Remember me</p>
                                                </label>
                                            </div>

                                            <Link to="/ForgotPassword" class="forgot-password cursor-pointer auth-link">
                                                Forgot password?
                                            </Link>
                                        </section>
                                        <button type="submit">Log In</button>
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

export default LoginScreen