import { Link } from "react-router-dom"

const NavAdmin = () =>{
    return (<>
         <li><Link to="/register">Registrar Usuario</Link></li>
        
        <li><Link to="/users">Lista de Usuarios</Link></li>
    </>)
}

export default NavAdmin