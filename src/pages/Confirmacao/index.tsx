import { Imagemtres } from "../../atoms/Imagem";
import Footer from "../../organisms/Footer";
import { HeaderSecundario } from "../../organisms/Header";
import * as C from './style'

function Confirmacao() {
  return (
    <>
        <HeaderSecundario/>

          <C.HomePrincipal>
            <div className="card">
           <Imagemtres/>
           <h4 className="verde">Evento: GTX eSports</h4>
           <h4>Data do Evento: 27/12/2023</h4>
            </div>
           <div className="estrutura">
           <h4>Parabéns, seja bem vindo ao GTX eSports !</h4>
           <h1>Sua inscrição foi realizada com sucesso.</h1> 
           
           </div>
          </C.HomePrincipal>
           
        <Footer/>
        </>
  )
}

export default Confirmacao