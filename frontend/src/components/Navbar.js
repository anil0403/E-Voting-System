import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-item">
    <Link to={`/admin`} className="link">Register</Link>
      {/* <a class="link" href="./register.html">Register</a> */}
    </div>
    <div className="navbar-item">
    <Link to={`/manage`} className="link">Manage</Link>
      {/* <a class="link" href="./manage.html">Manage</a> */}
    </div>
  </div>
  );
};

export default Navbar;
