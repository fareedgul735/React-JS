import logo from "../navbar/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="parent1">
        <div className="nav-logo">
          <img src={logo} alt="navbar-logo" width={"90px"} height={"90px"} />
        </div>
        <div className="bell-icon">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="parent2">
        <div className="nav-btn">
          <button>Learning Free</button>
        </div>
        <div className="profile">Hi</div>
      </div>
    </nav>
  );
};

export default Navbar;
