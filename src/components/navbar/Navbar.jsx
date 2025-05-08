import logo from "../navbar/logo.png";
import avatar from "../navbar/profile-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="parent1">
        <div className="nav-logo">
          <img src={logo} alt="navbar-logo" width={"90px"} height={"90px"} />
        </div>
        <div className="bell-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="parent2">
        <div className="nav-btn">
          <button>Learning Free</button>
        </div>
        <div className="profile">
          <img className="profile-avatar" src={avatar} alt="profile-avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
