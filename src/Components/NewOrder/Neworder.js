import React from 'react'

function Neworder() {
    return (
        <>
            <div className='card-body'>
                <div className='row'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                        <div className='mb-3'>
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Social media
                            </label>
                            {/* <select onChange={(e) => setSocialMedida(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    redirect === "" ? <option></option> : ""
                                }
                                {
                                    Social.map((items, index) =>
                                        <option key={index} value={items}>{items}</option>
                                    )
                                }
                            </select> */}
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option> : ""
                            </select>
                        </div>
                        <div className='mb-3 lg:col-span-2' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Category
                            </label>
                            {/* <select onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    redirect === "" ? <option></option> : ""
                                }
                                {
                                    Category.map((items, index) =>
                                        <option key={index} value={items}>{items}</option>

                                    )
                                }

                            </select> */}
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option> : ""
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Neworder