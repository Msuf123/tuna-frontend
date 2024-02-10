import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import ShopPage from './Routes/ShopingPage/Shoping';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/tuna' element={<ShopPage></ShopPage>}></Route>
    </Route>
  ))
  return (
    
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
