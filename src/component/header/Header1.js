
import { Link,useLocation } from "react-router-dom";
import "./Header1.css";
function Header1(props) {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1];
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      
      <div className="mainBody">
        <div className="header1">
          <ul>
            <li>
              <Link className={pathname == "" && "active"} to="/">Home</Link>
            </li>
            <li>
              <Link className={(pathname == "category") && "active"}  to="/category">Category</Link>
            </li>
            <li>
              <Link className={(pathname == "course" ) && "active"}  to="/course">Course</Link>
            </li>
            <li> 
              <Link className={pathname == "teacher" && "active"}  to="/teacher">Teacher</Link>
            </li>

            <li>
              <Link className={pathname == "/student" && "active"}  to="/student">Student</Link>
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
