import experienceStyles from "./Experience.module.css";
import photo from "../media/img/experience.png";
import smallPhoto from "../media/img/experience-smaller.png";
import rentVision from "../media/img/RV.svg";
import krmc from "../media/img/krmc.png";
import axel from "../media/img/axel.svg";
import cookie from "../media/img/cookie.svg";
import buddySystems from "../media/img/buddysystems.svg";
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
            Some experiences that I think would be
            valuable for a potential employer to see. I'd also love to get in touch, please don't hesitate to{" "}
            <Link to="/contact">contact</Link> me.
          </p>
          <p></p>
        </div>
        <hr></hr>
        <h1>Work Experience</h1>
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
          <img src={rentVision} alt="test"></img>
        </div>
        <div className={experienceStyles.job}>
          <div className={experienceStyles.content}>
            <h2>
              <a
                href="https://www.bryanhealth.com/locations/hospitals/krmc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kearney Regional Medical Center - Summer of 2019
              </a>
            </h2>
            <p>
              My first tech job. And it was a fun job. I got to see just about
              every square inch of the hospital.
            </p>
            <p>
              I updated a lot of computers, helped clean up the active
              directory, and responded to several help desk tickets with
              headlines such as "Broken Keyboard." Often times I would just need
              to plug in the keyboard again. :)
            </p>
            <p>
              This job made me a better communicator because I needed to ask for
              help often.
            </p>
          </div>
          <div className={experienceStyles.krmc}>
            <img src={krmc} alt="test"></img>
          </div>
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
