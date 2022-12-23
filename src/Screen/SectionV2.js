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
import { SidebarData } from '../Components/Slidebar/Slidebar';
import { Link } from "react-router-dom"
import $ from "jquery";

const usePathName = () => {
    const location = useLocation();
    return location.pathname;
};
function LoginScreen() {
    const location = usePathName();
    const history = useNavigate();
    const dispatch = useDispatch()
    const toastId = React.useRef(null);


    const [click, setClick] = useState(false)

    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        // $('.hero-content__left').trigger(e.type);

        $('.hero-content__left').on('mouseenter', function () {
            //setTimeout(function() {
            $('.hero-content__left').addClass('is-open');
            $('.logo-white-wrapper').addClass('is-open');
            $('.login-text.is-nav').addClass('is-active');
            $('.decorative-bg-gradient.is-bottom-hero').addClass('op-0');
            //  }, 200);
        });

        $('.hero-content__left').on('mouseleave', function () {
            //	setTimeout(function() {
            $('.hero-content__left').removeClass('is-open');
            $('.logo-white-wrapper').removeClass('is-open');
            $('.login-text.is-nav').removeClass('is-active');
            $('.decorative-bg-gradient.is-bottom-hero').removeClass('op-0');
            // }, 200);

        });
    }, [])

    return (
        <div>
            <Toast />
            <section className='pl-0 pr-0 max-w-[2100px]'>
                <div className='login-layout'>

                    <section className='left-section'>
                        
                        <div className={!click ? 'hero-content__left is-openmb' : 'hero-content__left'}>
                            <a aria-current="page" className='hero-content__logo-wrapper full w-inline-block w--current'>
                                <div className=' logo-white-wrapper'>
                                    <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62d5364443bd69032aca1a2b_adc-icon.svg" loading="lazy" alt="" class="hero-icon is-hidden" />
                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62d5690f32024baee024e4a4_AdCreativetext.svg" loading="lazy" alt="AdCreative text that redirects to the home." class="adc-text"></img>
                            </a>
                            <div className='hero-content__nav-items'>
                                <a href="#home" aria-current="page" class="nav-item__link w-inline-block w--current">
                                    <div class="nav-item-logo-wrapper">
                                        <div class="embed-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.216 21.629">
                                                <g id="Group_12165" data-name="Group 12165" transform="translate(0 0)">
                                                    <g id="Group_12167" data-name="Group 12167" transform="translate(0 0)">
                                                        <path id="Path_25452" data-name="Path 25452" d="M20.144,5.406l-6.9-4.84a4.306,4.306,0,0,0-4.338.04L2.139,5.369A4.286,4.286,0,0,0,0,9.067v8.289a4.277,4.277,0,0,0,4.273,4.273H6.165a1.183,1.183,0,0,0,1.183-1.183v-5.1a1.393,1.393,0,0,1,1.393-1.392h4.734a1.392,1.392,0,0,1,1.392,1.392v5.1a1.184,1.184,0,0,0,1.184,1.183h1.892a4.277,4.277,0,0,0,4.273-4.273V9.067a4.245,4.245,0,0,0-2.072-3.661" transform="translate(0 0)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="nav-link-text">Homepage</div>
                                </a>
                                <a href="#howit" aria-current="page" class="nav-item__link w-inline-block ">
                                    <div class="nav-item-logo-wrapper">
                                        <div class="embed-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.002 22.998">
                                                <path id="Subtraction_43" data-name="Subtraction 43" d="M14371-8857h-11a6.007,6.007,0,0,1-6-6v-11a6.007,6.007,0,0,1,6-6h11a6.007,6.007,0,0,1,6,6v11A6.007,6.007,0,0,1,14371-8857Zm-5.457-7.391a.141.141,0,0,1,.066.016l2.619,1.379a.945.945,0,0,0,.455.111.986.986,0,0,0,.75-.35.964.964,0,0,0,.217-.8l-.5-2.919a.139.139,0,0,1,.04-.122l2.121-2.067a.978.978,0,0,0,.246-1.007.978.978,0,0,0-.794-.671l-2.927-.423a.145.145,0,0,1-.108-.079l-1.31-2.652a.978.978,0,0,0-.88-.548.978.978,0,0,0-.881.548l-1.31,2.652a.139.139,0,0,1-.1.079l-2.927.426a.965.965,0,0,0-.793.668.967.967,0,0,0,.245,1.007l2.118,2.067a.139.139,0,0,1,.043.126l-.5,2.915a1,1,0,0,0,.39.96.98.98,0,0,0,.581.188.959.959,0,0,0,.455-.111l2.619-1.379A.166.166,0,0,1,14365.544-8864.392Z" transform="translate(-14353.999 8879.999)" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="nav-link-text">How it Works</div>
                                </a>
                                <a href="#achi" aria-current="page" class="nav-item__link w-inline-block ">
                                    <div class="nav-item-logo-wrapper">
                                        <div class="embed-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 27.255 20.752">
                                                <path id="people" d="M21.32,79.928H5.935a.879.879,0,0,1-.879-.879v-2.6a3.15,3.15,0,0,1,1.864-2.873c3.293-1.47,3.113-1.421,3.369-1.421h1.045a.879.879,0,0,1,.854.669,1.485,1.485,0,0,0,2.881,0,.879.879,0,0,1,.854-.669c1.125,0,1.182-.022,1.4.076l3.011,1.344A3.15,3.15,0,0,1,22.2,76.445v2.6a.879.879,0,0,1-.879.879ZM13.649,59.176a5.37,5.37,0,1,0,5.37,5.37,5.376,5.376,0,0,0-5.37-5.37ZM5.177,64.92A3.381,3.381,0,1,0,8.559,68.3,3.385,3.385,0,0,0,5.177,64.92Zm16.9,0A3.381,3.381,0,1,0,25.459,68.3,3.385,3.385,0,0,0,22.078,64.92Zm3.908,8.054c-1.829-.817-1.786-.825-2.036-.825-1.31,0-2.166-.009-2.746-.012a.549.549,0,0,0-.256,1.037,3.158,3.158,0,0,1,.973.734,3.8,3.8,0,0,1,.961,2.8.549.549,0,0,0,.549.549h2.945a.879.879,0,0,0,.879-.879v-1.45A2.146,2.146,0,0,0,25.986,72.975Zm-22.68-.825c-.249,0-.2.005-2.036.825A2.146,2.146,0,0,0,0,74.931v1.45a.879.879,0,0,0,.879.879H3.824a.549.549,0,0,0,.549-.55,3.785,3.785,0,0,1,.961-2.8,3.167,3.167,0,0,1,.964-.73.549.549,0,0,0-.254-1.037c-.583,0-1.44.008-2.739.008Z" transform="translate(0 -59.176)" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="nav-link-text">Achievements</div>
                                </a>
                                <a href="#pri" aria-current="page" class="nav-item__link w-inline-block ">
                                    <div class="nav-item-logo-wrapper">
                                        <div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.641 22.633">
                                            <g id="label" transform="translate(0 -0.064)">
                                                <g id="Group_12168" data-name="Group 12168" transform="translate(0 0.064)">
                                                    <path id="Path_25455" data-name="Path 25455" d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z" transform="translate(0 -0.064)" fill="currentColor"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        </div>
                                    </div>
                                    <div class="nav-link-text">Pricing</div>
                                </a>
                                <a href="/services" aria-current="page" class="nav-item__link w-inline-block ">
                                    <div class="nav-item-logo-wrapper">
                                        <div class="embed-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15.841 16.161">
                                                <path id="shopping-bag" d="M109.775,97.063h-1.6v-.048a5.048,5.048,0,1,0-10.1,0v.048h-1.6a1.277,1.277,0,0,0-1.245,1.562l1.744,7.618a2.426,2.426,0,0,0,2.365,1.885h7.559a2.426,2.426,0,0,0,2.365-1.885l1.744-7.618a1.277,1.277,0,0,0-1.245-1.562Zm-10.263-.048a3.619,3.619,0,1,1,7.238,0v.035H99.512Z" transform="translate(-95.211 -91.967)" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="nav-link-text">Services</div>
                                </a>
                            </div>
                            <div class={userInfo ? "click" : "hero-content__logo-wrapper is-navbar"}>

                                <Link data-ps="target" to="/login" target="_blank" class={userInfo ? "hidden" : "logo-white-wrapperr is-red navbar-item w-inline-block "}>
                                    <div class="login-text is-nav">Login</div><div class="html-embed w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21">
                                            <g id="_19" data-name="19" transform="translate(-2 -2)">
                                                <path id="Path_25456" data-name="Path 25456" d="M16.7,2H8.3A6.307,6.307,0,0,0,2,8.3v8.4A6.307,6.307,0,0,0,8.3,23h8.4A6.307,6.307,0,0,0,23,16.7V8.3A6.307,6.307,0,0,0,16.7,2Zm.84,11.13-3.15,4.2a1.05,1.05,0,1,1-1.68-1.259l1.89-2.52H8.2a1.056,1.056,0,0,1,0-2.1H14.6L12.71,8.93A1.05,1.05,0,1,1,14.39,7.67l3.15,4.2a1.049,1.049,0,0,1,0,1.259Z" transform="translate(0 0)" fill="#fff"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className='right-section'>
                        <div className='wrapper flex flex-col flex-column-fluid'>
                            <div className="header">
                                <div className='container-fluid flex justify-between items-center flex-wrap gap-2'>
                                    <div className=' flex flex-col items-start header-title justify-center flex-wrap me-lg-2 pb-5 pb-lg-0'>
                                        <h1 class="flex flex-col text-dark fw-bold my-0 fs-1">{
                                            SidebarData.map((item) => location === item.path ? item.tilte : null)

                                        }</h1>
                                    </div>
                                    <div className='flex d-lg-none items-center -ml-2 mr-2 '>
                                        <div className='btn btn-icon btn-active-icon-primary'>
                                            <span className='svg-icon svg-icon-1 mt-1' >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        {/* <Link to="/" class="flex items-center">
                                            <img alt="Logo" src={logo} class="theme-light-show h-5 " />
                                            <img alt="Logo" src={logo} class="theme-dark-show hidden h-5" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className='content flex flex-col flex-column-fluid'>
                                <div className='container-fluid'>
                                    {/* <div class="bg-[#f1faff] border border-solid border-[#009ef7] rounded-lg py-5 px-6 mb-3 text-base text-blue-700 flex items-center " role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-megaphone-fill fs-2x mr-5 text-primary" viewBox="0 0 16 16">
                                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                                    </svg>
                                    <div className=' flex flex-col'>
                                        <ul className='list-disc'>
                                            <li>
                                                <strong className='font-1 text-[13px]'>
                                                    All services 4000h watch time dropped. Orders from December 6 will have views deducted. We will partial order all orders for you in 5 days. The reason is that all of today's views are deducted so we can refund the <br/> exact amount.
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                                    {/* <div className='alert alert-primary flex items-center p-5 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi inline-block bi-megaphone-fill fs-2x mr-5 text-primary" viewBox="0 0 16 16">
                                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <ul className='list-disc'>
                                            <li>
                                                <strong className='font-1 text-[12px]'>
                                                    All services 4000h watch time dropped. Orders from December 6 will have views deducted. We will partial order all orders for you in 5 days. The reason is that all of today's views are deducted so we can refund the  exact amount.
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>

                                </div> */}
                                    <div className='page-title flex flex-col items-start justify-center flex-wrap lg:mr-2 pb-5 lg:pb-0'>
                                        <h1 className="flex flex-col text-dark font-semibold my-0 fs-1">
                                            {
                                                SidebarData.map((item) => location === item.path ? item.tilte : null)

                                            }
                                        </h1>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='card card-flush '>
                                                {
                                                    SidebarData.map((item) => location === item.path ? item.file : null)

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                </div >
            </section >
        </div >
    )
}

export default LoginScreen