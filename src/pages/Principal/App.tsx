import Button from "../../atoms/Button";
import Imagem from "../../atoms/Imagem";
import Imagem2 from "../../atoms/Imagem2";
import Footer from "../../organisms/Footer";
import Formulario from "../../organisms/Formulario";
import Header from "../../organisms/Header";
import * as C from './style'

function App() {
  return (
    <div className="App">
     <Header/>

    <C.HomePrincipal>
      <div className="estrutura">
          <h4>Bem vindo ao GTX eSports</h4>  
          <h1>O evento mais esperado do ano</h1>
          <p>Um campeonato incrível de jogos eletrônicos que vai levar sua diversão para o proximo nível !</p>
          <Button/>
        
      </div> 
        <Imagem/>   
    </C.HomePrincipal>

    <C.HomeSecundario>
    <Imagem2/>
    <div className="estrutura">
          
          <h4>Quando ocorrerá o GTX eSports ?</h4>  
          <h1>Sua diversão está próxima !</h1>
          <p>O campeonato de jogos eletrônicos irá ocorrer no dia 27/12/2022 e conta com jogos exclusivos !</p>   
          <Button/>
         
      </div>
    </C.HomeSecundario>

    <C.HomePrincipal>
    <div className="estrutura">
          <h4>Se Inscreva agora mesmo</h4>  
          <h1>As vagas são limitadas</h1>
          <p>Garanta já sua vaga, é sua chance de competir e se divertir.</p>
         
      </div>
      <Formulario/>
    </C.HomePrincipal>
    
    <Footer/>
    </div>
  );
}

export default App;