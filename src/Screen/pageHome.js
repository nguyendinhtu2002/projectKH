import React from 'react'
import SectionFooter from '../Components/Footer/SectionFooter'
import Header from '../Components/homePage/Header'
import Section from '../Components/homePage/Section'
import SectionDark from '../Components/homePage/SectionDark'
import Sectionfeatures from '../Components/homePage/Sectionfeatures'
import SectionHidden from '../Components/homePage/SectionHidden'
import SectionPrice from '../Components/homePage/SectionPrice'
import SectionSticky from '../Components/homePage/SectionSticky'
import SectionTest from '../Components/homePage/SectionTest'
import { Helmet } from "react-helmet";

function PageHome() {
    return (

        <div className='page-wrapper is-home'>
		<Helmet>
                <meta charSet="utf-8" />
                <title>AZVIEW SMM Panel - Social Services</title>
                <meta name="description" content="AZVIEW SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <div className='main-wrapper overflow-hidden' >
                <Header />
                <Section />
                <SectionDark />
                <Sectionfeatures />
                <SectionSticky />
                <SectionPrice />
                <SectionHidden />
                <SectionTest />
                <SectionFooter />
            </div>
        </div>
    )
}

export default PageHome