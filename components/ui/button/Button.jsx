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

z-index: 8;
background-color: ${({bgColor})=>{ bgColor }};
font-family: Roboto;
cursor: pointer;
outline: none;
box-shadow: none;
box-sizing: border-box;
height: auto;
width: auto;
color: rgb(255, 255, 255);
text-decoration: none;
white-space: nowrap;
min-height: 0 px;
min-width: 0 px;
max-height: none;
max-width: none;
text-align: left;
line-height: 17px;
letter-spacing: 0px;
font-weight: 500;
font-size: 17px;
border-color: transparent;
padding: 13 px 35 px;
border-radius: 30 px;
transform-origin: 71.125 px 23.5 px;
opacity: 1;
transform: translate(0 px, 0 px);
visibility: visible;
border-width: 0 px;
border-style: none;
`
const Button = React.forwardRef(({
    children,
    className,
}, ref) =>(
    <BaseButton className={className}>
        {children}
    </BaseButton>
))

export default Button