import styled from 'styled-components'

export const EstiloForm = styled.form `
    background: #16D833;
    color: white;
    max-width: 350px;
    min-width: 40vh;
    padding: 2rem;
    box-shadow: 25px 15px 10px rgba(0,0,0,0.2);
    border-radius: 8px;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;

    
    h2 {
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;
    }

    h2::before {
    content: '';
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0;
    border-radius: 8px;
    background: linear-gradient(45deg,whitesmoke,white);
    }
`