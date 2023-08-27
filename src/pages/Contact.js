import contactStyles from "./Blog.module.css";
import rocks from "../media/img/rocks.png";
import rocksSmaller from "../media/img/rocks-smaller.png";
import { Link } from "react-router-dom";

function Contact() {
  // copied from experience to import resume
  const importAll = (r) => r.keys().map(r);
  const pdfFiles = importAll(require.context("../media/pdf", false, /\.pdf$/))
    .sort()
    .reverse();

  const pdfs = [];
  for (const pdf of pdfFiles) {
    pdfs.push(pdf);
  }

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
          and excellent communication skills, I would love to connect with you!
          You can find my resume{" "}
            <Link
              to="route"
              onClick={(event) => {
                event.preventDefault();
                window.open(pdfFiles[0]);
              }}
            >
              here
            </Link>.
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
