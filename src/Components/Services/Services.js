import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProduct } from '../../redux/Actions/productAction';

function Services() {
    const [click, setClick] = useState(false)
    const toggleChecked = () => setClick(value => !value);
    const dispatch = useDispatch();
    let bestSeller = [908, 1113, 1136, 1131, 1137, 1140, 878, 1117, 1141, 461, 1053, 1071, 1130, 1016, 598, 467, 604, 1028, 837, 421]
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList;

    // useEffect(() => {
    //     document.addEventListener("click", handleClickOutside, true)
    // })
    const refOne = useRef(null)
    // const handleClickOutside = (e) => {
    //     if (!refOne.current.contains(e.target)) {
    //         setClick(false)
    //     }
    // }
    function test(numbers, targetNumber) {
        if (numbers.includes(targetNumber)) { return true }
        else return false
    }
    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);
    return (
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
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>

                                    </i>
                                    <div class="flex flex-col font-bold text-lg"> Youtube | Increase video likes</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Increase video likes" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>New</span>
                                            <span class="badge badge-danger rounded-pill  mr-1" style={{ fontSize: 8.8 }} >No refill</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? `$ ${items.rate}` : `≈  ${items.rate} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube fs-2 mr-2 ' style={{ fontSize: 19 }}>

                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Increase video views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Increase video views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>New</span>
                                            <span class="badge badge-danger rounded-pill  mr-1" style={{ fontSize: 8.8 }} >No refill</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? `$ ${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>

                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube fs-2 mr-2 ' style={{ fontSize: 19 }}>

                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Subscribe channel</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Subscribe channel" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>New</span>
                                            <span class="badge badge-danger rounded-pill  mr-1" style={{ fontSize: 8.8 }} >No refill</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? `$ ${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>

                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-solid fa-star text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Best for you | New</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.service === 1152 ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-solid fa-star fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>New</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>15 days Refil</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-solid fa-star text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Best for you | Best seller</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => test(bestSeller, items.service) ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-solid fa-star fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Page Likes | Tăng likes Fanpage |")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={"badge badge-danger rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1117 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Promotion</span>
                                            <span class={items.service === 1113 || items.service === 1136 || items.service === 1131 || items.service === 1137 || items.service === 1117 || items.service === 461 || items.service === 1130 || items.service === 1016 || items.service === 467 || items.service === 1028 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>

                                            <span class={items.service === 908 || items.service === 1113 || items.service === 1131 || items.service === 1140 || items.service === 878 || items.service === 1117 || items.service === 1141 || items.service === 461 || items.service === 1130 || items.service === 1016 || items.service === 598 || items.service === 1028 || items.service === 837 || items.service === 421 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service === 1131 || items.service === 1071 || items.service === 1130 || items.service === 1016 || items.service === 467 || items.service === 421 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Real</span>
                                            <span class={items.service === 461 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Super Fast</span>

                                            <span class={items.service === 908 || items.service === 1140 || items.service === 878 || items.service === 1141 || items.service === 1130 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Lifetime</span>
                                            <span class={items.service === 1136 || items.service === 1137 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refil</span>
                                            <span class={items.service === 1136 || items.service === 1137 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>15 days Refil</span>
                                            <span class={items.service === 1016 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>60 days Refil</span>

                                            <span class={items.service === 1113 || items.service === 1136 || items.service === 1131 || items.service === 1137 || items.service === 1117 || items.service === 461 || items.service === 1053 || items.service === 467 || items.service === 604 || items.service === 1028 || items.service === 837 || items.service === 421 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refil</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-solid fa-star text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Best for you | Promotion</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.service === 1117 ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-solid fa-star fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Subscribers | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={"badge badge-danger rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Promotion</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Recommendation</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>30 days Refil</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Monetizable - Revenue</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.service === 1131 ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Monetizable - Revenue | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={"badge badge-danger rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Recommendation</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Real</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>30 days Refil</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>

                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Views | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service === 1130 || items.service === 467 || items.service === 604 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1130 || items.service === 467 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>

                                            <span class={items.service === 1130 || items.service === 1119 || items.service === 460 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service === 1130 || items.service === 467 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Real</span>
                                            <span class={items.service === 1130 || items.service === 469 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Lifetime</span>

                                            <span class={items.service === 467 || items.service === 1119 || items.service === 604 || items.service === 270 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refil</span>
                                            <span class={items.service === 460 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>

                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Subscribers</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Subscribers" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Subscribers | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service === 1113 || items.service === 1117 || items.service === 1016 || items.service === 1028 || items.service === 421 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1113 || items.service === 1117 || items.service === 1016 || items.service === 1028 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>

                                            <span class={items.service === 1113 || items.service === 1117 || items.service === 1016 || items.service === 1028 || items.service === 421 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>30 days Refil</span>
                                            <span class={items.service === 1016 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>60 days Refil</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>

                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Likes | Dislikes</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Likes | Dislikes " ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Likes | Dislikes  | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service === 461 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 461 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service === 723 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Lifetime</span>

                                            <span class={items.service === 461 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Super Fast</span>
                                            <span class={items.service === 461 || items.service === 1105 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refil</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Likes - Country Targeted</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Likes - Country Targeted" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Likes - Country Targeted | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service === 908 || items.service === 878 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>

                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Lifetime</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Comments</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Comments" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Comments | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service != 1066 && items.service != 743 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service !== 1066 && items.service !== 1114 && items.service !== 1104 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span>
                                            <span class={items.service === 1066 || items.service === 1114 || items.service === 1104 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | LiveStream | Pre-Premiere</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | LiveStream | Pre-Premiere" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | LiveStream | Pre-Premiere | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service === 305 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span>
                                            <span class={items.service === 305 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refund</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | Youtube Live Stream Views - SV3 [Latest Service]</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | Youtube Live Stream Views - SV3 [Latest Service]" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | Youtube Live Stream Views - SV3 [Latest Service] | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Super Fast</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>No refill</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-youtube text-[1rem] mr-2' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Youtube | 4000H Watchtime - Drop after 5 days</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Youtube | 4000H Watchtime - Drop after 5 days" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-youtube fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Youtube | 4000H Watchtime - Drop after 5 days | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>No refil</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Followers | Tăng người theo dõi</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Followers | Tăng người theo dõi" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Followers | Tăng người theo dõi | ")}
                                            </div>
                                        </div>
                                        <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span>
                                        <span class="mt-1">
                                            <span class={items.service === 1137 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1137 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1137 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service === 1137 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>15 days Refill</span>

                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>30 days Refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Facebook Partner Monetization Package</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Facebook Partner Monetization Package" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Facebook Partner Monetization Package | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            <span class={"badge badge-danger rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            {/* <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span> */}

                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>30 days Refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Post Likes | Tăng likes bài viết</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Post Likes | Tăng likes bài viết" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Post Likes | Tăng likes bài viết | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={ "badge badge-danger rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Best seller</span> */}
                                            {/* <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span> */}
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class="badge badge-success rounded-pill  mr-1" style={{ fontSize: 8.8 }}>No refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Video Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Video Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Video Views | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            <span class={items.service === 1140 || items.service === 1141 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            {/* <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={ "badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span> */}
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={items.service === 1140 || items.service === 1141 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Lifetime</span>

                                            <span class={items.service !== 1140 && items.service !== 1141 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Page Likes | Tăng likes Fanpage</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Page Likes | Tăng likes Fanpage" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Page Likes | Tăng likes Fanpage | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span>

                                            {/* <span class={items.service === 1140 || items.service === 1141 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Lifetime</span>

                                            <span class={items.service !== 1140 && items.service !== 1141 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">Facebook | Shares | Tăng lượt chia sẻ</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Shares | Tăng lượt chia sẻ" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Shares | Tăng lượt chia sẻ | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>

                                            <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Facebook | Live stream | Tăng mắt Live Stream [VIP]</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Live stream | Tăng mắt Live Stream [VIP]" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Live stream | Tăng mắt Live Stream [VIP] | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Facebook | Comment | Tăng bình luận</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Comment | Tăng bình luận" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Comment | Tăng bình luận | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Facebook | Vip Likes | GÓI THÁNG</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Vip Likes | GÓI THÁNG " ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Vip Likes | GÓI THÁNG  | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-facebook  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Facebook | Members Group | Tăng thành viên nhóm</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Facebook | Members Group | Tăng thành viên nhóm" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-facebook text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Facebook | Members Group | Tăng thành viên nhóm | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-twitter  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Twitter | Retweets</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Twitter | Retweets" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-twitter text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Twitter | Retweets | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-twitter  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Twitter | Followers</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Twitter | Followers" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-twitter text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Twitter | Followers | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-twitter  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Twitter | Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Twitter | Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-twitter text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Twitter | Views | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-instagram  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Instagram | Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Instagram | Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-instagram text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Instagram | Views | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-instagram  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Instagram | Likes</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Instagram | Likes" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-instagram text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Instagram | Likes | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-instagram  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Instagram | Followers</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Instagram | Followers" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-instagram text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Instagram | Followers | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-telegram  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Telegram | Telegram</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Telegram | Telegram" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-telegram text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Telegram | Telegram | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-telegram  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Telegram | Reactions</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Telegram | Reactions" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-telegram text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Telegram | Reactions | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-tiktok  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Tiktok | Followers</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Tiktok | Followers" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-tiktok text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Tiktok | Followers | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-tiktok  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Tiktok | Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Tiktok | Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-tiktok text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Tiktok | Views | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-tiktok  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Tiktok | Likes ❤️</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Tiktok | Likes ❤️" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-tiktok text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Tiktok | Likes ❤️ | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-tiktok  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Tiktok | TikTok Live Stream - SV1</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Tiktok | TikTok Live Stream - SV1" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-tiktok text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Tiktok | TikTok Live Stream - SV1 | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-tiktok  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Tiktok | Shares - Comment</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Tiktok | Shares - Comment" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-tiktok text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Tiktok | Shares - Comment | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-spotify  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Spotify | Free Plays</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Spotify | Free Plays" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-spotify text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Spotify | Free Plays | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-spotify  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Spotify | Premium Plays</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Spotify | Premium Plays" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-spotify text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Spotify | Premium Plays | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-spotify  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Spotify | Packages</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Spotify | Packages" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-spotify text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Spotify | Packages | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-brands fa-spotify  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Spotify | Followers</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Spotify | Followers" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-brands fa-spotify text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Spotify | Followers | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                    <tbody className=''>
                        <tr className='bg-light'>
                            <td colSpan={3} className='text-xl font-bold p-3 bg-[#eff2f5] border-b-[1px] temp '>
                                <div className='flex items-center '>
                                    <i className='fa-solid fa-tv  text-[1rem] mr-2 text-[#0c86ef]' style={{ fontSize: 19 }}>
                                    </i>
                                    <div class="flex flex-col font-bold text-lg">
                                        Bilibili | Bilibili Views</div>
                                </div>
                            </td>
                        </tr>
                        {products.map((items, index) => items.category === "Bilibili | Bilibili Views" ? <tr>
                            <td class="ps-10">
                                <div class="flex items-center ml-2">
                                    <div class="flex flex-col">
                                        <div class="flex items-center">
                                            <div class="wrap">
                                                <i class="fa-solid fa-tv text-[#0c86ef]  fs-4"></i>
                                                <span class="font-bold  mr-1"> {items.service}</span>
                                                - {items.name.split("Bilibili | Bilibili Views | ")}
                                            </div>
                                        </div>
                                        {/* <span class="text-muted fs-7">
                                            Min:
                                            <span class="text-gray-700">  {items.min} </span>
                                            - Max:
                                            <span class="text-gray-700"> {items.max}</span>
                                        </span> */}
                                        <span class="mt-1">
                                            {/* <span class={items.service === 1136 ? "badge badge-danger rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Best seller</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>Recommendation</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>7 days Refill</span>
                                            <span class={items.service !== 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>New</span>

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>15 days Refill</span>
                                            <span class={items.service === 1136 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>30 days Refill</span> */}

                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>Instant</span>
                                            <span class={"badge badge-success rounded-pill  mr-1"} style={{ fontSize: 8.8 }}>No refill</span>

                                            {/* <span class={items.service === 1065 ? "badge badge-success rounded-pill  mr-1" : "hidden"} style={{ fontSize: 8.8 }}>No refill</span> */}

                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="font-semibold">{!userInfo ? ` $${items.rate}` : `≈  ${(items.rate)} USD`}</td>
                            <td className={userInfo ? 'px-1 m-0 text-center font-semibold' : 'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Services