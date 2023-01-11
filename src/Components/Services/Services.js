import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProduct } from '../../redux/Actions/productAction';

function Services() {
    const [click, setClick] = useState(false)
    const toggleChecked = () => setClick(value => !value);
    const dispatch = useDispatch();

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
                            <td class="font-semibold">{!userInfo ? ` ${items.rate}` : `≈  ${(items.rate * items.min).toFixed(2)} VND`}</td>
                            <td className={userInfo?'px-1 m-0 text-center font-semibold':'hidden'}>
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
                            <td class="font-semibold">{!userInfo ? ` ${items.rate}` : `≈  ${(items.rate * items.min).toFixed(2)} VND`}</td>
                            <td className={userInfo?'px-1 m-0 text-center font-semibold':'hidden'}>
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
                            <td class="font-semibold">{!userInfo ? ` ${items.rate}` : `≈  ${(items.rate * items.min).toFixed(2)} VND`}</td>
                            <td className={userInfo?'px-1 m-0 text-center font-semibold':'hidden'}>
                                <Link to={`/new?service=${items.service}`} className="btn btn-bg-primary btn-color-white btn-active-color-primary btn-sm px-4">
                                    Order
                                </Link>
                            </td>
                        </tr> : null)}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Services