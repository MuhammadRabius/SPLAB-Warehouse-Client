import React from 'react';
import AddBanner from './AddBanner/AddBanner';
import Dashboard from './Dashboard/Dashboard';
import ProductCategory from './ProductCategaory/ProductCategory';
import ProductionItems from './Production/ProductionItems';


const Home = () => {
      return (
            <div>
                  <AddBanner/>
                  <Dashboard/>
                  <ProductCategory/>
                  <ProductionItems/>

                  
            </div>
      );
};

export default Home;