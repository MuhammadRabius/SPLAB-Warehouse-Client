import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBanner from './components/CommonComponets/TopBanner/TopBanner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <TopBanner/>
       <Header/>
      <Routes>
         <Route path='/' element={<Home/>} > </Route>


      </Routes>






    </div>
  );
}

export default App;
