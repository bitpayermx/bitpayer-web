import styled, { keyframes } from 'styled-components';
import { flipInX, fadeOutUp } from 'react-animations';

const flipInXAnimation = keyframes`${flipInX}`;
const fadeOutUpAnimation = keyframes`${fadeOutUp}`;


export const BouncyDiv = styled.div`
  animation: 1s ${flipInXAnimation};
`;

export const MenuNav = styled(BouncyDiv)`
  position: absolute;
  background: #fff;
  border-radius: 4px;
  width:180px;
  top:60px;
  left:-70px;
  z-index:-10;
`;

