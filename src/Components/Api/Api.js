import React from 'react'
import { Link } from "react-router-dom"
function Api() {

    return (
        <div className='card-body'>
            <div className='table-responsive mb-5'>
                <table className='table align-middle table-row-bordered table-rounded border-tb rounded-[.65rem] gy-2 gs-5'>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-2 px-6 w-[25%]">
                                API URL
                            </td>
                            <td className="py-2 px-6 w-[70%] font-semibold">
                                https://api.azview.us/api/v2
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td className="py-2 px-6">
                                API Key
                            </td>
                            <td className="py-2 px-6  font-semibold">
                                Get <Link to="/settings" className='text-[#009ef7]'>
                                    here
                                </Link>
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800">

                            <td className="py-2 px-6 ">
                                HTTP Method
                            </td>
                            <td className="py-2 px-6  font-semibold">
                                POST
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800">

                            <td className="py-2 px-6">
                                Content-Type
                            </td>
                            <td className="py-2 px-6  font-semibold">
                                application/json
                            </td>

                        </tr>
                        <tr className="bg-white  dark:bg-gray-800">

                            <td className="py-2 px-6">
                                Response
                            </td>
                            <td className="py-2 px-6 font-semibold">
                                JSON
                            </td>

                        </tr>
                    </tbody>
                </table>
                <ul class="nav nav-tabs flex  flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                    role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-home3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                            aria-selected="true">Services</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-profile3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                            aria-controls="tabs-profile3" aria-selected="false">Add</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                            aria-controls="tabs-messages3" aria-selected="false">Status</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages4" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages4" role="tab"
                            aria-controls="tabs-messages4" aria-selected="false">Multi status</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages5" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages5" role="tab"
                            aria-controls="tabs-messages5" aria-selected="false">Balance</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages6" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages6" role="tab"
                            aria-controls="tabs-messages6" aria-selected="false">PHP Code</a>
                    </li>
                </ul>

                <div class="tab-content" id="tabs-tabContent3">
                    <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                        <table className='table align-middle table-row-bordered table-rounded border-tb border rounded gy-2 gs-5'>
                            <tbody><tr class="bg-light">
                                <td class="font-bold" data-lang="Parameters">Parameters</td>
                                <td class="font-bold" data-lang="Description">Description</td>
                            </tr>
                                <tr>
                                    <td>key</td>
                                    <td>API Key	</td>
                                </tr>
                                <tr>
                                    <td>action</td>
                                    <td>services</td>
                                </tr>
                            </tbody>
                        </table>
                        <h6 data-lang="Example response">Example response</h6>
                        <div className='bg-light p-3'>
                            <pre className='bg-[#f5f8fa] text-[.875em]'>{`{
    "123": {
        "charge": "0.27819",
        "start_count": "3572",
        "status": "Partial",
        "remains": "157"
    },
    "456": {
        "error": "Incorrect order ID"
    },
    "789": {
        "charge": "1.44219",
        "start_count": "234",
        "status": "In progress",
        "remains": "10"
    }
}`}</pre>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <table className='table align-middle table-row-bordered table-rounded border-tb border rounded gy-2 gs-5'>
                            <tbody><tr class="bg-light">
                                <td class="font-bold" data-lang="Parameters">Parameters</td>
                                <td class="font-bold" data-lang="Description">Description</td>
                            </tr>
                                <tr>
                                    <td>key</td>
                                    <td>API Key	</td>
                                </tr>
                                <tr>
                                    <td>action</td>
                                    <td>add</td>
                                </tr>
                                <tr>
                                    <td>service</td>
                                    <td>Service ID</td>
                                </tr>
                                <tr>
                                    <td>link</td>
                                    <td>Link</td>
                                </tr>
                                <tr>
                                    <td>quantity</td>
                                    <td>Needed quantity</td>
                                </tr>
                            </tbody>
                        </table>
                        <h6 data-lang="Example response">Example response</h6>
                        <div className='bg-light p-3'>
                            <pre className='bg-[#f5f8fa] text-[.875em]'>{`{
    "order": 99999
}`}</pre>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <table className='table align-middle table-row-bordered table-rounded border-tb border rounded gy-2 gs-5'>
                            <tbody>
                                <tr class="bg-light">
                                    <td class="font-bold" data-lang="Parameters">Parameters</td>
                                    <td class="font-bold" data-lang="Description">Description</td>
                                </tr>
                                <tr>
                                    <td>key</td>
                                    <td>API Key	</td>
                                </tr>
                                <tr>
                                    <td>action</td>
                                    <td>status</td>
                                </tr>
                                <tr>
                                    <td>order</td>
                                    <td>Order ID</td>
                                </tr>

                            </tbody>
                        </table>
                        <h6 data-lang="Example response">Example response</h6>
                        <div className='bg-light p-3'>
                            <pre className='bg-[#f5f8fa] text-[.875em]'>{`{
    "charge": "2.5",
    "start_count": "168",
    "status": "Success",
    "remains": "-2"
}`}</pre>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-messages4" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <table className='table align-middle table-row-bordered table-rounded border-tb border rounded gy-2 gs-5'>
                            <tbody>
                                <tr class="bg-light">
                                    <td class="font-bold" data-lang="Parameters">Parameters</td>
                                    <td class="font-bold" data-lang="Description">Description</td>
                                </tr>
                                <tr>
                                    <td>key</td>
                                    <td>API Key	</td>
                                </tr>
                                <tr>
                                    <td>action</td>
                                    <td>status</td>
                                </tr>
                                <tr>
                                    <td>order</td>
                                    <td>Order IDs separated by comma (E.g: 123,456,789)</td>
                                </tr>

                            </tbody>
                        </table>
                        <h6 data-lang="Example response">Example response</h6>
                        <div className='bg-light p-3'>
                            <pre className='bg-[#f5f8fa] text-[.875em]'>{`{
    "123": {
        "charge": "0.27819",
        "start_count": "3572",
        "status": "Partial",
        "remains": "157"
    },
    "456": {
        "error": "Incorrect order ID"
    },
    "789": {
        "charge": "1.44219",
        "start_count": "234",
        "status": "In progress",
        "remains": "10"
    }
}`}</pre>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-messages5" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <table className='table align-middle table-row-bordered table-rounded border-tb border rounded gy-2 gs-5'>
                            <tbody>
                                <tr class="bg-light">
                                    <td class="font-bold" data-lang="Parameters">Parameters</td>
                                    <td class="font-bold" data-lang="Description">Description</td>
                                </tr>
                                <tr>
                                    <td>key</td>
                                    <td>API Key	</td>
                                </tr>
                                <tr>
                                    <td>action</td>
                                    <td>balance</td>
                                </tr>


                            </tbody>
                        </table>
                        <div className='bg-light p-3'>
                            <pre className='bg-[#f5f8fa] text-[.875em]'>{`{
      "balance": "68.6868",
      "currency": "USD"
}`}</pre>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-messages6" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                        <Link to="/code.txt" type="button" className="text-white bg-[#0095e8]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className='inline-block pr-2 w-[1.5rem] h-4' preserveAspectRatio="xMidYMid meet" viewBox="0 0 1856 1408"><path fill="currentColor" d="m585 1143l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L192 704l393 393q10 10 10 23t-10 23zM1176 76L803 1367q-4 13-15.5 19.5T764 1389l-62-17q-13-4-19.5-15.5T680 1332L1053 41q4-13 15.5-19.5T1092 19l62 17q13 4 19.5 15.5T1176 76zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393l-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" /></svg>
                            Example PHP Code
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Api