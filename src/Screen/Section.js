import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../Components/homePage/Header.css"
import "../assets/css/main.css"
import "../assets/css/responsive.css"
import { SidebarData } from '../Components/Slidebar/Slidebar';
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker } from 'antd';
import { logout, updateMoney } from '../redux/Actions/userAction'
import { CreateWallet, updateWallet } from '../redux/Actions/WalletAction'
import moment from "moment"
import Toast from "../Components/LoadingError/Toast";
import { toast } from "react-toastify";
import { report } from '../redux/Actions/reportActions'
import { createCashFlow } from '../redux/Actions/cashAction'
import { createAddFunds, listMyAdsFunds } from '../redux/Actions/AddFunds'
import axios from 'axios'
import { updateVoucher } from '../redux/Actions/Voucher'
import { URL } from "../redux/Url";

const { RangePicker } = DatePicker
const usePathName = () => {
    const location = useLocation();
    return location.pathname;
};

function Section
    () {
    const [chooseSelect, SetChooseSelect] = useState('MoMo')
    const [request, setRequest] = useState('Order')
    const [message, setMessage] = useState('')
    const [choose, SetChoose] = useState('Order')
    const [code, setCode] = useState('')
    const history = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
   
    const dispatch = useDispatch();
    const toastId = React.useRef(null);
    const voucher = useSelector((state) => state.voucher);
    const { success } = voucher
    const logoutHandler = () => {
        dispatch(logout());
    };
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const randomText = (text, length = 2) => {
        var string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which dont look even slightly believable If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet It uses a dictionary of over 200 Latin words combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable The generated Lorem Ipsum is therefore always free from repetition injected humour or non character words etc estimate paint upset allocate create distribute want supplement match disturb thrust earn clutch compose occur manipulate wave enhance plunge listen stretch permit opt whisper imagine play promote render condemn light peer enforce murder combine wait impress resemble land protect need walk approve characterise record remark dismiss ride show criticize like own compile dress process transport dissolve brainstorm accuse drain bloom complete campaign reverse matter dominate forget induce stress inform ban prevent collect explain have tuck destroy encourage put hurry stick whisper attract stretch reply enforce enquire quote rub appoint spin concentrate time express review fund disturb inspect tie conceal suppress mount touch find learn close wish apply going pop incur leave shrug elect deem vary name slip swear prove give laugh move bring break rule boast smile shift bind react cite cook shout stare march aim lend dip cast ring order help sound value bend form train hunt own wrap'.toLowerCase();
        string = string.split(' ');
        var output = [], random_position = Math.floor(Math.random() * length);
        for (var i = 0; i < length; i++) {
            output.push(string[Math.floor(Math.random() * string.length)]);
        }
        output[random_position] = text;
        return output.join('');
    }

    const content = (`az${userInfo?._id}pq`)
    // const QR = 
    const phone = "0985822626"
    const handleSubbmit = () => {
        const access_token = "MvDqOYEh6uK7KSKnsY1ilEFUWNfFHXC16I0odgyKn25wuC6X9i"
        const amount = 0
        // dispatch(updateVoucher({ nameVoucher: code }))
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        axios.post(`${URL}/api/voucher/edit`, { nameVoucher: code }, config)
            .then(res => {
                dispatch(createCashFlow({
                    type: "DEPOSIT",
                    spending: 123,
                    remainingMoney: 123
                })
                )
                dispatch(updateWallet(
                    {
                        amount: ((6000) / 23000).toFixed(2)
                    }
                ))
            })
            .catch(err => {
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error(err.response.data.message, Toastobjects);
                }
            })
        // axios.post('https://momosv3.apimienphi.com/api/checkTranContent', JSON.stringify({ access_token, phone, content }))
        //     // .then(res => res.json())
        //     .then(res => {
        //         if (res.data.error !== 1) {
        //             dispatch(createAddFunds({
        //                 data: {
        //                     tranId: res.data.data.tranId,
        //                     amount: res.data.data.amount,
        //                     comment: res.data.data.comment,
        //                     // decs: res.data.data.decs,
        //                     create_time: res.data.data.create_time,
        //                     run_time: res.data.data.run_time,
        //                     user: res.data.data.user,
        //                     partnerId: res.data.data.partnerId,
        //                     partnerName: res.data.data.partnerName,
        //                 },
        //                 type: "VND",
        //             }))
        //             dispatch(updateMoney(
        //                 {
        //                     amount: ((amount) / 23000).toFixed(2)
        //                 }
        //             ))
        //             dispatch(createCashFlow({
        //                 type: "Add order",
        //                 spending: res.data.data.amount,
        //                 remainingMoney: (wallet.balance + res.data.data.amount).toFixed(2)
        //             })
        //             )
        //             // ))
        //         }

        //     })




    }
    const handlerSendReport = () => {
        const temp = document.getElementById('order').value
        if (temp === "" && message === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Order or Message not null", Toastobjects);
            }
        }
        else {
            dispatch(report({
                reportOrder: {
                    order: Number(temp),
                    message,
                    subject: choose,
                    Request: request
                }
            }))
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Report thành công", Toastobjects);
            }

        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(CreateWallet())
        dispatch(listMyAdsFunds())

    }, [dispatch])
    const location = usePathName();
    const id = location.split("/")[2]
    const Location = useLocation();
    const [click, setClick] = useState(false)
    const toggleChecked = () => setClick(value => !value);

    const messageList = useSelector((state) => state.messageList)
    const { messager } = messageList
    const createWallet = useSelector((state) => state.createWallet)
    const { wallet } = createWallet
    const format1 = "YYYY-MM-DD HH:mm:ss"
    const redirect = Location.pathname ? Number(Location.pathname.split("/")[2]) : "";
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
            <Toast />
            <div className={location === "/new" ? ' flex-test flex-col flex-1 page-wrapper is-home bg  ' : ' flex-test flex-col flex-1 page-wrapper is-home bg  '} ref={refOne}>
                <div className={click ? 'page flex flex-row flex-column-fluid' : 'page flex flex-row '}>
                    <div className={click ? 'aside py-9 drawer drawer-start drawer-on w-[250px] ' : 'aside py-9'}>
                        <div className='aside-logo flex-none px-9 mb-9'>
                            <Link to="/">
                                <img alt="Logo" src="https://lh3.googleusercontent.com/pw/AL9nZEVrckDMTisn5ajw5Al7lamh-eYQgFy8L9BwN-sczLErlyBGyuZmdfKK7mJ2Ow78EbIUP7xwAPGlWZ1HPQ_l4Iqfum2t7U_SrI9F-I9O6bLX_8TsOO0iM_YJDtZEFyfQMsUXDKti-OQn6ISqWkCkpuc=w703-h434-no?authuser=0" class="h-[3.5rem] logo theme-light-show" />
                            </Link>
                        </div>
                        <div className='aside-menu flex-column-fluid pl-5 pr-3 mb-9 '>
                            <div className={userInfo ? 'w-full hover-scroll-overlay-y flex pr-2 h-[648px]' : 'w-full hover-scroll-overlay-y flex pr-2 '} data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_example_js_header, #kt_example_js_footer, #kt_header"
                            >
                                <div className='menu menu-column menu-rounded menu-sub-indention menu-active-bg font-medium my-auto'>
                                    <div className='menu-item'>
                                        <Link to='/new' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-cart fs-1"></i></span>
                                            <span class="menu-title lg:text-[14.3px]" >New order</span>
                                        </Link>
                                    </div>
                                    <div className='menu-item'>
                                        <Link to='/mass' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-shopping-basket fs-1"></i></span>
                                            <span class="menu-title" >Mass order</span>
                                        </Link>
                                    </div>
                                    <div className='menu-item'>
                                        <Link to='/orders' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-th-list fs-1"></i></span>
                                            <span class="menu-title" >My Orders</span>
                                        </Link>
                                    </div>
                                    <div className='menu-item'>
                                        <Link to='/addfunds' className={userInfo ? 'menu-link' : "menu-link d-none"}>
                                            <span class="menu-icon"><i class="las la-credit-card fs-1"></i></span>
                                            <span class="menu-title" >Add funds</span>
                                        </Link>
                                    </div>
                                    <div className='menu-item'>
                                        <Link to='/services' className='menu-link'>
                                            <span class="menu-icon"><i class="fa-brands fa-servicestack fs-1"></i></span>
                                            <span class="menu-title" >Services</span>
                                        </Link>
                                    </div>
                                    <div class="menu-item">
                                        <Link to="/tickets" class="menu-link ">
                                            <span class="menu-icon"><i class="las la-phone fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Support">Support</span>
                                        </Link>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <Link to="/settings" class="menu-link">
                                            <span class="menu-icon"><i class="las la-cog fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Settings">Settings</span>
                                        </Link>
                                        <Link to="/cashflow" class="menu-link">
                                            <span class="menu-icon"><i class="las la-hand-holding-usd fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Cash flow">Cash flow</span>
                                        </Link>
                                    </div>

                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <Link to="/affiliate" class="menu-link">
                                            <span class="menu-icon"><i class="las la-podcast fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Affiliate">Affiliate</span>
                                        </Link>
                                    </div>
                                    <div class={userInfo ? "menu-item" : "menu-item d-none"}>
                                        <Link to="/childpanel" class="menu-link">
                                            <span class="menu-icon"><i class="las la-child fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Child Panel">Child Panel</span>
                                        </Link>
                                    </div>
                                    <div class="menu-item">
                                        <Link to="/api" class="menu-link">
                                            <span class="menu-icon"><i class="las la-book fs-1"></i></span>
                                            <span class="menu-title">API</span>
                                        </Link>
                                    </div>
                                    <div class={userInfo ? "menu-item  d-none" : "menu-item"}>
                                        <Link to="/login" class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Sign in">Sign in</span>
                                        </Link>
                                    </div>
                                    <div class={"menu-item"}>
                                        <Link to={userInfo ? "/" : "/register"} onClick={logoutHandler} class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" >{userInfo ? 'Sign out' : 'Sign up'}</span>
                                        </Link>
                                    </div>
                                    {/* <div class="menu-item">
                                        <Link to="/register" onClick={logoutHandler} class="menu-link">
                                            <span class="menu-icon"><i class="las la-sign-in-alt fs-1"></i></span>
                                            <span class="menu-title" data-lang="menu::Sign up">Sign out</span>
                                        </Link>
                                    </div> */}
                                    <div class="menu-item">
                                        <div id="google_translate_element" class="mb-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={userInfo ? 'aside-footer flex-column-auto px-9' : 'hidden'}>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='symbol symbol-circle symbol-40px'>
                                        <img src="https://cdn.my1dg.com/3/media/avatars/300-3.jpg" alt="photo" />
                                    </div>
                                    <div className='ml-2'>
                                        <Link to="#" class="text-gray-800 text-hover-primary text-[0.95rem] font-bold leading-none">{userInfo?.name}</Link>
                                        <span class="text-muted font-semibold block text-[0.75rem] lh-1">{userInfo?.email}</span>
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
                                    <h1 class="flex flex-col text-dark font-semibold my-0 fs-1">{
                                        SidebarData.map((item) => location === item.path ? item.tilte : null)

                                    }
                                        {/* {
                                            SidebarData.map((item) => location.split(`/8`)[0] === item.path.split(`/:id`)[0] ? item.tilte : null)

                                        } */}
                                    </h1>
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
                                        <img alt="Logo" src="https://lh3.googleusercontent.com/pw/AL9nZEVrckDMTisn5ajw5Al7lamh-eYQgFy8L9BwN-sczLErlyBGyuZmdfKK7mJ2Ow78EbIUP7xwAPGlWZ1HPQ_l4Iqfum2t7U_SrI9F-I9O6bLX_8TsOO0iM_YJDtZEFyfQMsUXDKti-OQn6ISqWkCkpuc=w703-h434-no?authuser=0" class="theme-light-show h-9 " />
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
                                                    <button data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">

                                                        <i class="fas fa-bell fs-1 text-primary"></i>
                                                    </button>
                                                    {/* <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

                                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ></span>
                                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ></span>
                                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></span>
                                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ></span>

                                                </div>

                                            </div>
                                            <div className='flex items-center ml-1 lg:ml-3 '>
                                                <div className='cursor-pointer text-[1.35rem] text-primary'>
                                                    ₫{(wallet?.balance)?.toFixed(2)}
                                                </div>
                                                {/* <div className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color font-semibold py-4 text-[1.075rem] w-250px hidden'>
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
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content flex flex-col flex-column-fluid'>
                            <div className='container-fluid'>
                                {location === "/affiliate" ? <div className='alert alert-primary  '>
                                    🤑 Wanna get money? Use our Affiliate Programs to get more! Refer your friends and lets make money! 👍

                                </div> : null}
                                {location === "/childpanel" ? <div className='alert alert-primary  '>
                                    <p class="m-0 text-[#009ef7] text-[13px]">Please change domain nameservers to:</p>
                                    <p class="m-0 font-bold text-[#009ef7] text-[13px]">ns1.1dgdns.com</p>
                                    <p class="m-0 font-bold text-[#009ef7] text-[13px]">ns2.1dgdns.com</p>

                                </div> : null}
                                {location === "/childpanel" ? <div className='alert alert-primary text-[13px] '>
                                    Please use this account on this site as
                                    <strong> ADMIN </strong>
                                    account for log in to child panel.
                                </div> : null}

                                {location === "/new" ? <div className='alert alert-primary flex items-center p-5 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi inline-block bi-megaphone-fill fs-2x mr-8 text-primary" viewBox="0 0 16 16">
                                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <ul className='list-disc'>
                                            <li className='hidden'>
                                                <strong className='font-1 text-[12px]'>
                                                    All services 4000h watch time dropped. Orders from December 6 will have views deducted. We will partial order all orders for you in 5 days. The reason is that all of today's views are deducted so we can refund the  exact amount.
                                                </strong>
                                            </li>
                                            <li>Các bạn muốn mở website riêng dành cho đại lý liên hệ với mình qua FB <Link to="https://www.facebook.com/motdanga" rel="noopener noreferrer" target="_blank">Nguyễn Mạnh Hùng</Link></li>
                                        </ul>
                                    </div>

                                </div> : null}
                                <div className='page-title flex flex-col items-start justify-center flex-wrap lg:mr-2 pb-5 lg:pb-0'>
                                    <h1 className="flex flex-col text-dark font-semibold my-0 fs-1">
                                        {
                                            SidebarData.map((item) => location === item.path ? item.tilte : null)

                                        }

                                    </h1>
                                </div>
                                {location !== "/settings" ? <div className='row'>
                                    {location !== "/affiliate" ?
                                        <div className='col-lg-12'>
                                            <div className='card card-flush '>
                                                {
                                                    SidebarData.map((item) => location === item.path ? item.file : null)

                                                }
                                                {
                                                    SidebarData.map((item) => item.path === "/tickets/:id" && location === `/tickets/${id}` ? item.file : null)

                                                }
                                            </div>
                                            {location === "/addfunds" ? <div className='card card-flush mt-10'>
                                                <div className='card-body'>
                                                    <div class="tab-content" id="tabs-tabContent3">
                                                        <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                                                            <div class="data-pm-method d-none"></div>
                                                            <div className='mb-5'>
                                                                <label className="required mb-2 text-base font-medium text-[#3f4254] inline-block">Choose method</label>
                                                                <select id="countries" onChange={(e) => SetChooseSelect(e.target.value)} class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    <option value="MoMo" defaultValue>AUTO - Momo | Nạp tối thiểu 10.000 VND</option>
                                                                    <option value="USDT">USDT - TRC20 (5% Bonus on $1000+)</option>

                                                                </select>
                                                            </div>
                                                            <div className={chooseSelect === "USDT" ? 'mb-5 text-sm ' : 'hidden'}>
                                                                <p className='text-inherit text-sm mb-[1em]'>Địa chỉ <strong>USDT-TRC20</strong>: <strong>TRUY48qTEWE6sLzK2yxJCqqQZ1AeahWiQ2</strong></p>
                                                                <p className='text-inherit text-sm mb-[1em]'>Binance Pay ID : 11713152</p>
                                                                <p className='text-inherit text-sm mb-[1em]'>Sau khi chuyển tiền vui lòng liên hệ với tôi để được cập nhật tiền.</p>
                                                            </div>
                                                            <div className={chooseSelect != "USDT" ? "div-options div-8 text-center " : "hidden"} >
                                                                <img src={`https://momosv3.apimienphi.com/api/QRCode?phone=0985822626&amount=0&note=${content}`} class="w-250px  mb-5 inline-block" />
                                                                {/* <div className="mb-5">
                                                                    <span className="" id="momo_phone">Số điện thoại: <span className="fw-boldest text-primary ">{phone}</span></span>
                                                                    <span className="block" id="momo_content">Nội dung: <span className="fs-6 font-bold text-primary">{content}</span></span>
                                                                </div> */}
                                                                <div className='mb-2'>
                                                                    <input
                                                                        type="text"

                                                                        className="
          w-[25%]
          block
          
          px-3
          py-1.5
          text-base
          font-normal
          ml-auto
          mr-auto
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                                                                        id="exampleFormControlInput3"
                                                                        placeholder="Enter Code"
                                                                        onChange={(e) => setCode(e.target.value)}
                                                                    />
                                                                </div>
                                                                <button type="button" onClick={handleSubbmit} class={chooseSelect === "MoMo" ? "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" : "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden"}>Xác nhận thành công</button>

                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                                            <div class="mb-1">
                                                                <label class="form-label" data-lang="Filter">Filter</label>

                                                            </div>
                                                            <div className='mb-5'>
                                                                <RangePicker className='w-full' />
                                                            </div>
                                                            <div className='table-responsive mb-5'>
                                                                <table className='table align-middle table-row-bordered text-[.95rem] gy-3 gs-9 table-history-fund '>
                                                                    <thead class="fs-6 font-semibold bg-lighten">
                                                                        <tr>
                                                                            <th data-lang="Method">Method</th>
                                                                            <th data-lang="Amount">Amount</th>
                                                                            <th data-lang="Details">Details</th>
                                                                            <th data-lang="Created">Created</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div> : null}
                                            {location === "/tickets" && userInfo ?
                                                <div className='card card-flush mt-10'>
                                                    <div className='card-body'>
                                                        <div className='row'>
                                                            <div className='col-lg-7'>
                                                                <button type="button" class="btn btn-primary btn-sm mb-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">Create a ticket</button>
                                                                <div className='table-responsive'>
                                                                    <table className='table table-striped table-hover table-row-dashed table-row-gray-400 align-middle gs-2 gy-2' id="table-tickets">
                                                                        {messager?.map((items, index) => <tbody>
                                                                            <tr className='bg-lighten' onClick={() => history(`${items._id}`)}>
                                                                                <td>
                                                                                    <p class="m-0 fs-6 font-semibold text-[#181C32]">{items._id} - {items.reportOrder[0].subject} ({items.reportOrder[0].order})</p>
                                                                                    <p class="m-0 text-gray-700">{moment(items.createAt).format(format1)}</p>
                                                                                </td>
                                                                                <td class="fs-6 text-right"><span class="text-gray" >{items.reportOrder[0].status}</span></td>
                                                                            </tr>
                                                                        </tbody>)}
                                                                    </table>

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-5'>
                                                                <h3 class="mt-4 mb-5 text-primary font-semibold" data-lang="FAQ">Frequently FAQ's</h3>
                                                                <div class="accordion" id="accordionExample">
                                                                    <div class="accordion-item bg-white border border-gray-200">
                                                                        <h2 class="accordion-header mb-0" id="headingOne">
                                                                            <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                                                aria-controls="collapseOne">
                                                                                Why was my refill request rejected?
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body py-4 px-5">
                                                                                A refill can be rejected for a variety of reasons such as:
                                                                                1. The order has dropped below the start count of the original order, in this case the number must be brought up organically or through a new quick service order so that the system can refill the original order.
                                                                                2. The refill period outlined in the description of the order has now ended.
                                                                                3. The service does not offer refill.
                                                                                4.A new order has been made for the same link and there is overlap.
                                                                                If none of these reasons apply to you, please open a ticket with the support team for further assistance or clarification.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item bg-white border border-gray-200">
                                                                        <h2 class="accordion-header mb-0" id="headingTwo">
                                                                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                                                                aria-controls="collapseTwo">
                                                                                Is it possible for the quantity ordered to decrease?
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body py-4 px-5">
                                                                                A drop is normal, that is why most services offer a refill guarantee. A drop can depend on many factors such as an update made by the social media platform, or on the quality of service chosen. Always make sure to read the service descriptions carefully to ensure you are making the correct order for your needs.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item bg-white border border-gray-200">
                                                                        <h2 class="accordion-header mb-0" id="headingThree">
                                                                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                                                                aria-controls="collapseThree">
                                                                                Why was my order canceled?
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body py-4 px-5">
                                                                                Your orders will be canceled for one of the following reasons: 1. Placing two or more orders for the same link at the same time without waiting for completion. 2. The link format is incorrect or does not follow the instructions provided in the service description. 3. The service is currently being updated or under service. 4. In some cases, the quantity was not in increments of 100's or 1000's.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item bg-white border border-gray-200">
                                                                        <h2 class="accordion-header mb-0" id="heading4">
                                                                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                                                                aria-controls="collapse4">
                                                                                How many tickets can I open?
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body py-4 px-5">
                                                                                You must open only one ticket for all your orders so we can help you better. After the request has been submitted or the issue has been solved, the ticket will be closed. Only then should you open a new ticket for new orders. The maximum limit for pending tickets is 3. A response must be made by the support team to be able to open a new ticket.                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item bg-white border border-gray-200">
                                                                        <h2 class="accordion-header mb-0" id="heading5">
                                                                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                                                                                aria-controls="collapse5">
                                                                                How can I send a screenshot to you?                                                                        </button>
                                                                        </h2>
                                                                        <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body py-4 px-5">
                                                                                You can send us a screenshot using this website : https://imgur.com/upload                                                                    </div>
                                                                        </div>
                                                                        <div class="accordion-item bg-white border border-gray-200">
                                                                            <h2 class="accordion-header mb-0" id="heading6">
                                                                                <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false"
                                                                                    aria-controls="collapse5">
                                                                                    Why is my order not completed yet?
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div class="accordion-body py-4 px-5">
                                                                                    Check the status of your order from the orders tab in your user dashboard before opening a ticket.To know the speed of the orders please refer to the service description. In the rare event that the status of your order has become complete but the service was not delivered, please open a ticket and tell us so to check the order for you.                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null}
                                            {location === "/tickets" && userInfo ?
                                                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                                                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
                                                                    Create a ticket
                                                                </h5>
                                                                <button type="button"
                                                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body relative px-4 py-2 ">
                                                                <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Subject</label>
                                                                <select id="countries" onChange={(e) => { SetChoose(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    <option value="Order" defaultValue>Order</option>
                                                                    <option value="Payment">Payment</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                            <div className={choose === "Order" ? "modal-body relative px-4 py-2 " : "modal-body relative px-4 py-2 hidden"}>
                                                                <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Order ID</label>
                                                                <input type="text" id="order" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                                                            </div>
                                                            <div className={choose === "Order" ? "modal-body relative px-4 py-2 " : "modal-body relative px-4 py-2 hidden "}>
                                                                <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Request</label>
                                                                <select id="countries" onChange={(e) => { setRequest(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    <option value="Cancel" defaultValue>Cancel</option>
                                                                    <option value="Refill">Refill</option>
                                                                    <option value="Speed up">Speed up</option>
                                                                    <option value="DE">Other</option>
                                                                </select>
                                                            </div>
                                                            <div className="modal-body relative px-4 py-2">
                                                                <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Request</label>
                                                                <textarea id="message" rows="4" onChange={(e) => { setMessage(e.target.value) }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                                                            </div>
                                                            <div
                                                                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4  border-gray-200 rounded-b-md">

                                                                <button type="button"
                                                                    onClick={handlerSendReport}
                                                                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                                    Send
                                                                </button>
                                                            </div>
                                                            {/* <div
                                                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                                <button type="button"
                                                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                                                    data-bs-dismiss="modal">
                                                                    Close
                                                                </button>
                                                                <button type="button"
                                                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                                    Save changes
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                : null}

                                        </div> : SidebarData.map((item) => location === item.path ? item.file : null)
                                    }


                                </div> : null}
                                {location === "/settings" ? SidebarData.map((item) => location === item.path ? item.file : null) : null}
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
            </div>

            {/* <div class="text-center">
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                    Show right drawer
                </button>
            </div> */}

            <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none lg:w-[600px] w-[300px]" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header flex items-center justify-between p-4 border-b-[1px] border-solid boder-[#dadaeb]">
                    <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Updates</h5>
                    <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body flex-grow px-[29.25px] py-[26px] overflow-y-auto ">
                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-automt-[-0.45rem] mb-[1rem] mt-4'>
                                <div className="pr-3 mb-5 text-[#50cd89]">
                                    <div className="text-[14.95px] font-medium mb-2">[New Service] 1037 | Tiktok Likes | Max 500K | Speed: 150K/Day | $0.21</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-06 00:22:15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-auto mt-[-0.45rem] mb-[1rem]'>
                                <div className="pr-3 mb-5 text-[#50cd89]">
                                    <div className="text-[14.95px] font-medium mb-2">[New Service] 1037 | Tiktok Likes | Max 500K | Speed: 150K/Day | $0.21</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-06 00:22:15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                <div className="pr-3 mb-5 text-[#f1416c]">
                                    <div className="text-[14.95px] font-medium mb-2">[Disable Service] 1001 | FB Profile Followers | VIET NAM | Max 100k | Speed 3k/day</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-04 13:47:09</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                <div className="pr-3 mb-5 text-[#50cd89]">
                                    <div className="text-[14.95px] font-medium mb-2">[New Service] 1035 | Facebook Custom Comments | Bình luận Facebook Việt | Speed 50-200/Day | $3.5</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-04 12:41:25</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                <div className="pr-3 mb-5 text-[#50cd89]">
                                    <div className="text-[14.95px] font-medium mb-2">[New Service] 1034 | Facebook | 𝗣𝗼𝘀𝘁/𝗣𝗵𝗼𝘁𝗼 𝗟𝗶𝗸𝗲𝘀 | Max 10k | Speed 3k-5k/day | $0.182</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-03 23:52:40</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative p-0 m-0 flex items-start'>
                            <div className=' w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                <div className="pr-3 mb-5 text-[#50cd89]">
                                    <div className="text-[14.95px] font-medium mb-2">[New Service] 1033 | Youtube Likes | Speed 30k/Hours | $1.26</div>
                                    <div className="flex items-center mt-1 text-[1.075rem]">
                                        <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-03 22:56:17</div>
                                    </div>
                                </div>
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
