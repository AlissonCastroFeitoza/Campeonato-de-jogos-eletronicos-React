import * as C from './style'
import {Link} from 'react-router-dom'
const Formulario = () => {
  return (
     <C.BoxForm>
        <form>
        <h2>Inscrever-se</h2>

        <C.DivInput>
        <label>Nome:</label>
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required/>
        </C.DivInput>
 
        <C.DivInput>
        <label>E-mail:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu E-mail" required/>
        </C.DivInput>

        <C.DivInput>
        <label>Selecione o Jogo:</label>
            <select name="game" id="game" required>
                         <option value="">Escolha seu jogo</option>
                         <option value="cs">Counter Strike</option>
                         <option value="lol">League of Legends</option>
                         <option value="valorant">Valorant</option>
                         <option value="pubg">PUBG</option>
                         <option value="warzone">Warzone</option>
            </select> 
        </C.DivInput>

        <C.DivInput>
        <label>Login:</label>
        <input type="login" name="login" id="login" placeholder="Digite seu Login" required/>
        </C.DivInput>

        <C.DivInput>
        <label>Senha:</label>
        <input type="senha" name="senha" id="senha" placeholder="Digite sua senha" required/>
        </C.DivInput>
        
        <Link to='/confirmacao'>
         <C.Botao>
         <input type="submit" value="Inscrever-se"/>
         </C.Botao>
         </Link>
        
        </form>
     </C.BoxForm>
  )
}

export default Formulario