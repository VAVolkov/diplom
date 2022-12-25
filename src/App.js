import {Route, Routes} from "react-router-dom";

import Main from "./components/main/Main";
import Catalog from "./components/catalog/Catalog";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

import CatalogCoffee from "./components/catalog/components/coffee/CatalogCoffee";
import CatalogTea from "./components/catalog/components/tea/CatalogTea";
//import CardMenuVending from "./components/catalog/components/vending/components/menu/components/CardMenuVending";
import CatalogVending from "./components/catalog/components/vending/CatalogVending";
import CatalogHealthFood from "./components/catalog/components/helthFood/CatalogHealthFood";

function App() {
  return (
    <>
      <Routes>
          <Route index element = {<Main />}/>
          <Route path="catalog" element = {<Catalog />}/>
            <Route path="catalog/coffee" element = {<CatalogCoffee />}/>
            <Route path="catalog/Tea" element = {<CatalogTea />}/>
            <Route path="catalog/Vending" element = {<CatalogVending />}/>
            <Route path="catalog/HelthFood" element = {<CatalogHealthFood />}/>
          <Route path="*" element = {<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
