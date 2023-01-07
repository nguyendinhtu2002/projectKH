import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from '../ListBox/Select'
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { report } from '../../redux/Actions/reportActions';
import { findByStatus, listMyOrders } from '../../redux/Actions/ordersAction';
import moment from 'moment'
import {Link} from "react-router-dom"

function MyOrders() {
    const dispatch = useDispatch()
    const orderUser = useSelector((state) => state.orderUser)
    const { orders } = orderUser
    const statusOrders = useSelector((state) => state.statusOrders)
    const { status } = statusOrders
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [data, setData] = useState([]); // no data yet
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState('')
    const [order, setOrders] = useState(0)
    const [request, setRequest] = useState('Cancel')
    const [message, setMessage] = useState('')
    const [Status, setStatus] = useState('')
    const toastId = React.useRef(null);
    const format1 = "YYYY-MM-DD HH:mm:ss"
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    // function setTimeEnd(timeEnd) {
    //     const time = new Date(timeEnd)
    //     // console.log(moment(time).daysInMonth())
    //     let day = moment(time).daysInMonth();
    //     if (moment(time).daysInMonth() == 31 && (moment(time).get('month') + 1 == 1 || moment(time).get('month') + 1 == 3 || moment(time).get('month') + 1 == 5 || moment(time).get('month') + 1 == 7 || moment(time).get('month') + 1 == 8 || moment(time).get('month') + 1 == 10 || moment(time).get('month') + 1 == 12)) {
    //         day = 1;
    //     }

    // }
    const handlerSendReport = () => {
        const temp = document.getElementById('order').value


        if (message === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Message not null", Toastobjects);
            }
        }
        else {
            dispatch(report({
                reportOrder: {
                    order: Number(temp),
                    message,
                    Request: request
                }
            }))
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Report thành công", Toastobjects);
                setMessage('')
            }
        }

    }
    const handelFindOrder = () => {
        dispatch(findByStatus(Status))
    }
    useEffect(() => {
        setIsLoading(true);

        dispatch(listMyOrders())
        // axios.get(`https://up-views.herokuapp.com/api/orders/${userInfo._id}/getByUser`, config)
        //     .then(data => {
        //         setData(data.data); // update state with response

        //         data.data.map((items) => items.orderStatus!=="Completed" && items.orderStatus==="Cancel" ? dispatch(listStatus(items._id)) : null)

        //     })
        //     .catch(error => {
        //         setError(error);
        //     })
        //     .finally(() => setIsLoading(false)); // complete loading success/fail
    }, [])
    return (
        <div className='card-body'>
            <Select />
            <div className='table-responsive'>
                <table className='table table-striped table-hover table-row-bordered table-row-gray-300 align-middle gs-2 gy-2'>
                    <tbody>
                        {orders?.map((item, index) => item.orderItems[0].order !== 0 ? (<tr className='bg-lighten '>
                            <td className='w-[13%]'>
                                <p class="m-0 font-bold text-[#181C32]">ID: {item.orderItems[0].order}</p>
                                <p class="m-0 font-bold text-primary"><span data-lang="status::In progress">{item.orderStatus}</span> </p>
                                <p class="m-0 text-[0.75rem] text-gray-600">{moment(item.createdAt).format(format1)}</p>
                                <p class="m-0 text-[0.75rem] text-gray-600"> {moment(item.createdAt).format(format1)}</p>
                            </td>
                            <td>
                                <div>
                                    <p class="m-0 text-gray-600 wrap"><i class="fa-brands fa-tiktok"></i> <span class="text-gray-800 font-bold">{item.orderItems[0].service}</span> | Tiktok Followers | VietNam | Speed 500-1000/day</p>
                                    <p className='m-0'>
                                        <span class="badge badge-success text-pill rounded-pill mr-1" data-lang="label::No refill">No refill</span>
                                    </p>
                                    <p class="m-0 wrap">{item.orderItems[0].link} </p>
                                </div>
                                <div class="float-right">
                                    <Link  href="/new?service=1112" class="text-primary mr-2 font-bold md:text-[16px] sm:text-[16px] text-[16px]" data-lang="Reorder">Reorder</Link>
                                    <Link class="text-danger font-bold md:text-[16px] sm:text-[16px] text-[16px]" data-lang="Report">Report</Link>
                                </div>
                            </td>
                            <td className='w-[13%]'>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Charge</span>
                                    :
                                    <Link href="/cashflow?id=7608722"><span class="text-primary"> ${item.charge}</span></Link>
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Quantity</span>
                                    :  {item.orderItems[0].quanlity}
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Start count</span>
                                    : {item.start_count}
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Remains</span>
                                    : {item.remains}
                                </p>
                            </td>
                        </tr>) : null
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrders