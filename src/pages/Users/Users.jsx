import axios from "axios";
import { useEffect, useState } from "react";
import CardUsers from "../../components/Card/CardUsers";
function Users () {

    const [users, setUsers]= useState([])

    const  getdataUsersApi = async () =>{
        const response = await axios.get(`https://api-ecommerce-gules.vercel.app/users`)
        setUsers(response.data)
        console.log(response.data)
       
    }

    const renderList = () =>{
        return users.map((user)=> {
            return <li><CardUsers item={user}></CardUsers></li>})
        }

        useEffect(()=>{
            getdataUsersApi();
        }, [])
        return (
            <>
                <h2>Usuarios</h2>
                <ul className="ulUsers">
                    {renderList()}
                </ul>
            </>
        )
    }

export default Users;