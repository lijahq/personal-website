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
        <p></p>
        <p>
          Best way to reach me is to{" "}
          <a href="mailto:contact@lijahq.com">email</a> me at
          contact@lijahq.com.
        </p>
        <p>Hopefully the bots don't send me too much spam.</p>
      </div>
    </>
  );
}

export default Contact;
