import React from 'react'
import { DivPopUp as Div } from './styles'

function DivPopUp ({ children, ...rest }) {
  return <Div {...rest}>{children}</Div>
}

export default DivPopUp