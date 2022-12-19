import navbarStyles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={navbarStyles.nav}>
      <a href="/" className={navbarStyles["site-title"]}>
        lijah.q
      </a>
      <ul>
        <li>
          <a href="/resume">Experience</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
