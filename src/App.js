import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBanner from './components/CommonComponets/TopBanner/TopBanner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Agents from './components/Agents/Agents';
import Blog from './components/Blog/Blog';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
 import { ToastContainer, toast } from 'react-toastify';
import RequireAuth from './components/ReauireAuth/RequireAuth';
import StockHouse from './components/StockHouse/StockHouse';
import AddItem from './components/AddItem/AddItem';
import MyItem from './components/MyItem/MyItem';
import Footer from './components/CommonComponets/Footer/Footer';


function App() {
  return (
    <div>
      {/* <TopBanner/> */}
       <Header/>
      <Routes>
         <Route path='/' element={<Home/>} > </Route>
         <Route path='/manageproducts' element={
                <RequireAuth>
                  <ManageProducts/>
                </RequireAuth>


         } > </Route>
         <Route path='/agents' element={<Agents/>}> </Route>
         <Route path='/blog' element={<Blog/>}> </Route>
         <Route path='/myitem' element={
           <RequireAuth>
             <MyItem/>
             </RequireAuth>
         }> </Route>
         <Route path='/login' element={<Login/>}> </Route>
         <Route path='/register' element={<Register/>}> </Route>
         <Route path='items/:itemId' element={
           <RequireAuth>
             <StockHouse/>
           </RequireAuth>
         }></Route>
         <Route path='/additem' element={
           <RequireAuth>
             <AddItem/>
           </RequireAuth>
         }> </Route>
         <Route path='/*' element={<NotFoundPage/>}> </Route>
         
                 


      </Routes>
      <Footer></Footer>
      <ToastContainer/>






    </div>
  );
}

export default App;
