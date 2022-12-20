import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../Components/homePage/Header.css"
import "../assets/css/main.css"
import "../assets/css/responsive.css"
function ServicesScreen() {
    const [click, setClick] = useState(false)
    const toggleChecked = () => setClick(value => !value);


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
            <div className='  flex flex-col flex-root bg page-wrapper is-home' ref={refOne}>
                <div className='page flex flex-row flex-column-fluid'>
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
                                        <a href='/services' className='menu-link'>
                                            <span class="menu-icon"><i class="fa-brands fa-servicestack fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Services">Services</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <a href="/tickets" class="menu-link ">
                                            <span class="menu-icon"><i class="las la-phone fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Support">Support</span>
                                        </a>
                                    </div>
                                    <div class="menu-item d-none">
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
                                    <div class="menu-item d-none">
                                        <a href="/updates" class="menu-link">
                                            <span class="menu-icon"><i class="las la-hand-holding-usd fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Updates">Updates</span>
                                        </a>
                                    </div>
                                    <div class="menu-item d-none">
                                        <a href="/affiliate" class="menu-link">
                                            <span class="menu-icon"><i class="las la-podcast fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Affiliate">Affiliate</span>
                                        </a>
                                    </div>
                                    <div class="menu-item d-none">
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
                                    <div class="menu-item">
                                        <a href="/signin" class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Sign in">Sign in</span>
                                        </a>
                                    </div>
                                    <div class="menu-item">
                                        <a href="/signup" class="menu-link">
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
                                <div className='page-title flex flex-col items-start header-title justify-center flex-wrap me-lg-2 pb-5 pb-lg-0'>
                                    <h1 class="flex flex-col text-dark fw-bold my-0 fs-1">Services</h1>
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
                                <div className='page-title flex flex-col items-start justify-center flex-wrap lg:mr-2 pb-5 lg:pb-0'>
                                    <h1 className="flex flex-col text-dark font-semibold my-0 fs-1">Services</h1>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='card card-flush '>
                                            <div className='card-body'>
                                                <div className='row mb-2'>
                                                    <div className="col-lg-12  text-end fst-italic fs-8 text-gray-800" data-lang="rate">* Rate/1000</div>
                                                </div>
                                                <div className='table-responsive'>
                                                    <table className='table table-hover table-row-dashed table-row-gray-300 align-text gs-5 gy-3'>
                                                        <tbody className=''>
                                                            <tr className='bg-light'>
                                                                <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                                                    <div className='flex items-center '>
                                                                        <i className='fa-solid fa-star fs-2 mr-2'>

                                                                        </i>
                                                                        <div class="flex flex-col font-bold text-xl">Best for you | New</div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr><tr>
                                                                <td class="ps-10">
                                                                    <div class="flex items-center ml-2">
                                                                        <div class="flex flex-col">
                                                                            <div class="flex items-center">
                                                                                <div class="wrap">
                                                                                    <i class="fa-solid fa-star fs-4"></i>
                                                                                    <span class="font-bold  mr-1"> 1110</span>
                                                                                    - Tiktok Likes | VietNam | Speed 500-1000/day
                                                                                </div>
                                                                            </div>
                                                                            <span class="text-muted fs-7">
                                                                                Min:
                                                                                <span class="text-gray-700"> 50 </span>
                                                                                - Max:
                                                                                <span class="text-gray-700"> 10000</span>
                                                                            </span>
                                                                            <span class="mt-1">
                                                                                <span class="badge badge-success rounded-pill fs-9 mr-1" data-lang="label::New">New</span>
                                                                                <span class="badge badge-danger rounded-pill fs-9 me-1" data-lang="label::No refill">No refill</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="fw-bold">$0.8</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer py-4 flex lg:flex-col'>
                            <div className='app-container container-fluid flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center py-3'>
                                <div className='text-dark order-2 md:order-1'>
                                    <span className="text-muted font-medium mr-1">2022©</span>
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

export default ServicesScreen