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
          url="https://github.com/lijahq"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/lijahq/"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://open.spotify.com/artist/3r7lZG0xvpdp6RkBS5bkTK?si=5aecNbwgRpOyTI2UUfb1dg"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.youtube.com/@lijahq"
          bgColor="#111"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.instagram.com/lijah.q/"
          bgColor="#111"
          fgColor="white"
        />
      </div>
    </footer>
  );
}
