import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../Components/homePage/Header.css"
import "../assets/css/main.css"
import "../assets/css/responsive.css"
import { SidebarData } from '../Components/Slidebar/Slidebar';
import { useSelector } from 'react-redux'
const usePathName = () => {
    const location = useLocation();
    return location.pathname;
};
function Section
    () {
    const location = usePathName();
    const [click, setClick] = useState(false)
    const toggleChecked = () => setClick(value => !value);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    })
    const refOne = useRef(null)
    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target)) {
            setClick(false)
        }
    }
    return (
        <>
            <div className=' flex-test flex-col flex-1 page-wrapper is-home bg  ' ref={refOne}>
                <div className={click ? 'page flex flex-row flex-column-fluid' : 'page flex flex-row '}>
                    <div className={click ? 'aside py-9 drawer drawer-start drawer-on w-[250px] ' : 'aside py-9'}>
                        <div className='aside-logo flex-none px-9 mb-9'>
                            <a href="/">
                                <img alt="Logo" src="http://1dg.me/assets/media/logo.png?1668419028" class="h-[25px] logo theme-light-show" />
                                <img alt="Logo" src="http://1dg.me/assets/media/logo.png?1668419028" class="h-[25px] logo theme-dark-show hidden" />
                            </a>
                        </div>
                        <div className='aside-menu flex-column-fluid pl-5 pr-3 mb-9'>
                            <div className='w-full hover-scroll-overlay-y flex pr-2'>
                                <div className='menu menu-column menu-rounded menu-sub-indention menu-active-bg font-medium my-auto'>
                                    <div className='menu-item'>
                                        <a href='/new' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-cart fs-1"></i></span>
                                            <span class="menu-title" >New order</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/services' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-basket fs-1"></i></span>
                                            <span class="menu-title" >Mass order</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/services' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-th-list fs-1"></i></span>
                                            <span class="menu-title" >My Orders</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/services' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-credit-card fs-1"></i></span>
                                            <span class="menu-title" >Add funds</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/services' className='menu-link'>
                                            <span class="menu-icon"><i class="fa-brands fa-servicestack fs-1"></i></span>
                                            <span class="menu-title" >Services</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <a href="/tickets" class="menu-link ">
                                            <span class="menu-icon"><i class="las la-phone fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Support">Support</span>
                                        </a>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <div class="menu-item">
                                            <a href="/settings" class="menu-link">
                                                <span class="menu-icon"><i class="las la-cog fs-1"></i></span>
                                                <span class="menu-title" data-lang="menu::Settings">Settings</span>
                                            </a>
                                        </div>
                                        <a href="/cashflow" class="menu-link">
                                            <span class="menu-icon"><i class="las la-hand-holding-usd fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Cash flow">Cash flow</span>
                                        </a>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <a href="/updates" class="menu-link">
                                            <span class="menu-icon"><i class="las la-hand-holding-usd fs-1"></i></span>
                                            <span class="menu-title" >Cash flow</span>
                                        </a>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <a href="/affiliate" class="menu-link">
                                            <span class="menu-icon"><i class="las la-podcast fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Affiliate">Affiliate</span>
                                        </a>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <a href="/childpanel" class="menu-link">
                                            <span class="menu-icon"><i class="las la-child fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Child Panel">Child Panel</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <a href="/api" class="menu-link">
                                            <span class="menu-icon"><i class="las la-book fs-1"></i></span>
                                            <span class="menu-title">API</span>
                                        </a>
                                    </div>
                                    <div class={userInfo ? "menu-item  d-none" : "menu-item"}>
                                        <a href="/login" class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Sign in">Sign in</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <a href="/register" class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Sign up">Sign up</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <div id="google_translate_element" class="mb-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <span className='svg-icon svg-icon-1 mt-1' onClick={toggleChecked}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
                                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <Link to="/" class="flex items-center">
                                        <img alt="Logo" src={logo} class="theme-light-show h-5 " />
                                        <img alt="Logo" src={logo} class="theme-dark-show hidden h-5" />
                                    </Link>
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

                                <div className='alert alert-primary flex items-center p-5 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi inline-block bi-megaphone-fill fs-2x mr-8 text-primary" viewBox="0 0 16 16">
                                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <ul className='list-disc'>
                                            <li>
                                                <strong className='font-1 text-[12px]'>
                                                    All services 4000h watch time dropped. Orders from December 6 will have views deducted. We will partial order all orders for you in 5 days. The reason is that all of today's views are deducted so we can refund the  exact amount.
                                                </strong>
                                            </li>
                                            <li>Các bạn muốn mở website riêng dành cho đại lý liên hệ với mình qua FB <a href="https://www.facebook.com/motdanga" rel="noopener noreferrer" target="_blank">Nguyễn Mạnh Hùng</a></li>
                                            {/* <li>You can get an SMM Panel like us (It is just a panel, and not services): <a href="https://1dgpanel.com/signup" rel="noopener noreferrer" target="_blank" style={{}}>1DG Panel</a></li> */}
                                        </ul>
                                    </div>

                                </div>
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
                        {/* <div className='footer py-4 flex lg:flex-col'>
                            <div className='app-container container-fluid flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center py-3'>
                                <div className='text-dark order-2 md:order-1'>
                                    <span className="text-muted font-medium mr-1">2022© </span>
                                    <Link to="/" target="_blank" className="text-gray-800 text-hover-primary">1DG SMM Panel - Social Services</Link>
                                </div>
                                <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                    <li class="menu-item">
                                        <Link to="/" target="_blank" class="menu-link px-2 active">Home</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link to="/terms" target="_blank" class="menu-link px-2">Term</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link to="/faqs" target="_blank" class="menu-link px-2">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div class={click ? "drawer-overlay tempt " : "drawer-overlay tempt hidden"}></div>
        </>
    )
}

export default Section
