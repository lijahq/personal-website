import navbarStyles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={navbarStyles.nav}>
      <Link to="/" className={navbarStyles["site-title"]}>
        lijah.q
      </Link>
      <ul>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
