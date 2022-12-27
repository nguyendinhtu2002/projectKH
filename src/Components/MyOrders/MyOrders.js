import React from 'react'
import Select from '../ListBox/Select'

function MyOrders() {
    return (
        <div className='card-body'>
            <Select />
            <div className='table-responsive'>
                <div className='table table-striped table-hover table-row-bordered table-row-gray-300 align-middle gs-2 gy-2'>
                    <tbody>
                        <tr className='bg-lighten'>
                            <td>
                                <p class="m-0 font-bolder">ID: 7608722</p>
                                <p class="m-0 font-bolder text-primary"><span data-lang="status::In progress">In progress</span> </p>
                                <p class="m-0 text-[0.75rem] text-gray-600">2022-12-20 19:03:13</p>
                                <p class="m-0 text-[0.75rem] text-gray-600"> 2022-12-27 15:48:24</p>
                            </td>
                            <td>
                                <div>
                                    <p class="m-0 text-gray-600 wrap"><i class="fa-brands fa-tiktok"></i> <span class="text-gray-800 font-bold">1112</span> | Tiktok Followers | VietNam | Speed 500-1000/day</p>
                                    <p className='m-0'>
                                        <span class="badge badge-success text-pill rounded-pill mr-1" data-lang="label::No refill">No refill</span>
                                    </p>
                                    <p class="m-0 wrap">https://www.tiktok.com/@daudau02042020?_t=8YKoLcfH7gn&amp;_r=1 </p>
                                </div>
                                <div class="float-right">
                                    <a target="_blank" href="/new?service=1112" class="text-primary mr-2 font-bold" data-lang="Reorder">Reorder</a>
                                    <a class="text-danger font-bold" data-lang="Report">Report</a>
                                </div>
                            </td>
                            <td>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Charge</span>
                                    :
                                    <a href="/cashflow?id=7608722"><span class="text-primary"> $1.4</span></a>
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Quantity</span>
                                    :  1000
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Start count</span>
                                    : 96
                                </p>
                                <p className='m-0 font-bold'>
                                    <span class="text-gray-600" data-lang="Charge">Remains</span>
                                    : 0
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    )
}

export default MyOrders