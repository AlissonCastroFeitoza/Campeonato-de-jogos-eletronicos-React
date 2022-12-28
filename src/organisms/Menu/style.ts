import styled from 'styled-components'

export const EstiloLista = styled.ul `
    display: flex;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width:767.98px) {
      position: fixed;
      right: -100%;
      top: 70px;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: black;
      gap: -10px;
      transition: 0.3s;
}

@media screen and (max-width:991.98px) {
      position: fixed;
      right: -100%;
      top: 70px;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: black;
      gap: -10px;
      transition: 0.3s;
}
`

export const EstiloItem = styled.a `

    color: white;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.5s;
    cursor: pointer;
   

  &:hover {
    color: #16D833;
  }

  @media screen and (max-width:767.98px) {
    margin: 16px 0px;
}

@media screen and (max-width:991.98px) {
  margin: 16px 0px;
}

`

export const BoxMenuTab = styled.div `
  cursor: pointer;
  display: none;
span {
  display: block;
    width: 28px;
    height: 3px;
    border-radius: 3px;
    background: white;
    margin: 5px auto;
    transition: all 0.3s;
}

span:nth-child(1), span:nth-child(3) {
  background: #16D833;
}

@media screen and (max-width:767.98px) {
 display: block;
}

@media screen and (max-width:991.98px) {
    display: block;
}

`
