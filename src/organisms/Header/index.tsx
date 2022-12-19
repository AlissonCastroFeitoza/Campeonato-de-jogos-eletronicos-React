import Logo from "../../molecules/Logo"
import Menu from "../Menu"
import * as C from "./style"


const Header = () => {
    return (
       <C.Box>
         <Logo/>
         <Menu/>
       </C.Box>
    )
} 

export default Header