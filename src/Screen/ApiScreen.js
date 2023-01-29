import React from 'react'
import Section from './Section'
import { Helmet } from "react-helmet";

function ApiScreen() {
  return (
	<> 
	<Helmet>
        <meta charSet="utf-8" />
        <title>Api | AZVIEW SMM Panel - Social Services</title>
        <meta name="description" content="AZVIEW SMM Panel - Social Services. Generating leads with social media marketing" />
      </Helmet>

	    <Section/>

	</>

  )
}

export default ApiScreen