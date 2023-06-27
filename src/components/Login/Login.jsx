import { useState } from "react"
import { useLocation } from "react-router-dom"

const initial_state = {
    email:"",
    password:""
}


const Login = ({loginUser, loginError})=>{

    const location = useLocation()
    const {state} = location
    console.log(location)


    const [FormData, setFormData] = useState(initial_state)

const changeInput =(ev)=>{

    const {name, value} =ev.target;
    console.log(name,value)
   
   setFormData({...FormData, [name]:value})
}
const submitForm = (ev)=>{

    ev.preventDefault();
    console.log("se han enviado los datos")
   loginUser(FormData, state? state.prevRoute : null)
    setFormData(initial_state)
}
    return (<form onSubmit={submitForm}>
<label htmlFor="email">
Email
<input type="email" name="email" id="email" onChange={changeInput} value={FormData.email}/>
</label>
<label htmlFor="pass">
Contraseña
<input type="password" name="password" id="pass" onChange={changeInput} value={FormData.password}/>
</label>
<div>
    <button type="submit">Login</button>
</div>

{loginError? <div>{loginError}</div> : null}
    </form>)
}

export default Login