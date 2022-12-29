import styled from 'styled-components'

export const footer = styled.footer `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: black;
    padding: 16px;
 p{
    color: white;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
 }

 a{
    color: white;
    font-size: 15px;
 }

 @media screen and (max-width:767.98px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
 }

 @media screen and (max-width:912px) {
   position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
 }
 
`