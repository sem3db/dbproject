import React from 'react'
import {Alert} from 'react-bootstrap'
const Message = ({variant,Children}) => {
    return (
        <Alert variant={variant}>
            {Children}
        </Alert>
    )
}
Message.defaultProps={
    variant:'info'
}
export default Message
