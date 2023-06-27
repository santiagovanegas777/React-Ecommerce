import axios from "axios";
 import { useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

function Stores() {
 
    const [stores, setStores] = useState([])

    const getdataStoreApi = async () => {
        const response = await axios.get(`https://api-ecommerce-gules.vercel.app/stores`)
         setStores(response.data)
        console.log(response.data);

    }
    

     const renderList = () => {
        return stores.map((store) => {
      return <li><Card item={store}></Card></li>})
 }
  useEffect(() => {
         getdataStoreApi();
      }, [])
   
    return (
        <>
            <h2>Stores</h2>
         
            <ul className="ulStores">
                {renderList()}
            </ul>
        </>
    )

}
export default Stores;