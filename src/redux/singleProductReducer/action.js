import axios from "axios"
import { SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_SUCCESS } from "./actionTypes";

export const getSingleProduct = (id,dispatch)=>async()=>{
        
           dispatch({type:SINGLE_PRODUCT_LOADING})
       try {
        const req = await axios.get(`http://localhost:8080/product/${id}`);
     
        dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:req.data})

       } catch (error) {
                dispatch({type:SINGLE_PRODUCT_FAILURE})
       }

}