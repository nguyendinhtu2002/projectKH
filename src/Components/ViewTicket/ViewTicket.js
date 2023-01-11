import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { messagelistDetailMessage } from '../../redux/Actions/reportActions'
import moment from "moment"
import Loading from '../LoadingError/Loading';
const usePathName = () => {
    const location = useLocation();
    return location.pathname;
};

function ViewTicket() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const messageListDetail = useSelector((state) => state.messageListDetail);
    const { messagerDetail } = messageListDetail
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const redirect = usePathName()
    const id = redirect.split('/')[2]

    // console.log(id)
    const format1 = "YYYY-MM-DD HH:mm:ss"
    useEffect(() => {
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`,
        //     },
        // };
        // setLoading(true);
        // await axios.get(`http://localhost:5000/api/report/${id}`, config)
        //     // .then(res => res.json())
        //     .then(data => {
        //         setData(data.data)
        //         setLoading(false);
        //     })
        //     .catch(err => setLoading(false))
        dispatch(messagelistDetailMessage(id))
    }, [dispatch])
    // if (loading) {
    //     console.log(data)
    // }

    return (
        <>
            {loading && <Loading />}
            <div className='card-header'>
                <h3 class="card-title" data-lang="Direct message"> {messagerDetail?.reportOrder[0]?.subject} ({messagerDetail?.reportOrder[0]?.order})</h3>
            </div>
            <div className='card-body py-5'>
                <div className='flex justify-end mb-5'>
                    <div className='flex flex-col items-end '>
                        <div className='flex items-center mb-2'>
                            <div className='mr-3'>

                                <span class="text-muted fs-7 mb-1">{moment(messagerDetail?.createAt).format(format1)}</span>
                                <a href="#" class="text-lg font-semibold text-gray-900 text-hover-primary ml-1">You</a>
                            </div>

                        </div>
                        <div class="p-3 rounded bg-[#f1faff] text-dark font-semibold lg:mx-w[400px] text-end">Order ID: {messagerDetail?.reportOrder[0]?.order} &nbsp;
                            {messagerDetail?.reportOrder[0]?.subject} : {messagerDetail?.reportOrder[0]?.Request}


                        </div>
                    </div>

                </div>

                <div className='flex justify-start mb-5'>
                    <div className='flex flex-col items-start '>
                        <div className='flex items-center mb-2'>
                            <div className='ml-3'>

                                <span class="text-muted fs-7 mb-1">{moment(messagerDetail?.createAt).format(format1)}</span>
                                <a href="#" class="text-lg font-semibold text-gray-900 text-hover-primary ml-1">Admin</a>
                            </div>

                        </div>
                        <div class="p-3 rounded bg-[#f1faff] text-dark font-semibold lg:max-w-[400px]  text-start">
                            {messagerDetail?.reportOrder[0]?.repmessage}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewTicket