import { SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_SUCCESS } from "./actionTypes";

const initialSingleProduct = {
    isLoading: false,
    isError: false,
    product: {}
}
export const singleProductReducer = (state = initialSingleProduct, { type, payload }) => {
   
    switch (type) {
        case SINGLE_PRODUCT_LOADING: return { ...state, isLoading: true, isError: false };
        case SINGLE_PRODUCT_FAILURE: return { ...state, isLoading: false, isError: true };
        case SINGLE_PRODUCT_SUCCESS: return { ...state, isLoading: false, product: payload };
        default: return { ...state };
    }
}