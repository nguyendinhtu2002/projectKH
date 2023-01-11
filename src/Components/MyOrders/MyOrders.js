import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from '../ListBox/Select'
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { report } from '../../redux/Actions/reportActions';
import { findByStatus, listMyOrders } from '../../redux/Actions/ordersAction';
import moment from 'moment'
import { Link } from "react-router-dom"

function MyOrders() {
    const dispatch = useDispatch()
    const orderUser = useSelector((state) => state.orderUser)
    const { orders } = orderUser
    const statusOrders = useSelector((state) => state.statusOrders)
    const { status } = statusOrders
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const reportOrder = useSelector((state) => state.reportOrder)
    const { error } = reportOrder
    const [data, setData] = useState([]); // no data yet
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState('')
    const [order, setOrders] = useState(0)
    const [request, setRequest] = useState('Cancel')
    const [message, setMessage] = useState('')
    const [choose, SetChoose] = useState('Order')

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
            if (error === undefined) {
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success("Report thành công", Toastobjects);
                    setMessage('')
                }
            }
            else {
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error("Report thất bại", Toastobjects);
                    setMessage('')
                }
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
                                    <Link to={`/new?service=${item.orderItems[0].service}`} class="text-primary mr-2 font-bold md:text-[16px] sm:text-[16px] text-[16px]" data-lang="Reorder">Reorder</Link>
                                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" >

                                        <Link class="text-danger font-bold md:text-[16px] sm:text-[16px] text-[16px]" data-lang="Report" >Report</Link>
                                    </button>
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
                                                {/* <div className="modal-body relative px-4 py-2 ">
                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Subject</label>
                            <select id="countries" onChange={(e) => { SetChoose(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="Order" defaultValue>Order</option>
                                <option value="Payment">Payment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div> */}
                                                <div className={choose === "Order" ? "modal-body relative px-4 py-2 " : "modal-body relative px-4 py-2 hidden"}>
                                                    <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Order ID</label>
                                                    <input type="text" id="order" value={item.orderItems[0].order} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

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