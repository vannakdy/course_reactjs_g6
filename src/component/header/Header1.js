import {Link} from "react-router-dom"
function Header1() {
    return (
        <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/invoice">invoice</Link></li>
            </ul>
      </div>
    )
}

export default Header1;