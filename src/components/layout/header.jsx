import { NavLink } from "react-router-dom";
import "../layout/header.css";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink class="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
    </ul>
  );
};

export default Header;
