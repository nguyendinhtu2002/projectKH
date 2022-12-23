import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import $ from "jquery";
import { useSelector } from 'react-redux';

const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};
function Header() {
    const [visibleSection, setVisibleSection] = useState();
    const [color, setColor] = useState(false);
    const headerRef = useRef(null);
    const leadershipRef = useRef(null);
    const providerRef = useRef(null);
    const operationsRef = useRef(null);
    const pricingRef = useRef(null);
    const changColor = () => {
        if (window.scrollY >= 71) {
            setColor(true)
        }
        else setColor(false);
    }
    window.addEventListener("scroll", changColor);
    // Cache selectors
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const sectionRefs = [
        { section: "Home", ref: leadershipRef },
        { section: "Howit", ref: providerRef },
        { section: "Achievements", ref: operationsRef },
        { section: "Pricing", ref: pricingRef },

    ];



    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                // console.log(ele)
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    console.log(offsetBottom)
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });
            // console.log(selected);

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);
    // console.log(visibleSection)
    return (
        <nav className={color ? 'top-navbar is-active' : 'top-navbar  hidden'}>
            <div className='Container is-navbar'>
                <div className='hero-content__logo-wrapper is-top-naav'>
                    <div className='logo-white-wrapper'>
                        <img src='https://assets.website-files.com/62d52b6d074c2e318f479724/62d5364443bd69032aca1a2b_adc-icon.svg' className="hero-icon" loading='lazy' />
                    </div>
                </div>
                <div className='flex' id="mainNav" ref={headerRef}>
                    <a href="#home"

                        className={visibleSection === "Home" ? "hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block w--current " : "hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block "} aria-current="page" id="Home" ref={leadershipRef} >
                        <div class="nav-item-logo-wrapper is-nav upper">
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
                        <div className='text-[1em] font-bold whitespace-nowrap'>
                            Homepage
                        </div>

                    </a>
                    <a href="#howit" className={`hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block ${visibleSection === "Howit" ? "w--current" : ""
                        }`} aria-current="page" id="Howit" ref={providerRef}>
                        <div class="nav-item-logo-wrapper is-nav upper">
                            <div class="embed-icon w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.002 22.998">
                                    <path id="Subtraction_43" data-name="Subtraction 43" d="M14371-8857h-11a6.007,6.007,0,0,1-6-6v-11a6.007,6.007,0,0,1,6-6h11a6.007,6.007,0,0,1,6,6v11A6.007,6.007,0,0,1,14371-8857Zm-5.457-7.391a.141.141,0,0,1,.066.016l2.619,1.379a.945.945,0,0,0,.455.111.986.986,0,0,0,.75-.35.964.964,0,0,0,.217-.8l-.5-2.919a.139.139,0,0,1,.04-.122l2.121-2.067a.978.978,0,0,0,.246-1.007.978.978,0,0,0-.794-.671l-2.927-.423a.145.145,0,0,1-.108-.079l-1.31-2.652a.978.978,0,0,0-.88-.548.978.978,0,0,0-.881.548l-1.31,2.652a.139.139,0,0,1-.1.079l-2.927.426a.965.965,0,0,0-.793.668.967.967,0,0,0,.245,1.007l2.118,2.067a.139.139,0,0,1,.043.126l-.5,2.915a1,1,0,0,0,.39.96.98.98,0,0,0,.581.188.959.959,0,0,0,.455-.111l2.619-1.379A.166.166,0,0,1,14365.544-8864.392Z" transform="translate(-14353.999 8879.999)" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='text-[1em] font-bold whitespace-nowrap'>
                            How it Works
                        </div>

                    </a>
                    <a href="#achi" className="hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block" aria-current="page" id="Achievements" ref={operationsRef} >
                        <div class="nav-item-logo-wrapper is-nav upper">
                            <div class="embed-icon w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 27.255 20.752">
                                    <path id="people" d="M21.32,79.928H5.935a.879.879,0,0,1-.879-.879v-2.6a3.15,3.15,0,0,1,1.864-2.873c3.293-1.47,3.113-1.421,3.369-1.421h1.045a.879.879,0,0,1,.854.669,1.485,1.485,0,0,0,2.881,0,.879.879,0,0,1,.854-.669c1.125,0,1.182-.022,1.4.076l3.011,1.344A3.15,3.15,0,0,1,22.2,76.445v2.6a.879.879,0,0,1-.879.879ZM13.649,59.176a5.37,5.37,0,1,0,5.37,5.37,5.376,5.376,0,0,0-5.37-5.37ZM5.177,64.92A3.381,3.381,0,1,0,8.559,68.3,3.385,3.385,0,0,0,5.177,64.92Zm16.9,0A3.381,3.381,0,1,0,25.459,68.3,3.385,3.385,0,0,0,22.078,64.92Zm3.908,8.054c-1.829-.817-1.786-.825-2.036-.825-1.31,0-2.166-.009-2.746-.012a.549.549,0,0,0-.256,1.037,3.158,3.158,0,0,1,.973.734,3.8,3.8,0,0,1,.961,2.8.549.549,0,0,0,.549.549h2.945a.879.879,0,0,0,.879-.879v-1.45A2.146,2.146,0,0,0,25.986,72.975Zm-22.68-.825c-.249,0-.2.005-2.036.825A2.146,2.146,0,0,0,0,74.931v1.45a.879.879,0,0,0,.879.879H3.824a.549.549,0,0,0,.549-.55,3.785,3.785,0,0,1,.961-2.8,3.167,3.167,0,0,1,.964-.73.549.549,0,0,0-.254-1.037c-.583,0-1.44.008-2.739.008Z" transform="translate(0 -59.176)" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='text-[1em] font-bold whitespace-nowrap'>
                            Achievements
                        </div>

                    </a>
                    <a href="#pri" className="hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block" aria-current="page" id="Pricing" ref={pricingRef} >
                        <div class="nav-item-logo-wrapper is-nav upper">
                            <div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168" transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455" d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z" transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg>
                            </div>
                        </div>
                        <div className='text-[1em] font-bold whitespace-nowrap'>
                            Pricing
                        </div>

                    </a>
                    <a href="/services" className="hover:cursor-pointer nav-item__link is-navbar top-nav w-inline-block" aria-current="page" >
                        <div class="nav-item-logo-wrapper is-nav upper">
                            <div class="embed-icon w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15.841 16.161">
                                    <path id="shopping-bag" d="M109.775,97.063h-1.6v-.048a5.048,5.048,0,1,0-10.1,0v.048h-1.6a1.277,1.277,0,0,0-1.245,1.562l1.744,7.618a2.426,2.426,0,0,0,2.365,1.885h7.559a2.426,2.426,0,0,0,2.365-1.885l1.744-7.618a1.277,1.277,0,0,0-1.245-1.562Zm-10.263-.048a3.619,3.619,0,1,1,7.238,0v.035H99.512Z" transform="translate(-95.211 -91.967)" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='text-[1em] font-bold whitespace-nowrap'>
                            Services
                        </div>

                    </a>

                </div>
                <div className={'menu-buttons flex'}>
                    <div className={userInfo ? 'hidden' : 'hero-content__logo-wrapper is-top-navbar'}>
                        <a data-ps="target" href="/register" target="_blank" className="logo-white-wrapperr is-red is-top-navbar w-inline-block">
                            <div className="login-text is-topnav">REGISTER </div>
                            <div className="html-embed w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21">
                                    <g id="_19" data-name="19" transform="translate(-2 -2)">
                                        <path id="Path_25456" data-name="Path 25456" d="M16.7,2H8.3A6.307,6.307,0,0,0,2,8.3v8.4A6.307,6.307,0,0,0,8.3,23h8.4A6.307,6.307,0,0,0,23,16.7V8.3A6.307,6.307,0,0,0,16.7,2Zm.84,11.13-3.15,4.2a1.05,1.05,0,1,1-1.68-1.259l1.89-2.52H8.2a1.056,1.056,0,0,1,0-2.1H14.6L12.71,8.93A1.05,1.05,0,1,1,14.39,7.67l3.15,4.2a1.049,1.049,0,0,1,0,1.259Z" transform="translate(0 0)" fill="#fff"></path>
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header