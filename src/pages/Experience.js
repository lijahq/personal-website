import experienceStyles from "./Experience.module.css";
import photo from "../media/img/experience.png";
import smallPhoto from "../media/img/experience-smaller.png";
import rentVision from "../media/img/RV.svg";
import johnDeere from "../media/img/john_deere.png";
import axel from "../media/img/axel.svg";
import cookie from "../media/img/cookie.svg";
import buddySystems from "../media/img/buddysystems.svg";
import { Link } from "react-router-dom";

function experience() {
  // TODO: Fix so that it pulls the resume, not just files with .pdf
  // Probably will break if I upload another PDF
  // const importAsll = (r) => r.keys().map(r);
  // const pdfFiles = importAll(require.context("../media/pdf", false, /\.pdf$/))
  //   .sort()
  //   .reverse();

  // const pdfs = [];
  // for (const pdf of pdfFiles) {
  //   pdfs.push(pdf);
  // }

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
            The part of the website where I list of some of my experiences as a developer. 
          </p>
          <p>
            Currently, I'm looking for full-time internships
            next summer, and part-time positions that begin in January of 2024.
          </p>
          <p>
            I'm highly interested in startup opportunities. If you are looking for a full-stack developer with
            a passion for innovative solutions, I would love to get in touch. Please don't hesitate to{" "}
            <Link to="/contact">contact</Link> me!
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
                John Deere - Summer of 2023
              </a>
            </h2>
            <p>
              Working at John Deere Financial as a part of team Customer Crew, I developed and deployed code for{" "}
              <a href="https://myfinancialaccounts.deere.com">My Financial Accounts</a>.
            </p>
            <p>
              My understanding of backend architecture grew quite a bit throughout this experience. Watching my team restructure
              their API for new integrations, I learned how to better think about designing API's. I also gained experience working
              with a variety of AWS technologies.
            </p>
            <p>
              I also enjoyed getting to present at demos. For me, it's a fun challenge trying to get technical information accross
              and demystify things for a non-technical audience.
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
              website. It's fascinating to compare the difference between how we
              expect users to engage with the website against how they actually
              used the website.
            </p>
          </div>
          <img src={rentVision} alt="RentVision logo"></img>
        </div>
        
        <hr></hr>
        <h1>Projects</h1>
        <div className={experienceStyles.project}>
          <div className={experienceStyles.job}>
            <div className={experienceStyles.content}>
              <h2>
                <a
                  href="https://github.com/buddysystems/CookieJar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Jar
                </a>
              </h2>
              <p>
                Cookie Jar is a Chrome extension that gives you the ability to
                easily visualize and manage your browser cookies.
              </p>
              <p>
                This was my first real project working with JavaScript. Using
                object oriented design, I helped display cookies on the
                extension menu and give users options to store and delete them.
                We pulled cookie data and manipulated it through the Chrome API.
                The other technical challenge was working with and manipulating
                the DOM with only JavaScript to keep the exstension lightweight.
                It was a great segue into learning React (and building this
                website).
              </p>
              <p>
                Also, it felt righteous to damage Chrome's ability to track you
                through building transparency amid the transition to Manifest
                V3. Regardless, spending time on this project is what eventually
                moved me to Firefox anyways.
              </p>
            </div>
            <img src={cookie} alt="test"></img>
          </div>
          <div className={experienceStyles.job}>
            <div className={experienceStyles.content}>
              <h2>
                <a
                  href="https://github.com/buddysystems/buddysystems.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BuddySystems website
                </a>
              </h2>
              <p>
                BuddySystems is a group consisting of myself and a few of my
                friends also in software engineering at UNL. This group was also
                behind the Cookie Jar and Axel Wilson's Mixtape Maker.
              </p>
              <p>
                This was the first website I built. I learned some HTML/CSS
                basics and hit the ground running.
              </p>
            </div>

            <img
              className={experienceStyles.bs}
              src={buddySystems}
              alt="test"
            ></img>
          </div>
          <div className={experienceStyles.job}>
            <div className={experienceStyles.content}>
              <h2>
                <a
                  href="https://github.com/CodeCricut/RetroPlaylistGenerator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Axel Wilson's Mixtape Maker!
                </a>
              </h2>
              <p>
                Axel Wilson was birthed from{" "}
                <a href="https://unlcornhacks.com/">Cornhacks 2022</a>, UNL's
                annual hackathon.
              </p>
              <p>
                The idea was to take users on a "Choose Your Own Adventure"
                journey through making a playlist. Users are given choices of
                different songs to add - and the songs they select will
                influence the next selection of songs to choose from.
              </p>
              <p>
                We built a playlist generator using Spotify's API with Python.
                The original plan was to use a Python GUI, but as the night went
                on we decided that a web frontend would be better. Before we
                knew it, we had a fullstack application with React as our
                frontend.
              </p>
            </div>
            <img src={axel} alt="test"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default experience;
