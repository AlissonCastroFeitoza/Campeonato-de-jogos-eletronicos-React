import styled from 'styled-components'

export const BoxForm = styled.div `
    background: #16D833;
    color: white;
    max-width: 350px;
    min-width: 40vh;
    padding: 2rem;
    box-shadow: 25px 15px 10px rgba(0,0,0,0.2);
    border-radius: 8px;
    transition: all 0.5s;

    form {
    display: flex;
    flex-direction: column;
    }

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

export const DivInput = styled.div `
  position: relative;

  label {
    display: flex;
    font-size: 1em;
    gap: 10;
  }

  input, select {
    margin-bottom: 12px;
    width: 100%;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size:0.9rem;
    box-shadow: 1px 1px 6px #0000001c;
    padding: 0.6rem 1.2rem;
  }
  
`

export const Botao = styled.form `
input[type="submit"] {
    color: #16D833;
    font-size: 1em;
    font-weight: 800;
    border:1px solid rgba(22, 216, 51, 0.4);
    border-radius: 10px;
    margin-top: 2rem;
    padding: 15px 45px;
    cursor: pointer; 
    background: white;
    transition: all 0.3s;
  }

  input[type="submit"]:hover {
  letter-spacing: 0.5px;
}
`