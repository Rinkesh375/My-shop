import { SEARCH_INPUT_TEXT, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_LOADING, SEARCH_PRODUCT_SUCCESS } from "./actionTypes";

const initialSearch = {
    isLoading:false,
    isError:false,
    searchArr:[],
    searchText:"",
    totalPages:1
}

export const searchReducer = (state=initialSearch,{type,payload})=>{
              switch (type) {
                case SEARCH_PRODUCT_LOADING:return {...state,isLoading:true,isError:false};
                case SEARCH_PRODUCT_FAILURE:return {...state,isLoading:false,isError:true};
                case SEARCH_PRODUCT_SUCCESS:return {...state,isLoading:false,searchArr:payload.data,totalPages:payload.totalPages};
                case SEARCH_INPUT_TEXT: return {...state,searchText:payload}
                default: return {...state};
            }
}