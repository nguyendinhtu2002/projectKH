import React from 'react'

function Sectionfeatures() {
    return (
        <div id="howit" className='section features'>
            <div className='Container'>
                <div class="before-heading-text flex justify-center">How it Works
                </div>
                <div class="mb-[1.25rem] flex justify-center">
                    <p class="hero-p">Save thousands to millions of bucks by using my services 
                        for different amazing and great useful admin</p></div>
                <div className='_4-grid-screens'>
                    <div className='screen-feature'>
                        <div className='screen-wrapper'>
                            <img src="https://cdn.my1dg.com/1/media/illustrations/sketchy-1/2.png" loading="lazy" alt="" class="screen-image" />
                        </div>
                        <div className='feature-text-wrapper'>
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">1</span>
                                <div className="fs-5 text-xl font-bold text-black">Sign Up</div>
                                {/* <div>
                                <p class="features-p">First you need have account for login then you can see dashboard. Your info is safe, we not share it to others.</p>

                                </div> */}
                            </div>
                            <p class="features-p">First you need have account for login then you can see dashboard. Your info is safe, we not share it to others.</p>
                        </div>
                    </div>
                    <div className='screen-feature'>
                        <div className='screen-wrapper'>
                            <img src="https://cdn.my1dg.com/1/media/illustrations/sketchy-1/8.png" loading="lazy" alt="" class="screen-image" />
                        </div>
                        <div className='feature-text-wrapper'>
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">2</span>
                                <div className="fs-5 text-xl font-bold text-black">Add funds</div>
                            </div>
                            <p class="features-p">You need deposit fund to your account in deposit iseasy and secure. We have many payment methods for you.</p>
                        </div>
                    </div>
                    <div className='screen-feature'>
                        <div className='screen-wrapper'>
                            <img src="https://cdn.my1dg.com/1/media/illustrations/sketchy-1/2.png" loading="lazy" alt="" class="screen-image" />
                        </div>
                        <div className='feature-text-wrapper'>
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">3</span>
                                <div className="fs-5 text-xl font-bold text-black">Create order</div>
                            </div>
                            <p class="features-p">You have balance in your account, so now you can place orders with services you want. That's easy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionfeatures