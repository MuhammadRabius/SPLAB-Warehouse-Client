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
import { ToastContainer } from 'react-bootstrap';
import RequireAuth from './components/ReauireAuth/RequireAuth';


function App() {
  return (
    <div>
      <TopBanner/>
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
         <Route path='/login' element={<Login/>}> </Route>
         <Route path='/register' element={<Register/>}> </Route>
         <Route path='/*' element={<NotFoundPage/>}> </Route>
                 


      </Routes>
      <ToastContainer></ToastContainer>






    </div>
  );
}

export default App;
