import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";
import logo from "../../assets/images/logo.png"
import './Header.css'
import './test.css'
import { useSelector } from 'react-redux';
function Section() {
    const [click, SetClick] = useState(true);
    const [clickClaim, setClickClaim] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
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
        <>
            <div data-w-id="55590f16-e3c5-8ad3-ebbb-8862f752f654" className={clickClaim ? 'claim-pop-up opacity-100 close' : 'claim-pop-up opacity-100'} >
                {/* <div className="claim-cros-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12.602 12.602" onClick={() => { setClickClaim(true) }}>
                        <g id="Group_18984" data-name="Group 18984" transform="translate(-230.086 -70.086)">
                            <line id="Line_196" data-name="Line 196" x2="9.773" y2="9.773" transform="translate(231.5 71.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
                            <line id="Line_197" data-name="Line 197" x1="9.773" y2="9.773" transform="translate(231.5 71.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
                        </g>
                    </svg>
                </div>
                <div class="claim-line-seperator"></div>
                <div class="claim-text">25% DISCOUNT ON ANY PACKAGE, FOREVER! USE: <span class="yellow-span">BLACKFRIDAY25</span> TODAY!</div>
                <a href="https://app.adcreative.ai/Identity/Account/Register" class="claim-button w-button "  >CLAIM</a> */}
                <div className='claim-pop-up-inside'>
                    <div className="claim-cros-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12.602 12.602" onClick={() => { setClickClaim(true) }}>
                            <g id="Group_18984" data-name="Group 18984" transform="translate(-230.086 -70.086)">
                                <line id="Line_196" data-name="Line 196" x2="9.773" y2="9.773" transform="translate(231.5 71.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
                                <line id="Line_197" data-name="Line 197" x1="9.773" y2="9.773" transform="translate(231.5 71.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
                            </g>
                        </svg>
                    </div>
                    {/* <div class="claim-line-seperator"></div> */}
                    <div class="claim-text">Please enter the <span class="yellow-span">abcdsdsa </span>to get 1% of the deposit value!</div>
                    <Link to="/register" class={userInfo? " claim-button w-button mt-[5px] an" :"claim-button w-button mt-[5px] "}>CLAIM</Link>
                    <Link to="/addfunds" class={userInfo? "claim-button w-button mt-[5px]":"an"}>CLAIM</Link>

                </div>
            </div>
            <div id="home" className=' section is-hero'>
                <div className='hero-content'>
                    <div className='mobile-nav'>
                        <div className='nav-inside'>
                            <div className={click === true ? "close-icon w-embed" : "close-icon w-embed hidden"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 14" onClick={() => SetClick(false)} >
                                    <g id="Group_13368" data-name="Group 13368" transform="translate(-312 -48)">
                                        <rect id="Rectangle_7049" data-name="Rectangle 7049" width="10" height="2" rx="1" transform="translate(318 48)" fill="currentColor"></rect>
                                        <rect id="Rectangle_7050" data-name="Rectangle 7050" width="16" height="2" rx="1" transform="translate(312 54)" fill="currentColor"></rect>
                                        <rect id="Rectangle_7051" data-name="Rectangle 7051" width="16" height="2" rx="1" transform="translate(312 60)" fill="currentColor"></rect>
                                    </g>
                                </svg>
                            </div>
                            <div class={click === false ? "ioen-icon w-embed  " : "ioen-icon w-embed hidden "}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12.729 12.729" onClick={() => SetClick(true)}>
                                    <g id="Group_13368" data-name="Group 13368" transform="translate(-313.999 -48)">
                                        <rect id="Rectangle_7049" data-name="Rectangle 7049" width="2" height="2" rx="1" transform="translate(319 48)" fill="#1e1541" opacity="0"></rect>
                                        <rect id="Rectangle_7050" data-name="Rectangle 7050" width="16" height="2" rx="1" transform="translate(315.415 48) rotate(45)" fill="cuurentColor"></rect>
                                        <rect id="Rectangle_7051" data-name="Rectangle 7051" width="16" height="2" rx="1" transform="translate(313.999 59.315) rotate(-45)" fill="currentColor"></rect>
                                    </g>
                                </svg></div>
                        </div>
                    </div>
                    <div className={!click ? 'hero-content__left is-openmb' : 'hero-content__left'}>
                        <a aria-current="page" className='hero-content__logo-wrapper full w-inline-block w--current'>
                            <div className=' logo-white-wrapper'>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62d5364443bd69032aca1a2b_adc-icon.svg" loading="lazy" alt="" class="hero-icon is-hidden" />
                            </div>
                            <img src="https://lh3.googleusercontent.com/pw/AL9nZEVrckDMTisn5ajw5Al7lamh-eYQgFy8L9BwN-sczLErlyBGyuZmdfKK7mJ2Ow78EbIUP7xwAPGlWZ1HPQ_l4Iqfum2t7U_SrI9F-I9O6bLX_8TsOO0iM_YJDtZEFyfQMsUXDKti-OQn6ISqWkCkpuc=w703-h434-no?authuser=0" loading="lazy" alt="AdCreative text that redirects to the home." class="adc-text"></img>
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

                    <div className='hero-content__right'>
                        <div class="content-wrapper-hero">
                            <img src="https://lh3.googleusercontent.com/pw/AL9nZEVrckDMTisn5ajw5Al7lamh-eYQgFy8L9BwN-sczLErlyBGyuZmdfKK7mJ2Ow78EbIUP7xwAPGlWZ1HPQ_l4Iqfum2t7U_SrI9F-I9O6bLX_8TsOO0iM_YJDtZEFyfQMsUXDKti-OQn6ISqWkCkpuc=w703-h434-no?authuser=0" loading="lazy" alt="ad-creative-logo" class="hero-logo" />
                            <div class="before-heading-text">Cheapest SMM Panel Over 10 Years!</div>
                            <h1 class="heading-hero">with 1DG SMM Panel - Social Services</h1>
                            <div class="mb-[1.25rem]">
                                <p class="hero-p">Generate conversion focused ad creatives and social media post creatives in a matter of seconds using
                                    <br />
                                    <strong className='text-[1.125em]'>Artificial Intelligence</strong>. Get better results while saving time.
                                </p>
                            </div>
                            <a className='main-button is-hero w-inline-block w-[12em] mr-auto mb-[3em] ml-auto mt-[33px]'>
                                <div className="text-block ml-auto mr-auto">
                                    {!userInfo ? <Link to="/register">
                                        Generate Account AZ
                                    </Link> :
                                        <Link to="/services" className=''>
                                            Order Service Now!
                                        </Link>
                                    }
                                </div>
                                <div className="purple-logo-small w-embed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.229 23.228">
                                        <g id="layers" transform="translate(0 -0.009)">
                                            <g id="Group_11749" data-name="Group 11749" transform="translate(0 10.005)">
                                                <g id="Group_11748" data-name="Group 11748" transform="translate(0)">
                                                    <path id="Path_25232" data-name="Path 25232" d="M22.864,206.585a.813.813,0,0,0-.073-.043l-1.648-.888L12,210.494a.829.829,0,0,1-.776,0l-9.141-4.84-1.648.888a.821.821,0,0,0-.34,1.11.834.834,0,0,0,.043.073L11.614,213.8l11.475-6.075A.821.821,0,0,0,22.864,206.585Z" transform="translate(0 -205.654)" fill="currentColor"></path>
                                                </g>
                                            </g>
                                            <g id="Group_11751" data-name="Group 11751" transform="translate(0 14.982)">
                                                <g id="Group_11750" data-name="Group 11750">
                                                    <path id="Path_25233" data-name="Path 25233" d="M23.142,309.278a.83.83,0,0,0-.336-.336l-1.648-.888-9.141,4.84a.829.829,0,0,1-.776,0L2.1,308.054l-1.648.888a.83.83,0,0,0,0,1.46l10.785,5.807a.83.83,0,0,0,.786,0L22.806,310.4A.83.83,0,0,0,23.142,309.278Z" transform="translate(-0.014 -308.054)" fill="currentColor"></path>
                                                </g>
                                            </g>
                                            <g id="Group_11753" data-name="Group 11753" transform="translate(0 0.009)">
                                                <g id="Group_11752" data-name="Group 11752" transform="translate(0 0)">
                                                    <path id="Path_25234" data-name="Path 25234" d="M22.864,5.958a.822.822,0,0,0-.073-.043L12.007.108a.829.829,0,0,0-.786,0L.436,5.915A.821.821,0,0,0,.139,7.1l11.475,6.075L23.089,7.1A.821.821,0,0,0,22.864,5.958Z" transform="translate(0 -0.009)" fill="currentColor"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></div>
                            </a>
                            <div className='flex relative pt-16 items-center justify-center mobi-end '>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/youtube.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/google-icon.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/facebook-1.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/instagram-2-1.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/twitter.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/telegram-2.svg" class="max-h-8" alt="" />
                                </div>
                                <div className='lg:pl-5 lg:pr-5 pl-[0.1rem] pr-[0.1rem]'>
                                    <img src="https://cdn.my1dg.com/1/media/svg/brand-logos/pinterest.svg" class="max-h-8" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='hero-visual'>
                            <div className='hero_items--1'>

                            </div>
                        </div>
                    </div>
                    <div class="_3-circles w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="100%" viewBox="0 0 18 74">
                            <g id="Group_11933" data-name="Group 11933" transform="translate(-1784 -358)">
                                <circle id="Ellipse_1280" data-name="Ellipse 1280" cx="9" cy="9" r="9" transform="translate(1784 358)" fill="#fff"></circle>
                                <circle id="Ellipse_1281" data-name="Ellipse 1281" cx="9" cy="9" r="9" transform="translate(1784 386)" fill="#fff"></circle>
                                <circle id="Ellipse_1282" data-name="Ellipse 1282" cx="9" cy="9" r="9" transform="translate(1784 414)" fill="#fff"></circle>
                            </g>
                        </svg>
                    </div>
                    {/* <div class="language-switcher">
                    <div data-w-id="d7846539-ded7-1576-424d-2f201371396d" class="wg-element-wrapper sw6" style="opacity: 1;" data-wg-notranslate="manual">
                        <div data-hover="true" data-delay="300" data-w-id="d7846539-ded7-1576-424d-2f201371396e" class="wg-dropdown-1 w-dropdown" style="background-color: rgba(0, 0, 0, 0);">
                    <div lang="en" class="wg-dd-1-togle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <div class="wg-selector-text-wrapper">
                            <div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493972d0cd235_en.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                        </div>
                    </div>
                    <nav class="wg-dd-1-list wg-dropdown-link-flag w-dropdown-list" style="width: 63.7969%; height: 0%;" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2"><a lang="fr" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0"><div class="wg-selector-text-wrapper" >
                        <div class="wg-flag">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493349d0cd236_fr.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                        </div>
                    </div>
                    </a>
                        <a lang="es" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper">
                                <div class="wg-flag">
                                    <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb49314220cd234_es.svg" width="30" alt="" class="wg-flag-ico" />
                                </div>
                            </div>
                        </a>
                        <a lang="pt" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper"><div class="wg-flag" />
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493aacd0cd230_pt.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>

                        </a>
                        <a lang="de" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper">
                                <div class="wg-flag">
                                    <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493be610cd22d_de.svg" width="30" alt="" class="wg-flag-ico" />
                                </div>
                            </div>
                        </a>
                        <a lang="it" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper"><div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb49330bb0cd22c_it.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                            </div>
                        </a>
                        <a lang="sv" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0"><div class="wg-selector-text-wrapper">
                            <div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb49316de0cd233_sv.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                        </div>
                        </a>
                        <a lang="nl" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper"><div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493e6890cd22e_nl.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                            </div>
                        </a>
                        <a lang="hi" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper"><div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb493f86e0cd232_hi.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                            </div>
                        </a>
                        <a lang="bn" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0"><div class="wg-selector-text-wrapper">
                            <div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb4937bb70cd22f_bn.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                        </div>
                        </a>
                        <a lang="id" href="#" class="wg-dropdown-1-link w-inline-block" tabindex="0">
                            <div class="wg-selector-text-wrapper"><div class="wg-flag">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/635a7a5cdfb4939b270cd231_id.svg" width="30" height="30" alt="" class="wg-flag-ico" />
                            </div>
                            </div>
                        </a>
                    </nav>
                </div>
                </div>

                    <div class="wg-code w-embed">
                    </div>
                </div> */}
                    <div className='language-switcher'>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Section