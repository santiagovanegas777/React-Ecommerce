
import imgProfile from "../../images/perfil.jpg";


const Profile = ({user}) =>{

    return(<>
    <img className="imgPerfil"src={imgProfile} alt="PERFIL"/>

        <h1>Perfil de usuario</h1>
        <p>Email:{user.email}</p>
        <p>Nombre:{user.name}</p>
        <p>Rol:{user.role}</p>
        
        
        </>
    )
}

export default Profile;