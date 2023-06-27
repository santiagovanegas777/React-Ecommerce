import {Link} from "react-router-dom";
import NavAdmin from "./NavAdmin";
import NavClient from "./NavClient";

const NavBar =({user, logoutUser}) =>{
return (
    <nav><ul className="menu">
        <li><Link to="/">Home</Link></li>
        
      <li><Link to="/profile">Perfil</Link></li>

 




     {user ? (user.role=== "admin" ? <NavAdmin/>: <NavClient/>): null}
      <li>
      {user ? <button onClick={logoutUser}>Logout</button>:
      
      <Link to="/login">Login</Link>}</li>
        </ul>
      </nav>
)
}
export default NavBar;