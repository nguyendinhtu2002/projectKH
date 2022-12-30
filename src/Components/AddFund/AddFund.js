import React from 'react'
import CountUp from 'react-countup';

function AddFund() {
    return (
        <>
            <div className='card-body pb-0'>
                <div className='flex flex-wrap sm:flex-nowrap'>
                    <div className='mr-7 mb-4'>
                        <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img src="https://cdn.my1dg.com/3/media/avatars/300-3.jpg" alt="image" />
                            <div class="absolute translate-middle bottom-0 left-full mb-6 bg-success rounded-[50%] border-solid border-[4px]  border-white h-[20px] w-[20px]"></div>
                        </div>

                    </div>
                    <div className='flex-grow'>
                        <div className='flex justify-between items-start flex-wrap mb-2'>
                            <div className='flex flex-col'>
                                <div className='flex items-center mb-2'>
                                    <span className='text-gray-900 text-[1.5rem] font-bold mr-1'>
                                        nguyendinhtu1
                                    </span>
                                    <div className='grid gap-2'>
                                        <button type="button" class="py-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <span class="bg-[#50cd89] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">NEWBIE</span>
                                        </button>
                                    </div>
                                    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                                        id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog relative w-auto pointer-events-none">
                                            <div
                                                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                <div
                                                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Member Level</h5>
                                                    <button type="button"
                                                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body relative p-4">
                                                    <table className='table table-hover table-striped rounded-[0.65rem] align-middle gy-3 gs-5 mb-0'>
                                                        <thead>
                                                            <tr class="">
                                                                <td></td>
                                                                <th class="text-center" data-lang="Total deposits">Total deposits</th>
                                                                <th class="text-center" data-lang="Bonus Deposit">% Bonus Deposit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th class="">NEWBIE</th>
                                                                <td class="text-center text-primary font-bold">&gt;= $0</td>
                                                                <td class="text-center text-warning font-bold">0%</td>
                                                            </tr><tr>
                                                                <th class="">JUNIOR</th>
                                                                <td class="text-center text-primary font-bold">&gt;= $1000</td>
                                                                <td class="text-center text-warning font-bold">2%</td>
                                                            </tr><tr>
                                                                <th class="">ELITE</th>
                                                                <td class="text-center text-primary font-bold">&gt;= $2500</td>
                                                                <td class="text-center text-warning font-bold">3%</td>
                                                            </tr><tr>
                                                                <th class="">FREQUENT</th>
                                                                <td class="text-center text-primary font-bold">&gt;= $5000</td>
                                                                <td class="text-center text-warning font-bold">4%</td>
                                                            </tr><tr>
                                                                <th class="">VIP</th>
                                                                <td class="text-center text-primary font-bold">&gt;= $15000</td>
                                                                <td class="text-center text-warning font-bold">5%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-wrap font-semibold text-[0.8rem]'>
                                    <a className='flex items-center text-[#3F4254] text-hover-primary mb-2'>
                                        <span class="svg-icon svg-icon-4 mr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor"></path>
                                                <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        nguyentu@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between items-center'>
                            <div className='flex flex-row flex-grow pr-8'>
                                <div className='flex flex-wrap'>
                                    <div className='border border-gray-300 border-dashed rounded-[0.65rem] min-w-[125px] py-3 px-4 mr-6 mb-3'>
                                        <div className='flex items-center'>
                                            <span class="svg-icon svg-icon-3 svg-icon-success mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <div class="text-xl font-semibold text-[#50cd89] " >${<CountUp start={0} delay={1} end={100} />}</div>
                                        </div>
                                        <div class="font-medium text-base text-gray-700">Deposit</div>
                                    </div>

                                    <div className='border border-gray-300 border-dashed rounded-[0.65rem] min-w-[125px] py-3 px-4 mr-6 mb-3'>
                                        <div className='flex items-center'>
                                            <span class="svg-icon svg-icon-3 svg-icon-warning mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <div class="text-xl font-semibold text-[#ffc700] " >${<CountUp start={0} delay={1} end={100} />}</div>
                                        </div>
                                        <div class="font-medium text-base text-gray-700">Bonus</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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

                </ul>
            </div>
         

        </>
    )
}

export default AddFund