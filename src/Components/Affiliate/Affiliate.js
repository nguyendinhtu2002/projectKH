import React from 'react'

function Affiliate() {
    return (
        <>
            <div className='col-lg-12'>
                <div className=' mb-5'>
                    <div className='card-body p-0'>
                        <div className='table-responsive '>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Referral link
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Commission rate
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Minimum withdraw
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Minimum convert

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            https://1dg.me/ref/nguyendinhtu1
                                        </th>
                                        <td className="py-4 px-6">
                                            2%
                                        </td>
                                        <td className="py-4 px-6">
                                            $ 50
                                        </td>
                                        <td className="py-4 px-6">
                                            $ 5

                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className=' mb-5'>
                    <div className='card-body p-0'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Total Earnings
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Unpaid
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Paid
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        $ 0
                                    </th>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='card-body'>

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className=" text-gray-700 bg-gray-50 dark:text-gray-400">
                                <tr>
                                    <th colSpan={5} className="py-3 px-6 ">
                                        <div className='flex items-center '>
                                            <h4 className='font-bold text-base'>Request History</h4>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=' bg-gray-50 dark:bg-gray-700'>
                                    <th scope="col" className="py-3 px-6">
                                        Created
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Type
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Amount
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Details
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>



                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {/* <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        $ 0
                                    </th>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td> */}

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className='mb-5'>
                    <div className='card-body p-0'>
                        <div className='card-body p-0'>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Refer
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Earnings
                                        </th>
                                        


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           
                                        </th>
                                        <td className="py-4 px-6">
                                            
                                        </td>
                                       

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Affiliate