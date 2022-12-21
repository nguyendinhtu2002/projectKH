import React, { useEffect, useRef, useState } from 'react'

function Services() {
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
    )
}

export default Services