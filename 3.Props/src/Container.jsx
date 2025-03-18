import React from 'react'
import { Children } from 'react'

function Container({children}) {
  return (
    <div>
      <div>Container</div>
      <hr/>
      {children}
    </div>
    
  )
}

export default Container