import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Neworder() {
    const [startDate, setStartDate] = useState(new Date());
    const [check, setCheck] = useState(false)
    const [checkLoop, setCheckLoop] = useState(false)

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
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Service
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
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Link
                            </label>
                            <div className='input-group input-group-solid mb-2'>
                                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>


                        </div>
                        <div className='mb-3 lg:col-span-3 ' >
                            <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                                Quantity
                            </label>
                            <div className='input-group input-group-solid mb-2'>
                                <input type="text" id="default-input" placeholder="From 500 to 2000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>


                        </div>
                        <div className='mb-3 lg:col-span-3 '>
                            <label class="inline-flex relative items-center cursor-pointer ">
                                <input type="checkbox" value="" class="sr-only peer" onChange={(e) => { setCheck(e.target.checked) }} />
                                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Loop. Auto Re-order when this order has been COMPLETED. Carefully when to use this function. Always make sure balance is enough.</span>
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
                            <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
                                <p><br/></p>
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