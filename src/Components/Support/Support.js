import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMyMessage } from '../../redux/Actions/reportActions'
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
function Support() {

    const dispatch = useDispatch();

    
    const handlerSendReport = () => {
        // const temp = document.getElementById('order').value
        // if (temp === "" && message === "") {
        //     if (!toast.isActive(toastId.current)) {
        //         toastId.current = toast.error("Order or Message not null", Toastobjects);
        //     }
        // }
        // else {
        //     dispatch(report({
        //         reportOrder: {
        //             order: Number(temp),
        //             message,
        //             Request: request
        //         }
        //     }))
        //     if (!toast.isActive(toastId.current)) {
        //         toastId.current = toast.success("Report thành công", Toastobjects);
        //     }

        // }
    }
    useEffect(() => {
        dispatch(listMyMessage())
    }, [dispatch])
    return (
        <>
            
            <div className='card-header'>
                <h3 class="card-title" data-lang="Direct message">Direct message</h3>
            </div>
            <div className='card-body py-5'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                    <div className='lg:grid-cols-1 grid-cols-3 flex'>
                        <div className='symbol symbol-30px symbol-circle mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31.4" fill="currentColor" class="bi bi-facebook text-primary fs-2x" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </div>
                        <div className='m-0'>
                            <span className='font-semibold text-gray-600 block text'>
                                Facebook
                            </span>
                            <span class="font-bold text-gray-800 text-[0.85rem]">https://www.facebook.com/azview.us/</span>
                        </div>
                    </div>
                    <div className='lg:grid-cols-1 grid-cols-2 flex'>
                        <div className='flex items-center mr-10 flex-grow'>
                            <div className='symbol symbol-30px symbol-circle mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31.4" fill="currentColor" class="bi bi-telegram text-primary fs-2x" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                            </div>
                            <div className='m-0'>
                                <span className='font-semibold text-gray-600 block text'>
                                    Telegram
                                </span>
                                <span class="font-bold text-gray-800 text-[1.075rem]">https://t.me/azviewus</span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:grid-cols-1 flex'>
                        <div className='flex items-center mr-10 flex-grow'>
                            <div className='symbol symbol-30px symbol-circle mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31.4" fill="currentColor" class="bi bi-telephone text-danger fs-2x" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div className='m-0'>
                                <span className='font-semibold text-gray-600 block text'>
                                    Phone
                                </span>
                                <span class="font-bold text-gray-800 text-[1.075rem]">098.582.2626</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center flex-wrap gap-2 border-t border-solid border-[#eff2f5]  mt-5 pt-5 '>
                    <p>Support payment : </p>
                    <ul className='list-disc ml-5'>
                        <li> WhatsApp : +84985822626</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Support