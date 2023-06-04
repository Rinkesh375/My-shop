import axios from "axios"

export const addToCartProducts = async(id)=>{
       return  axios.get(`https://my-shop-xqg8.onrender.com/users/${id}`)
       .then((req)=>  req.data)
}