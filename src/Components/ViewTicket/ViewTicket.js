import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { messagelistDetailMessage } from '../../redux/Actions/reportActions'

function ViewTicket() {
    const dispatch = useDispatch();
    const location = useLocation();

    const messageListDetail = useSelector((state) => state.messageListDetail);
    const {messagerDetail} = messageListDetail
    console.log(messagerDetail[0])
    const redirect = location.search ? Number(location.search.split("=")[1]) : "";

    useEffect(() => {
        dispatch((messagelistDetailMessage(redirect)))

    }, [dispatch])
    return (
        <>

            <div className='card-header'>
                <h3 class="card-title" data-lang="Direct message">Order ({messagerDetail?.order})</h3>
            </div>
            <div className='card-body py-5'>
                <div className='flex justify-end mb-5'>
                    <div className='flex flex-col items-end '>
                        <div className='flex items-center mb-2'>
                            <div className='mr-3'>

                                <span class="text-muted fs-7 mb-1">2022-10-19 11:06:36</span>
                                <a href="#" class="text-lg font-semibold text-gray-900 text-hover-primary ml-1">You</a>
                            </div>

                        </div>
                        <div class="p-3 rounded bg-[#f1faff] text-dark font-semibold lg:mx-w[400px] text-end">Order ID: 6832021
                            Request: Cancel

                            Cancel
                        </div>
                    </div>

                </div>

                <div className='flex justify-start mb-5'>
                    <div className='flex flex-col items-start '>
                        <div className='flex items-center mb-2'>
                            <div className='ml-3'>

                                <span class="text-muted fs-7 mb-1">2022-10-19 11:06:36</span>
                                <a href="#" class="text-lg font-semibold text-gray-900 text-hover-primary ml-1">Admin</a>
                            </div>

                        </div>
                        <div class="p-3 rounded bg-[#f1faff] text-dark font-semibold lg:max-w-[400px]  text-start">
                            "Chúng tôi sẻ kiểm tra và xử lý sớm đơn hàng của bạn. Nếu bạn cần hỗ trợ gì hãy nhắn lại chúng tôi sẻ xử lý giúp bạn . Thanks very much ! 1DG support team ."
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewTicket