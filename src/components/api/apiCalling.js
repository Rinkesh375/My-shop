import axios from "axios"

export const addToCartProducts = async(id)=>{
       return  axios.get(`http://localhost:8080/users/${id}`)
       .then((req)=>  req.data)
}