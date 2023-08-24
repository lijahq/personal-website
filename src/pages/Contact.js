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
        <p>
          The part of the website where I list my email.
        </p>
        <p>
          If you are looking for an emerging software engineer with a full-stack skillset
          and excellent communication skills, I would love to connect with you.
        </p>
        <p>
          You can email me at:
        </p>
        <p>
          contact [at] lijahq [dot] com
        </p>
      </div>
    </>
  );
}

export default Contact;
