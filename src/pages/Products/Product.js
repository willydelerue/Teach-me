import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'

function Product() {
  return (
    <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Product