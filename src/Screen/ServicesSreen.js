import React from 'react'
import Section from './Section'
import SectionV2 from './SectionV2'
import { Helmet } from "react-helmet";

function ServicesSreen() {
  return (
    <>
		<Helmet>
                <meta charSet="utf-8" />
                <title>Services | AZVIEW SMM Panel - Social Services</title>
                <meta name="description" content="AZVIEW SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
        <Section/>
    </>
  )
}

export default ServicesSreen