import styled from 'styled-components'

export const HomePrincipal = styled.section `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10%;

    h4 {
    font-size: 1.5rem;
    color: #16D833;
    margin-bottom: 1rem;
    }

    h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 4rem;
    }

    img {
    height: 350px;
    width: 100%;
    }

    p {
    margin-bottom: 4rem;
    }

    .estrutura {
        width: 37rem;
    }
    
    @media screen and (max-width:767.98px) {
        width: 100%;
        height: 100%;
        padding: 150px 2%;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;
    
       .estrutura {
         width: 100%;
       } 

     h4 {
        font-size: 25px;
        flex-direction: column;
     }

     
     h1 {
        font-size: 2.5rem;
        line-height: 3rem;
     }

     p {
        font-size: 20px;
     }
    }
    
    @media screen and (max-width:991.98px) { 
        width: 100%;
        height: 100%;
        padding: 150px 2%;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;

        h4 {
         font-size: 25px;
        }

        h1 {
         font-size: 2.5rem;
         line-height: 3rem;
        }

        p {
         font-size: 20px;
        }
         
        img {
         object-fit: contain;
        }
    }
`

export const HomeSecundario = styled.section `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10%;
    background-color: black;
    

    h4 {
    font-size: 1.5rem;
    color: #16D833;
    margin-bottom: 1rem;
    }

    h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 4rem;
    color: white;
    }

    img {
    height: 350px;
    width: 350px;
    }

    p {
    margin-bottom: 4rem;
    color: white;
    }

    .estrutura {
        width: 37rem;
    }

    @media screen and (max-width:767.98px) {
       width: 100%;
        height: 100%;
        padding: 150px 2%;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;
    
        .estrutura {
         width: 100%;
       } 

     h4 {
        font-size: 25px;
        flex-direction: column;
     }

     h1 {
        font-size: 2.5rem;
        line-height: 3rem;
     }

     p {
        font-size: 20px;
     }
    }
    
    @media screen and (max-width:991.98px) { 
        width: 100%;
        height: 100%;
        padding: 150px 2%;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;

        h4 {
         font-size: 25px;
        }

        h1 {
         font-size: 2.5rem;
         line-height: 3rem;
        }

        p {
         font-size: 20px;
        }
         
        img {
         object-fit: contain;
        }
      }
`




