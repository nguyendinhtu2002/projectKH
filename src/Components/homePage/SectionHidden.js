import React, { useState } from 'react'
import $ from "jquery";
function SectionHidden() {
    const [check, setCheck] = useState(false)
    $('.faq-question.with-click').click();
    // const styles = { 
    //     transform: `translate(${120}px, ${120}px)` 
    // };
    var circles = document.getElementsByClassName("faq-plus-wrap");
    var circles1 = document.getElementsByClassName("faq-plus-l");

    function test(t) {
        for (var i = 0; i < 2; i++) {
            console.log(t)

        }
        window.requestAnimationFrame(test);

    }
    // test()
    // console.log(test.style.transform)
    // function update(t) {
    //     for (var i = 0; i < circles.length; i++) {

    //         // const count = Math.min(0.1 * elapsed, 180);

    //         var xpos = Math.sin(t / 1000 + 1000 * i) * 50 + 50;
    //         circles[i].style.transform = "translate3d(0px," + 0 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ("+xpos+"deg) skew(0deg, 0deg)";
    //         circles1[i].style.height = ""+xpos+"";

    //     }
    //     window.requestAnimationFrame(update);
    // }
    $('.faq-plus-wrap').on('mouseenter', function () {
        setCheck(true)
    })
    // console.log(check)
    return (
        <div className='section overflow-hidden'>
            <div className='Container'>
                <div className='before-faq'>
                    <h2><span>FAQ</span></h2>
                    <p class="bottom-margin-20">Improved <strong>conversion rates,</strong> included<strong> copy-writer </strong>and <strong>beautiful designs</strong> <br />— <strong>just a few things our clients love!</strong></p>
                </div>
                <div className='faq-div'>
                    <div className='faq-contents'>
                        <div className='faq-wrapper with-click'>
                            <div className='faq-question with-click'>
                                <h3 data-w-id="4d30fb96-a3cd-7d91-77f4-c94600898fa5" className='text-rgb'>What is a “Credit”</h3>
                                <div className={check ? 'faq-plus-wrap test ' : 'faq-plus-wrap'}   >
                                    <div className={check ? "test1 " : "faq-plus-l"}  ></div>
                                    <div className="faq-plus" onClick={() => setCheck(false)} ></div>

                                    {/* <div class="faq-plus mb-2" onClick={()=>setCheck(false)}></div> */}

                                </div>

                            </div>
                            <div className={check ? 'faq-answer ' : 'faq-answer h-0'} >
                                <p className="bottom-margin-20">Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>

                            </div>
                        </div>
                        <div className="faq-wrapper">
                            <div className="faq-question">
                                <h3>What does “Unlimited Generations” mean?</h3>
                                <div className={check ? 'faq-plus-wrap test ' : 'faq-plus-wrap'} >
                                    <div className={check ? "test1 " : "faq-plus-l"} >
                                    </div>
                                    <div className="faq-plus">
                                    </div>
                                </div>
                            </div>
                            <div className={check ? 'faq-answer ' : 'faq-answer h-0'}>
                                <p class="bottom-margin-20">With AdCreative.ai, you can generate thousands of visuals. Select and download only the ones you want to test in your marketing strategy.</p>
                            </div>
                        </div>
                        <div className="faq-wrapper">
                            <div className="faq-question">
                                <h3>What does “Unlimited Generations” mean?</h3>
                                <div className={check ? 'faq-plus-wrap test ' : 'faq-plus-wrap'} >
                                    <div className={check ? "test1 " : "faq-plus-l"} >
                                    </div>
                                    <div className="faq-plus">
                                    </div>
                                </div>
                            </div>
                            <div className={check ? 'faq-answer ' : 'faq-answer h-0'}>
                                <p class="bottom-margin-20">With AdCreative.ai, you can generate thousands of visuals. Select and download only the ones you want to test in your marketing strategy.</p>
                            </div>
                        </div>
                        <div className="faq-wrapper">
                            <div className="faq-question">
                                <h3>What does “Unlimited Generations” mean?</h3>
                                <div className={check ? 'faq-plus-wrap test ' : 'faq-plus-wrap'} >
                                    <div className={check ? "test1 " : "faq-plus-l"} >
                                    </div>
                                    <div className="faq-plus">
                                    </div>
                                </div>
                            </div>
                            <div className={check ? 'faq-answer ' : 'faq-answer h-0'}>
                                <p class="bottom-margin-20">With AdCreative.ai, you can generate thousands of visuals. Select and download only the ones you want to test in your marketing strategy.</p>
                            </div>
                        </div>
                        <div className="faq-wrapper">
                            <div className="faq-question">
                                <h3>What does “Unlimited Generations” mean?</h3>
                                <div className={check ? 'faq-plus-wrap test ' : 'faq-plus-wrap'} >
                                    <div className={check ? "test1 " : "faq-plus-l"} >
                                    </div>
                                    <div className="faq-plus">
                                    </div>
                                </div>
                            </div>
                            <div className={check ? 'faq-answer ' : 'faq-answer h-0'}>
                                <p class="bottom-margin-20">With AdCreative.ai, you can generate thousands of visuals. Select and download only the ones you want to test in your marketing strategy.</p>
                            </div>
                        </div>


                    </div>
                    <div className='lightbox-wrapper'>
                        <a className='lightbox with-faq w-inline-block w-lightbox'>
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video-p-1080.webp" loading="lazy" width="1040" height="585" sizes="(max-width: 479px) 86vw, (max-width: 767px) 76vw, (max-width: 991px) 536.7897338867188px, (max-width: 1919px) 54vw, 1014.0198364257812px" alt="" srcset="https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video-p-500.webp 500w, https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video-p-800.webp 800w, https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video-p-1080.webp 1080w, https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video-p-1600.webp 1600w, https://assets.website-files.com/62d52b6d074c2e318f479724/62ff50c93e23d92aaaac9707_thumbnail-video.webp 1920w" class="image-video"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHidden