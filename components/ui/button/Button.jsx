import styled from 'styled-components'
import React from 'react'

const BaseButton = styled.button`
    padding: .5em 1.5em;
    border-radius: 30px;
    border: 2px solid !important;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-size: 1em;
    -webkit-transition: .3s;
    transition: .3s;
    min-width: 120px;
    text-align: center
    background: ${({bgColor})=>{ bgColor }}
`
const BitpayerButton = React.forwardRef(({
    children,
    className,
}, ref) =>(
    <BaseButton className={className}>
        {children}
    </BaseButton>
))

export default BitpayerButton