import React from 'react'
import { Link } from 'react-router-dom'

function SectionFooter() {
    return (
        <div className='section is-footer'>
            <div className='Container'>
                <div className='content-narrow'>
                    <div className='footer-content'>
                        <div className='footer-left'>
                            <div>
                                <img src="https://lh3.googleusercontent.com/pw/AL9nZEVrckDMTisn5ajw5Al7lamh-eYQgFy8L9BwN-sczLErlyBGyuZmdfKK7mJ2Ow78EbIUP7xwAPGlWZ1HPQ_l4Iqfum2t7U_SrI9F-I9O6bLX_8TsOO0iM_YJDtZEFyfQMsUXDKti-OQn6ISqWkCkpuc=w703-h434-no?authuser=0" loading="lazy" alt="AdCreative AI Logo" class="footer-lofo inline" />
                                <p class="is-soft-purple bottom-margin-20">Made with ♥ in AZO!</p>
                                <p class="is-soft-purple bottom-margin-20">2022 AzoView.us | All rights reserved.</p>
                                <p class="is-soft-purple bottom-margin-20">
                                    <strong>Need help? </strong>
                                    Reach us at:
                                    <strong> contact@azview.us</strong>
                                </p>
                            </div>
                        </div>
                        <div className='footer-right'>
                            <div className='footer-column'>
                                <p className='is-soft-purple bottom-margin-20'>
                                    <strong>PAGES</strong>
                                </p>
                                <Link href="/" aria-current="page" class="footer-link is-soft-purple bottom-margin-20 w--current">Home Page</Link>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">How it works</Link>
                                <Link href="/generate-creatives" class="footer-link is-soft-purple bottom-margin-20">Achievements</Link>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">Pricing</Link>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">Services</Link>
                            </div>
                            <div className='footer-column'>
                                <p class="is-soft-purple bottom-margin-20"><strong>AZVIEW.US</strong></p>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">Terms and Conditions</Link>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">Privacy Policy</Link>
                                <Link href="#" class="footer-link is-soft-purple bottom-margin-20">Affiliate</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd9d0fe36ee00a5918e_product-hunt-2.svg" loading="lazy" alt="" class="footer-image-absolute" />
            <div className='footer-bottom-item'>
                <div className='footer-social-media'>
                    <p class="paragraph-4">Official Channels<span class="gradient-span"><strong></strong></span></p>

                    <div class="verticle-line"></div>
                    <div class="social-media-links">
                        <a href="https://www.linkedin.com/company/adcreative-ai/" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd9920df357cbf39937_footer-linkedin.svg" loading="lazy" alt="" height="Auto" />
                        </a>
                        <a href="https://twitter.com/AdCreativeai" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd848e9482d1eca3d67_footer-twitter.svg" loading="lazy" alt="Twitter Logo" />
                        </a>
                        <a href="https://www.youtube.com/c/AdCreativeAI" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd985a5c0d6789c7245_twitter-foote.svg" loading="lazy" width="Auto" alt="YouTube Logo" />
                        </a>
                        <a href="https://instagram.com/adcreative.ai" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd96aace73d5bd069f5_insta-footer.svg" loading="lazy" alt="Insta Logo" />
                        </a>
                        <a href="https://www.pinterest.fr/adcreativeaiofficial/" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd96aace73279d069f4_pinterest-footer.svg" loading="lazy" alt="Pinterest Logo" />
                        </a>
                        <a href="https://t.me/+uWA-KJ9fhp85MDU0" target="_blank" class="link-s w-inline-block">
                            <img src="https://assets.website-files.com/62d52b6d074c2e318f479724/62dd6dd932dfae3c9ae41bbb_telegram-footer.svg" loading="lazy" alt="Telegram Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFooter