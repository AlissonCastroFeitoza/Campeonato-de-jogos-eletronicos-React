import { BrowserRouter,Route,Routes as Switch, Navigate} from "react-router-dom"
import Confirmacao from "../pages/Confirmacao/index"
import App from "../pages/Principal/App"

const Rotas = () => {
    return (
        <BrowserRouter>
        <Switch>
         <Route path='/pagina-inicial' element={<App/>}/>
         <Route path="/confirmacao" element={<Confirmacao/>}/>
         <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas