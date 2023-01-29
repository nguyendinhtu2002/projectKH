import React from 'react'
import Section from './Section'
import { Helmet } from "react-helmet";

function ViewTicketScreen() {
    return (
<>
 	<Helmet>
        <meta charSet="utf-8" />
        <title>Tickets | 1DG SMM Panel - Social Services</title>
        <meta name="description" content="1DG SMM Panel - Social Services. Generating leads with social media marketing" />
      </Helmet>
   <Section />
</>
     
    )
}

export default ViewTicketScreen