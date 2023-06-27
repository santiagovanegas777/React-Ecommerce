import "../styles/App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useState } from "react";


import Home from "../pages/Home/Home";
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import NotFound from "./NotFound";
import Profile from "../pages/Profile/Profile";
import Products from "../pages/Products/Products";
import Stores from "../pages/Stores/Stores";
import Users from "../pages/Users/Users";
import RegisterUser from "./User/RegisterUser";
import AuthRoute from "./AuthRoute/AuthRoute";


const userList = [
  { email: "anacecilia@upgrade.com", password: "123456", name: "Ana", role:"admin" },
  { email: "perexalexis@upgrade.com", password: "9876", name: "Antuan", role:"client" },
];

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const loginUser = (FormData, prevRoute) => {
    const existsUser = userList.find(
      (user) =>
        user.email === FormData.email && user.password === FormData.password
    );
    if (existsUser) {
      
      setUser(existsUser);
      setLoginError("");
      
      navigate(prevRoute || "/");
    } else {
      
      setUser(false);
      setLoginError("Usuario o contraseña incorrecta");
    }
  };
 const registernewUser = (newUser) =>{
  const userFind = userList.find((user)=> newUser.email=== user.email)
  if(!userFind){
    userList.push(newUser);
    console.log(userList);
    navigate("/");
  }else{
setRegisterError("El email no puede estar repetido");
  }
   
 };
  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="App-header">
      <NavBar user={user} logoutUser={logoutUser} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <AuthRoute user={user} component={<Profile user={user} />} />
          }
        />
        <Route path="register" element={<AuthRoute user={user} component={<RegisterUser registernewUser={registernewUser} registerError={registerError}/>}/>}/>
        <Route path="/users" element={<Users/>} ></Route>
        <Route
          path="/Login"
          element={<Login loginUser={loginUser} loginError={loginError} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/stores" element={<Stores/>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
