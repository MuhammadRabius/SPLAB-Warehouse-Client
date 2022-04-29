import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBanner from './components/CommonComponets/TopBanner/TopBanner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Agents from './components/Agents/Agents';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <TopBanner/>
       <Header/>
      <Routes>
         <Route path='/' element={<Home/>} > </Route>
         <Route path='/manageproducts' element={<ManageProducts/>} > </Route>
         <Route path='/agents' element={<Agents/>}> </Route>
         <Route path='/blog' element={<Blog/>}> </Route>


      </Routes>






    </div>
  );
}

export default App;
