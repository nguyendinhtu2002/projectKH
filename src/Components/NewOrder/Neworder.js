import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { listProduct } from '../../redux/Actions/productAction';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { addToCart } from '../../redux/Actions/cartActions';
import { createOrderAPIMe, listMyOrders } from '../../redux/Actions/ordersAction';
import { updateWallet } from '../../redux/Actions/WalletAction';
import { createCashFlow } from '../../redux/Actions/cashAction';
const Social = [
    { name: 'Youtube' }
    // { name: 'Pending' },
    // { name: 'Processing' },
    // { name: 'In progress' },
    // { name: 'Completed' },
    // { name: 'Partial' },
    // { name: 'Canceled' },

]
function Neworder() {
    const location = useLocation();
    const dispatch = useDispatch();
    const redirect = location.search ? Number(location.search.split("=")[1]) : "";

    const [socialMedida, setSocialMedida] = useState("Youtube")
    // const [id, setId] = useState('')
    const [service, setService] = useState(redirect)
    const [category, setCategory] = useState('Increase video views')
    const [link, setLink] = useState("")
    const [quanlity, setQuanlity] = useState(0)
    const [keyword, setKeyWord] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [check, setCheck] = useState(false)
    const [checkLoop, setCheckLoop] = useState(false)
    const toastId = React.useRef(null);
    const productList = useSelector((state) => state.productList)
    const { loading, products } = productList;
    const createWallet = useSelector((state) => state.createWallet);
    const { wallet } = createWallet
    const temp1 = []
    const temp2 = [];
    const temp3 = [];

    const findBySercive = products.find((items) => items.service === redirect)

    if (redirect !== "" && findBySercive != undefined) {

        const getScial = findBySercive?.name.split("|")[0]
        const getCategory = findBySercive?.category.split(`${getScial}|`)[1]

        temp1.push(findBySercive?.platform)
        temp2.push(getCategory)
        temp3.push(findBySercive?.name.split(`${socialMedida} |${getCategory} |`)[1])
    }
    else {
        products.map((items) => {
            if (socialMedida === items.name.split(" | ")[0]) temp2.push(items.category.split(`${socialMedida} | `)[1])
        })
        products.map((items) => {
            if ((items.category.split(`${socialMedida} | `)[1]) === category) temp3.push(items.name.split(`${socialMedida} | ${category} |`)[1])
        })

    }

    const uniqueSet2 = new Set(temp2);
    const Category = [...uniqueSet2];

    const uniqueSet = new Set(temp3);
    const Service = [...uniqueSet];
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };


    const getId1 = products.find((items) => items.name.split(`${socialMedida} | ${category} |`)[1] === service)

    if (redirect === "" && getId1 !== undefined) {
        console.log(getId1.service)
        setService(getId1.service)
    }
    const onSubmit = async () => {
        if (link === "" || quanlity === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Cần điền đủ thông tin!!", Toastobjects);
            }
        }
        else {

            await dispatch(addToCart(service, Number(quanlity), link))
            const items = (JSON.parse(localStorage.getItem('cartItems')))
            if (wallet.balance > Number(quanlity) * (items[0].rate) / 1000) {
                //khách order -> lưu vào databasse -> xử lý gửi cho đối tác -> check trạng thái vsoos view bên đối tác -> update lên database 

                if (quanlity >= 200 && quanlity <= 20000) {
                    await dispatch(createOrderAPIMe({
                        service,
                        link,
                        search: keyword.split('|').toString(),
                        quanlity: Number(quanlity),
                        name: redirect === "" ? (items[0].name.split(`${socialMedida} | ${category} |`)[1]) : Service[0],
                        totalPrice: Number(quanlity) * (items[0].rate) / 1000,
                    }))
                    const order = (JSON.parse(localStorage.getItem('ordersInfo')))
                    if (order[0].order !== undefined) {
                        await dispatch(updateWallet({ amount: -(Number(Number(quanlity) * (items[0].rate) / 1000)).toFixed(2) }))
                        if (!toast.isActive(toastId.current)) {
                            toastId.current = toast.success("Order thành công", Toastobjects);
                        }

                        await dispatch(createCashFlow({
                            order: order[0].order !== undefined ? order[0].order : 0,
                            type: "Add order",
                            spending: Number(quanlity) * (items[0].rate) / 1000,
                            remainingMoney: wallet.balance - Number(quanlity) * (items[0].rate) / 1000
                        })
                        )
                    }
                    else {
                        if (!toast.isActive(toastId.current)) {
                            toastId.current = toast.error("Order không thành công", Toastobjects);
                        }
                    }
                }
                else {
                    if (!toast.isActive(toastId.current)) {
                        toastId.current = toast.error("Số lượng vượt hoặc ít hơn số lượng cho phép", Toastobjects);
                    }
                }


            }
            else {
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error("Không đủ tiền", Toastobjects);
                }
            }
            await dispatch(listMyOrders())

        }

    }
    useEffect(() => {
        // if (userInfo) {
        //     setId(userInfo._id)
        // }

        dispatch(listProduct());
    }, [dispatch]);
    return (
        <>
            <Toast />
            {loading && <Loading />}

            <div className='card-body'>
                <div className='row'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                        <div className='mb-3'>
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Social media
                            </label>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    redirect === "" ? <option></option> : ""
                                }
                                {
                                    Social.map((items, index) =>
                                        <option key={index} value={items.name}>{items.name}</option>
                                    )
                                }
                            </select>

                        </div>
                        <div className='mb-3 lg:col-span-2' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Category
                            </label>
                            <select onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    redirect === "" ? <option></option> : ""
                                }
                                {
                                    Category.map((items, index) =>
                                        <option key={index} value={items}>{items}</option>

                                    )
                                }

                            </select>
                            {/* <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option> : ""
                            </select> */}

                        </div>
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Service
                            </label>
                            <select onChange={(e) => setService(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    redirect === "" ? <option></option> : ""
                                }
                                {
                                    Service.map((items, index) =>
                                        <option key={index} value={items}>{items}</option>

                                    )
                                }

                            </select>
                            {/* <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option> : ""
                            </select> */}

                        </div>
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Link
                            </label>
                            <div className='input-group input-group-solid mb-2'>
                                <input onChange={(e) => setLink(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>


                        </div>
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Quantity
                            </label>
                            <div className='input-group input-group-solid mb-2'>
                                <input onChange={(e) => setQuanlity(e.target.value)} type="text" id="default-input" placeholder="From 500 to 2000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>


                        </div>
                        <div className='mb-3 lg:col-span-3 '>
                            <label class="inline-flex relative items-center cursor-pointer ">
                                <input type="checkbox" value="" class="sr-only peer" onChange={(e) => { setCheck(e.target.checked) }} />
                                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute lg:after:top-[0.15rem] after:top-2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule. Your timezone: +07:00</span>
                            </label>
                        </div>
                        <div className={check ? 'mb-3 lg:col-span-3' : 'hidden'}>

                            <div className="relative">
                                <label data-lang="Choose time">Choose time</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full" />
                            </div>


                        </div>

                        <div className='mb-3 lg:col-span-3 '>
                            <label class="inline-flex relative items-center cursor-pointer ">
                                <input type="checkbox" value="" class="sr-only peer" onChange={(e) => { setCheckLoop(e.target.checked) }} />
                                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 lg:hidden">Loop. Auto Re-order.</span>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 hidden lg:block">Loop. Auto Re-order when this order has been COMPLETED. Carefully when to use this function. Always make sure balance is enough.</span>

                            </label>
                        </div>
                        <div className={checkLoop ? 'mb-3 lg:col-span-3' : 'hidden'}>
                            <div class="flex ">
                                <div class="mb-3 w-full">
                                    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='mb-2 lg:col-span-3' >
                            <button onClick={onSubmit} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                +
                                Submit
                            </button>
                        </div>
                        <div className='mb-2 lg:col-span-3' >
                            <div className=' relative px-4 py-4 mb-4 border-[1px] border-solid border-[#eff2f5] rounded-lg '>
                                <p>✅ Example link : Video Link</p>
                                <p><br /></p>
                                <p>🕓 Start Time :&nbsp;Instant</p>
                                <p>🚀 Speed :&nbsp;50k/day</p>
                                <p>⏳ Retention :&nbsp;2-5 minutes</p>
                                <p>⚖️ Min/Max :&nbsp;1000/10M</p>
                                <p>♻️ Guarantee :&nbsp;30 days Refill</p>
                                <p>🌀 Source :&nbsp;<span >External</span></p>
                                <p>📲 Device : Mobile phone</p>
                                <p>👨‍👩‍👧‍👦 Real user</p>
                                <p>🌎 Country :&nbsp;Global</p>
                                <p><br /></p>
                                <p>⚠️ Note :&nbsp;</p>
                                <p>📌 When the service is busy, the starting speed of the process changes.</p>
                                <p>📌 Do not place the second order on the same link before your order is completed in the system.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Neworder