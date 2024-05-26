import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <h2><img src="/images/YoutubeLogo.png" alt="Youtube Logo" />Youtube</h2>
        {/*this is where we will have all our links*/}
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
