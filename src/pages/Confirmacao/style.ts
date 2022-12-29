import styled from 'styled-components'

export const HomePrincipal = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10%;

    h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    }

    h1 {
    color: #16D833;
    font-size: 3.5rem;
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

    .card {
        color: rgba(0,0,0,0.9);
        background-color: white;
        width: 32rem;
        box-shadow:23px 15px 10px 1px rgba(0,0,0,0.2);
        border-radius: 8px;
        border: 0.5px solid whitesmoke;
        transition: all 0.5s;
        h4{
          text-align: center;
        }
    }
    
    @media screen and (max-width:280.90px) {
        .card {
            width: 100%;
        }
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
        font-size: 21px;
        flex-direction: column;
     }
    
     h1 {
        font-size: 2.5rem;
        line-height: 3rem;
     }
    

     img {
         display: none;
        }
     .card {
        border: none;
        box-shadow: none;
     }   
    }

    @media screen and (max-width:1400.98px) { 
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