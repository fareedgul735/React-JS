import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={""} alt="navbar-logo" width={"100px"} height={"100px"} />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="profile">Hi</div>
    </nav>
  );
};

export default Navbar;
