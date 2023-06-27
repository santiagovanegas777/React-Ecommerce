import axios from "axios";
import { useEffect, useState } from "react";

import CardProducts from "../../components/Card/CardProducts";

function Products () {

    const [products, setProduct]= useState([])

    const getdataProductsApi = async () =>{
        const response = await axios.get(`https://api-ecommerce-gules.vercel.app/products`)
        setProduct(response.data)
        console.log(response.data)
       
    }

    const renderList = () =>{
        return products.map((product)=> {
            return <li><CardProducts item={product}></CardProducts></li>})
        }

        useEffect(()=>{
            getdataProductsApi();
        }, [])
        return (
            <>
                <h2>Products</h2>
                <ul className="ulproducts">
                    {renderList()}
                </ul>
            </>
        )
    }

export default Products;