import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({variant, type}) => {
  return (
    <Button variant={variant} type={type}>
        Submit
    </Button>
  )
}

export default SubmitButton