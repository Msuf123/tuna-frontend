import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import ShopPage from './Routes/ShopingPage/Shoping';
import Details from './Routes/Details/Details';
import Cart from './Routes/Cart/Cart';
import Profile from './Routes/Profile/Profile';
import Loading from './Component/Loading/Loading';
import Login from './Routes/Login/Login';
import PasswordReset from './Routes/PasswordReset/PasswordReset';
import Register from './Routes/Register/Register';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
          <Route path='/fish/:name' element={<Details></Details>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/passwordReset' element={<PasswordReset></PasswordReset>}></Route>
          <Route path='*' element={<Loading></Loading>}></Route>
    </Route>
  ))
  return (
    
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
