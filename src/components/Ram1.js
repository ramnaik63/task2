import React from 'react'
import styledComponents from 'styled-components'

function Ram1({backgroundImg,title,description}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <TeslaTitle>
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>

      </TeslaTitle>
    </Wrap>

      

    
    
  )
}

export default Ram1
const Wrap=styledComponents.div`
width:25vw;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
float:left;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`





const TeslaTitle=styledComponents.div`
padding-top:15vh;
text-align:center; `
