import React from 'react'
import Ram from './Ram'
import Ram2 from './Ram2'
import Ram3 from './Ram3'
import Ram1 from './Ram1'


import styledComponents from 'styled-components'
function Home() {
  return (
    <HiIamContainer class='f-and-s'>

      <Ram
        title="model S"
        description="test"
        backgroundImg="model-s.jpg" />
      <Ram1
        title="model 3"
        description="test"
        backgroundImg="model-3.jpg" />

      <Ram2
        title="model x"
        description="test"
        backgroundImg="model-x.jpg" />
      <Ram3
        title="model Y"
        description="test"
        backgroundImg="model-y.jpg" />




    </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponents.div``