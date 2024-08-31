import './layer.css'
import React from 'react'
import LayerTwo from './LayerTwo'


function LayerOne() {
  
  return (
    <div className='l-one' >
      <LayerTwo />
    </div>
  )
}

export default LayerOne