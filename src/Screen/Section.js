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
    const style = "--i:0;";
    const style1 = "--i:1;";
    const style2 = "--i:2;";
    const style3 = "--i:3;";

    return (
        <>
            <div className=' flex-test flex-row flex-1 page-wrapper is-home bg  ' ref={refOne}>
                <div className={click ? 'page flex flex-row flex-column-fluid' : 'page flex flex-row '}>
                    <div className={click ? 'aside py-9 drawer drawer-start drawer-on w-[250px] ' : 'aside py-9'}>
                        <div className='aside-logo flex-none px-9 mb-9'>
                            <a href="/">
                                <img alt="Logo" src="http://1dg.me/assets/media/logo.png?1668419028" class="h-[25px] logo theme-light-show" />
                                <img alt="Logo" src="http://1dg.me/assets/media/logo.png?1668419028" class="h-[25px] logo theme-dark-show hidden" />
                            </a>
                        </div>
                        <div className='aside-menu flex-column-fluid pl-5 pr-3 mb-9 '>
                            <div className='w-full hover-scroll-overlay-y flex pr-2 h-[648px]'>
                                <div className='menu menu-column menu-rounded menu-sub-indention menu-active-bg font-medium my-auto'>
                                    <div className='menu-item'>
                                        <a href='/new' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-cart fs-1"></i></span>
                                            <span class="menu-title" >New order</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/mass' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-basket fs-1"></i></span>
                                            <span class="menu-title" >Mass order</span>
                                        </a>
                                    </div>
                                    <div className='menu-item'>
                                        <a href='/orders' className={userInfo ? 'menu-link' : "menu-link d-none"}>
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
                        <div className='aside-footer flex-column-auto px-9'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='symbol symbol-circle symbol-40px'>
                                        <img src="https://cdn.my1dg.com/3/media/avatars/300-3.jpg" alt="photo" />
                                    </div>
                                    <div className='ml-2'>
                                        <a href="#" class="text-gray-800 text-hover-primary text-[0.95rem] font-bold leading-none">nguyendinhtu1</a>
                                        <span class="text-muted font-semibold block text-[0.75rem] lh-1">nguyentu@gmail.com</span>
                                    </div>
                                </div>

                                <div className='ml-1'>
                                    <div className='btn btn-sm btn-icon btn-active-color-primary relative -mr-2'>
                                        <span class="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor"></path>
                                                <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
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
                                <div className='flex items-center flex-shrink-0'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center'>
                                            <div className='btn btn-icon w-[35px] h-[35px] md:w-[40px] md:h-[40px]'>
                                                <span class="svg-icon svg-icon-1 text-primary">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className='flex items-center ml-1 lg:ml-3'>
                                                <div className='btn btn-icon w-[30px] h-[30px] pulse pulse-primary'>
                                                    <i class="fas fa-bell fs-1 text-primary"></i>
                                                    <span style={{ style }}></span>
                                                    <span style={{ style1 }}></span>
                                                    <span style={{ style2 }}></span>
                                                    <span style={{ style3 }}></span>

                                                </div>
                                            </div>
                                            <div className='flex items-center ml-1 lg:ml-3 hidden'>
                                                <div className='cursor-pointer text-[1.35rem] text-primary'>
                                                    ₫0
                                                </div>
                                                <div className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color font-semibold py-4 text-[1.075rem] w-250px hidden'>
                                                    <div class="menu-item px-5 mb-3" data-lang="menu::Choose your currency">Choose your currency</div>
                                                    <div className='menu-item px-5 text-[0.85rem]'>

                                                        <span className='w-full select2 select2-container select2-container-bootstrap5'>
                                                            <span className='selection'>
                                                                <span className='select2-selection select2-selection--single form-select form-select-sm sl-currency'>
                                                                    <span class="select2-selection__rendered" id="select2-currency-iu-container" role="textbox" aria-readonly="true" title="0 VND">0 VND</span>
                                                                    <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>

                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content flex flex-col flex-column-fluid'>
                            <div className='container-fluid'>


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
                        <div className='footer py-4 flex lg:flex-col'>
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
                        </div>
                    </div>
                </div>
            </div>
            <div class={click ? "drawer-overlay tempt " : "drawer-overlay tempt hidden"}></div>
        </>
    )
}

export default Section
