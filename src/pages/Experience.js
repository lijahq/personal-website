import experienceStyles from "./Experience.module.css";
import photo from "../media/img/experience.png";
import smallPhoto from "../media/img/experience-smaller.png";
import rentVision from "../media/img/RV.svg";
import johnDeere from "../media/img/john_deere.png";
import axel from "../media/img/axel.svg";
import cookie from "../media/img/cookie.svg";
import buddySystems from "../media/img/buddysystems.svg";
import unl from "../media/img/ofr.png";
import { Link } from "react-router-dom";

function experience() {
  // TODO: Fix so that it pulls the resume, not just files with .pdf
  // Probably will break if I upload another PDF
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
      <div className={experienceStyles.test}>
        <img src={photo} alt="test" className={experienceStyles.large}></img>
        <img
          src={smallPhoto}
          alt="small trombone"
          className={experienceStyles.small}
        ></img>
        <div className={experienceStyles.welcome}>
          <p>
            The part of the website where I list of some of my experiences as a
            developer.
          </p>
          <p>
            Currently, I'm looking for full-time positions beginning in January
            of 2025.
          </p>
          <p>
            If you are looking for a full-stack developer with a passion for
            innovative solutions, I would love to get in touch. Please don't
            hesitate to <Link to="/contact">contact</Link> me!
          </p>
          <p>
            You can find my resume{" "}
            <Link
              to="route"
              onClick={(event) => {
                event.preventDefault();
                window.open(pdfFiles[0]);
              }}
            >
              here
            </Link>
            .
          </p>
          <p></p>
        </div>
        <hr></hr>
        <h1>Work Experience</h1>
        <div className={experienceStyles.job}>
          <div className={experienceStyles.content}>
            <h2>
              <a
                href="https://www.deere.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                John Deere - Summer of 2023 and 2024
              </a>
            </h2>
            <p>
              Working at John Deere Financial as a part of team Customer Crew, I
              developed and deployed code for{" "}
              <a href="https://myfinancialaccounts.deere.com">
                My Financial Accounts
              </a>
              .
            </p>
            <p>
              My understanding of backend architecture grew quite a bit
              throughout this experience. Watching my team restructure their API
              for new integrations, I learned how to better think about
              designing API's. I also gained experience working with a variety
              of AWS technologies.
            </p>
          </div>
          {/* <div className={experienceStyles.krmc}> */}
          <img src={johnDeere} alt="test"></img>
          {/* </div> */}
        </div>
        <div className={experienceStyles.job}>
          <div className={experienceStyles.content}>
            <h2>
              <a
                href="https://resultsfinder.unl.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                On Farm Research Network - Spring of 2023 and 2024
              </a>
            </h2>
            <p>
              I contributed to{" "}
              <a href="https://resultsfinder.unl.edu">resultsfinder.unl.edu</a>{" "}
              over the course of a semester, giving consulting to the
              stakeholders and providing new features to the website
            </p>
            <p>
              Specifically, I increased the search speeds dramatically by
              optimizing the system, and I implemented new features to integrate
              yield data into their database.
            </p>
            <p>
              In 2024, I helped migrate their website to new infrastructure to
              keep up to date with university requirements.
            </p>
          </div>
          {/* <div className={experienceStyles.krmc}> */}
          <img src={unl} alt="test"></img>
          {/* </div> */}
        </div>
        <div className={experienceStyles.job}>
          <div className={experienceStyles.content}>
            <h2>
              <a
                href="https://www.rentvision.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rent Vision - Summer of 2022
              </a>
            </h2>
            <p>
              Helped out as a QA for intern projects and bug fixes. Lots of
              manual testing in particular. Became familiar with Jira. I also
              was given opporunities to learn more about web accessibility and
              UI/UX.
            </p>
            <p>
              Specifically, I spent time auditing their website templates
              according to WCAG 2.0 Level AA. Related to UI/UX — I presented
              research from analyzing Hotjar generated content from their
              website. It's interesting to compare the difference between how we
              expect users to engage with the website against how they actually
              used the website.
            </p>
          </div>
          <img src={rentVision} alt="RentVision logo"></img>
        </div>
      </div>
    </>
  );
}

export default experience;
