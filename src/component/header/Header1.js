
import { Link,useLocation } from "react-router-dom";
import "./Header1.css";
function Header1(props) {
  const location = useLocation()
  const pathname = location.pathname;
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      
      <div className="mainBody">
        <div className="header1">
          <ul>
            <li>
              <Link className={pathname == "/" && "active"} to="/">Home</Link>
            </li>
            <li>
              <Link className={(pathname == "/category" || pathname == "/category/create") && "active"}  to="/category">Category</Link>
            </li>
            <li>
              <Link className={pathname == "/product" && "active"}  to="/product">Product</Link>
            </li>

            <li>
              <Link className={pathname == "/invoice" && "active"}  to="/invoice">invoice</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={pathname == "/login" && "active"} to="/login">Login</Link>
            </li>
            <li>
              <Link className={pathname == "/register" && "active"} to="/register">Register</Link>
            </li>
          </ul>
        </div>
        
        <div className="containBody">{props.children}</div>
      </div>
    </div>
  );
}

export default Header1;
