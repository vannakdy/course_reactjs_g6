import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ProductPage from "./page/ProductPage";
import CategoryPage from "./page/CategoryPage";
import CategoryCreatePage from "./page/CategoryCreatePage";
import CategoryEditPage from "./page/CategoryEditPage";
import Route404Page from "./page/Route404Page";

import Header1 from "./component/header/Header1";
import "./App.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header1>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path="/category/create" element={<CategoryCreatePage/>} />
          <Route path="/category/edit/:id" element={<CategoryEditPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="*" element={<Route404Page/>} />
        </Routes>
      </Header1>
    </BrowserRouter>
  );
}

export default App;
