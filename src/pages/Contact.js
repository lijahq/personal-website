import contactStyles from "./Blog.module.css";
import rocks from "../media/img/rocks.png";
import rocksSmaller from "../media/img/rocks-smaller.png";

function Contact() {
  return (
    <>
      <div className={contactStyles.test}>
        <img src={rocks} alt="test" className={contactStyles.large}></img>
        <img
          src={rocksSmaller}
          alt="small trombone"
          className={contactStyles.small}
        ></img>
        <p>Maybe someday I'll add a contact form.</p>
        <p>
          Until then, you can <a href="#test">email</a> me at (email).
        </p>
        <p>Just kidding. I don't have an email set up yet. :)</p>
      </div>
    </>
  );
}

export default Contact;
