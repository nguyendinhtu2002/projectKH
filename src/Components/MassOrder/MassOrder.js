import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function MassOrder() {
    const [check, setCheck] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='card-body grid grid-cols-2 gap-2'>
            <div className='mb-3 col-span-2'>
                <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block after:content-["*"] after:relative after:font-[inherit after:text-[#f1416c] after:pl-[0.25rem] after:font-bold	 '>
                    One order per line in format
                </label>
                <textarea id="message" rows="15" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="service_id | link | quantity
service_id | link | quantity | suggest video list
service_id | link | quantity | keyword search
service_id | link | quantity | suggest video list | keyword search (Mix views)"></textarea>

            </div>
            <div className='mb-3 col-span-2'>
                <div className='mb-3 lg:col-span-2 '>
                    <label class="inline-flex relative items-center cursor-pointer ">
                        <input type="checkbox" value="" class="sr-only peer" onChange={(e) => { setCheck(e.target.checked) }} />
                        <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule. Your timezone: +07:00</span>
                    </label>
                </div>
                <div className={check ? 'mb-3 lg:col-span-2' : 'hidden'}>

                    <div className="relative">
                        <label data-lang="Choose time">Choose time</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full" />
                    </div>


                </div>

            </div>
            <div className='mb-2 lg:col-span-3' >
                <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                    Submit
                </button>
            </div>
        </div>
    )
}

export default MassOrder