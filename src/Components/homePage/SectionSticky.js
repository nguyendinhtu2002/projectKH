import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useSelector } from 'react-redux';

function SectionSticky() {
    const [counterOn, setCounterOn] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (

        <ScrollTrigger id="achi" className='section sticky' onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='Container'>
                <div className='content-narrow'>
                    <div className='sticky-content-wrapper'>
                        <div className='sticky-heading'>
                            <h2 className='bottom-margin-14'>
                                <span class="span-medium-purple">We<br /></span>
                                <span class="gradient-span text-5xl">Make Things Better</span>
                            </h2>
                            <p class="bottom-margin-20">
                                Let our artificial intelligence generate creatives that convert,
                                <strong>so you can save time and money to scale</strong>.
                                Check out why and how you should use Adcreative.ai
                            </p>
                            <div class="button-and-text-wrapper left-aligned">
                                <a data-ps="target" href="https://app.adcreative.ai/Identity/Account/Register" target="_blank" class="main-button is-general w-inline-block">
                                    <div className="text-block ml-auto mr-auto">
                                        {!userInfo ? <Link to="/register">
                                            Generate Account AZ
                                        </Link> :
                                            <Link to="/services" className=''>
                                                Order Service Now!
                                            </Link>
                                        }
                                    </div>
                                    <div class="purple-logo-small w-embed">
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
                                        </svg>
                                    </div>
                                </a>
                                {/* <p class="top-margin-30">
                                    Try 50% free for 3 days.
                                    <span class="gradient-span">
                                        <strong>Cancel Anytime</strong>
                                    </span>
                                </p> */}
                            </div>
                        </div>
                        <div className='sticky-content_informations'>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Orders.</h3>
                                <p class="paragraph text-2xl">{counterOn && <CountUp start={0} end={33359240} className=" min-w-[70px] " formattingFn={num => num.toLocaleString()} />}+
                                </p>
                                <p class="paragraph">Every month</p>

                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Price Starting From</h3>

                                <p class="paragraph text-2xl">$ 0.0001</p>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>


                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>An Order Is Made Every</h3>
                                <p class="paragraph text-2xl">0.1 sec</p>
                            </div>
                            {/* <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div>
                            <div className='sticky-content__feature' >
                                <div className='sticky-content__feature-icon-wrapper'>
                                    <div className='logo-white-wrapperr is-red with-shadow'>
                                        <div class="login-text hidden-mobile hidden">Login</div>
                                        <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac12910bbd13ee4ef4ece_feature-1.svg" loading="lazy" alt="" class="image-3" />
                                    </div>

                                </div>
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dac237cbb1206a086e0b19_arrow-right.svg" loading="lazy" alt="arrow right" class="arrow-right"></img>
                                <h3>Trained A.I.</h3>
                                <p class="paragraph">Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.</p>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default SectionSticky