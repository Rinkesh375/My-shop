import axios from "axios"
import { USERS_GET_DATA_SUCCESS } from "./actionTypes"

export const addNewUser = async(obj)=>{
    try {
        let req = await axios.post(`https://my-shop-xqg8.onrender.com/users`,obj)

    } catch (error) {
            
    }
}

export const getAllExistingUsers = (dispatch)=>async()=>{
      try {
        const req = await axios.get(`https://my-shop-xqg8.onrender.com/users`)
        dispatch({type:USERS_GET_DATA_SUCCESS,payload:req.data})
      } catch (error) {
        
      }
}

export const addProductToCart = async(id,item)=>{
 
     await  axios.patch(`https://my-shop-xqg8.onrender.com/users/${id}`,item)
}