import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import ShopPage from './Routes/ShopingPage/Shoping';
import Details from './Routes/Details/Details';
import Cart from './Routes/Cart/Cart';
import Profile from './Routes/Profile/Profile';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/tuna' element={<ShopPage></ShopPage>}></Route>
          <Route path='/fish/:name' element={<Details></Details>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='*' element={<span>err</span>}></Route>
    </Route>
  ))
  return (
    
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
