import footerStyles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <footer className={footerStyles.footer}>
      <hr></hr>
      <div className={footerStyles.nav}>
        <Link to="/" className={footerStyles["site-title"]}>
          lijah.q
        </Link>
      </div>
      <nav className={footerStyles.nav}>
        <div>
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
        </div>
      </nav>
      <div className={footerStyles.icons}>
        <SocialIcon
          url="https://github.com/elijahquentin"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://twitter.com/lijah_q"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.instagram.com/lijah.q/"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon url="mailto:#" bgColor="#111" fgColor="white" />
      </div>
    </footer>
  );
}
