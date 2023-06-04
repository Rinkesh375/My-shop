import axios from "axios"
import { SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_LOADING, SEARCH_PRODUCT_SUCCESS } from "./actionTypes"




export const searchProduct = (dispatch, obj) => async () => {
    
       dispatch({ type: SEARCH_PRODUCT_LOADING })
       try {
              const req = await axios.get(`http://localhost:8080/product`, obj)
              dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: { data: req.data, totalPages: req.headers["x-total-count"] } });
              return req;
       }
       catch (error) {
              dispatch({ type: SEARCH_PRODUCT_FAILURE })
       }

}