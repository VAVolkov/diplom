import {Route, Routes} from "react-router-dom";

import Main from "./components/main/Main";
import Catalog from "./components/catalog/Catalog";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
          <Route index element = {<Main />}/>
          <Route path="catalog" element = {<Catalog />}/>
          <Route path="*" element = {<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
