import { Link } from "react-router-dom"

const NavClient = () =>{
    return (<>
         <li><Link to="/products">Products</Link></li>
        
        <li><Link to="/stores">Stores</Link></li>
    </>)
}

export default NavClient