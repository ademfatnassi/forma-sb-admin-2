import { Link } from "react-router-dom";
import { Me } from "../../utils/Me";

const SideBar = () => {
  const user = Me();
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      {user.role === "Admin" && (
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Gestion des utilisateurs</span>
          </Link>
        </li>
      )}
      {user.role === "User" && (
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </Link>
        </li>
      )}

      <li className="nav-item">
        <Link className="nav-link" to="/45">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Link</span>
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
