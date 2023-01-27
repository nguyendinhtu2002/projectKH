import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
function SectionPrice() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <div id="pri" className='section is-pricing'>
            <div className='Container'>
                <div className='dark-purple-content'>
                    <h2 className='is-white mb-4'>
                        <span className="span-medium-purple is-soft-blue">Azview.us</span>
                        <span className="text-span-5">
                            <br />Cheapest SMM Panel For Resellers
                        </span>
                    </h2>
                    <p class="bottom-margin-20 max-width is-soft-purple">E-commerce stores, startups or marketing agencies with many accounts… Basically anyone <strong>who needs an unfair advantage</strong> thanks to our unique A.I.</p>
                    <div className='_3-grid'>
                        <div className='dark-purole_content'>
                            <div className="purple-icon">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62e665744383130e2f393429_rocket.svg" loading="lazy" alt="" class="image-12 smaller" />
                            </div>
                            <h3 className="is-white margin-bottom-8">Facebook</h3>
                            <p className="paragraph is-soft-purple">Spend your money on Like, share, comment,.., make the most of the money you spent on this service.</p>
                            <div className="">
                                <span class="mb-2 text-primary">from $</span>
                                <span class="fs-3x fw-bolder text-primary"> 0.01</span>
                            </div>
                            <Link to="/services" className='join-wrapper link-block is-white w-inline-block'>
                                <div className="_18-text">Service List</div>
                                <div className="html-embed-7 w-embed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4.619 7.862">
                                        <path id="Path_25441" data-name="Path 25441" d="M105.972,3.624l-3.5-3.5a.431.431,0,0,0-.608,0l-.258.258a.431.431,0,0,0,0,.608l2.938,2.938L101.6,6.871a.431.431,0,0,0,0,.608l.258.258a.431.431,0,0,0,.608,0l3.5-3.5a.434.434,0,0,0,0-.61Z" transform="translate(-101.478)" fill="currentColor"></path>
                                    </svg></div>
                            </Link>

                        </div>
                        <div className='dark-purole_content'>
                            <div className="purple-icon">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62e665744383130e2f393429_rocket.svg" loading="lazy" alt="" class="image-12 smaller" />
                            </div>
                            <h3 className="is-white margin-bottom-8">Youtube</h3>
                            <p className="paragraph is-soft-purple">Spend your money on Views, subscribes, likes, ... make the most of the money you spent on this service.</p>
                            <div className="">
                                <span class="mb-2 text-primary">from $</span>
                                <span class="fs-3x fw-bolder text-primary">  0.25</span>
                            </div>
                            <Link to="/services" className='join-wrapper link-block is-white w-inline-block'>
                                <div className="_18-text">Service List</div>
                                <div className="html-embed-7 w-embed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4.619 7.862">
                                        <path id="Path_25441" data-name="Path 25441" d="M105.972,3.624l-3.5-3.5a.431.431,0,0,0-.608,0l-.258.258a.431.431,0,0,0,0,.608l2.938,2.938L101.6,6.871a.431.431,0,0,0,0,.608l.258.258a.431.431,0,0,0,.608,0l3.5-3.5a.434.434,0,0,0,0-.61Z" transform="translate(-101.478)" fill="currentColor"></path>
                                    </svg></div>
                            </Link>

                        </div>
                        <div className='dark-purole_content'>
                            <div className="purple-icon">
                                <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62e665744383130e2f393429_rocket.svg" loading="lazy" alt="" class="image-12 smaller" />
                            </div>
                            <h3 className="is-white margin-bottom-8">Twitter</h3>
                            <p className="paragraph is-soft-purple">Spend your money on Follow, share, ... make the most of the money you spent on this service.</p>
                            <div className="">
                                <span class="mb-2 text-primary">from $</span>
                                <span class="fs-3x fw-bolder text-primary">  0.25</span>
                            </div>
                            <Link to="/services" className='join-wrapper link-block is-white w-inline-block'>
                                <div className="_18-text">Service List</div>
                                <div className="html-embed-7 w-embed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4.619 7.862">
                                        <path id="Path_25441" data-name="Path 25441" d="M105.972,3.624l-3.5-3.5a.431.431,0,0,0-.608,0l-.258.258a.431.431,0,0,0,0,.608l2.938,2.938L101.6,6.871a.431.431,0,0,0,0,.608l.258.258a.431.431,0,0,0,.608,0l3.5-3.5a.434.434,0,0,0,0-.61Z" transform="translate(-101.478)" fill="currentColor"></path>
                                    </svg></div>
                            </Link>

                        </div>
                    </div>
                    <div className='button-and-text-absolute-bottom'>
                        <a data-ps="target" href="https://app.adcreative.ai/Identity/Account/Register" target="_blank" class="main-button white-purple-h w-inline-block">
                            <div className="text-block ml-auto mr-auto">
                                {!userInfo ? <Link to="/register">
                                    Generate Account AZ
                                </Link> :
                                    <Link to="/servicess" className=''>
                                        Order Service Now!
                                    </Link>
                                }
                            </div>
                            <div class="purple-logo-small w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.229 23.228">
                                    <g id="layers" transform="translate(0 -0.009)">
                                        <g id="Group_11749" data-name="Group 11749" transform="translate(0 10.005)">
                                            <g id="Group_11748" data-name="Group 11748" transform="translate(0)">
                                                <path id="Path_25232" data-name="Path 25232" d="M22.864,206.585a.813.813,0,0,0-.073-.043l-1.648-.888L12,210.494a.829.829,0,0,1-.776,0l-9.141-4.84-1.648.888a.821.821,0,0,0-.34,1.11.834.834,0,0,0,.043.073L11.614,213.8l11.475-6.075A.821.821,0,0,0,22.864,206.585Z" transform="translate(0 -205.654)" fill="currentColor"></path>
                                            </g>
                                        </g>
                                        <g id="Group_11751" data-name="Group 11751" transform="translate(0 14.982)">
                                            <g id="Group_11750" data-name="Group 11750">
                                                <path id="Path_25233" data-name="Path 25233" d="M23.142,309.278a.83.83,0,0,0-.336-.336l-1.648-.888-9.141,4.84a.829.829,0,0,1-.776,0L2.1,308.054l-1.648.888a.83.83,0,0,0,0,1.46l10.785,5.807a.83.83,0,0,0,.786,0L22.806,310.4A.83.83,0,0,0,23.142,309.278Z" transform="translate(-0.014 -308.054)" fill="currentColor"></path>
                                            </g>
                                        </g>
                                        <g id="Group_11753" data-name="Group 11753" transform="translate(0 0.009)">
                                            <g id="Group_11752" data-name="Group 11752" transform="translate(0 0)">
                                                <path id="Path_25234" data-name="Path 25234" d="M22.864,5.958a.822.822,0,0,0-.073-.043L12.007.108a.829.829,0,0,0-.786,0L.436,5.915A.821.821,0,0,0,.139,7.1l11.475,6.075L23.089,7.1A.821.821,0,0,0,22.864,5.958Z" transform="translate(0 -0.009)" fill="currentColor"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </a>
                        {/* <p class="top-margin-30 is-white">
                            Try 50% free for 3 days.
                            <span class="">
                                <strong> Cancel Anytime</strong>
                            </span>
                        </p> */}
                    </div>
                </div>
            </div>
            <div class="pink-bg-bottom-50"></div>
        </div>
    )
}

export default SectionPrice