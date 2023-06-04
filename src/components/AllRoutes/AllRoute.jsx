import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchProductsList from '../searchProducts/SearchProductsList';
import HomePage from '../../HomePage';
import SearchProductResult from '../searchProducts/SearchProductResult';
import SingleProductDetails from '../../Pages/SingleProductDetails';
import LoginPage from '../../Pages/LoginPage';
import RegisterUser from '../../Pages/RegisterUser';
import CartPage from '../../Pages/CartPage';
import PrivateRoute from '../privateRoute/PrivateRoute';
import PlacedOrder from '../../Pages/PlacedOrder';

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/result' element={<SearchProductResult />} />
      <Route path='/productDetails/:id' element={<SingleProductDetails />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterUser/>} />
      <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>} />
      <Route path="/placedOrder" element={<PrivateRoute><PlacedOrder/></PrivateRoute>} />
    </Routes>
  );
}

export default AllRoute;
