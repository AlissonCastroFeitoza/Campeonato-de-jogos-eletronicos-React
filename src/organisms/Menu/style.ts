import styled from 'styled-components'

export const EstiloLista = styled.ul `
    display: flex;
    align-items: center;
    gap: 5rem;
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
`