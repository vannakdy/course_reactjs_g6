import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ProductPage from "./page/ProductPage";
import Route404Page from "./page/Route404Page";
import Header1 from "./component/header/Header1";
import "./App.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="*" element={<Route404Page/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
