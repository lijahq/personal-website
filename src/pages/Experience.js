import experienceStyles from "./Blog.module.css";

function experience() {
  return (
    <>
      <div className={experienceStyles.test}>
        <h1>Work Experience</h1>
        <div className="job">
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
            Helped out as a QA for intern projects and bug fixes. Lots of manual
            testing in particular. Became familiar with Jira. I also was given
            opporunities to learn more about web accessibility and UI/UX.
          </p>
          <p>
            Specifically, I spent time auditing their website templates
            according to WCAG 2.0 Level AA. Related to UI/UX — I presented
            research from analyzing Hotjar generated content from their website.
            It's fascinating to compare the difference between how we expect
            users to engage with the website against how they actually used the
            website.
          </p>
        </div>
        <div className="job">
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
            I updated a lot of computers, helped clean up the active directory,
            and responded to several help desk tickets with headlines such as
            "Broken Keyboard."
          </p>
          <p>Often times I would just need to plug in the keyboard again. :)</p>
        </div>
        <h1>Projects</h1>
        <div className="project">
          <h2>Cookie Jar</h2>
          <h2>BuddySystems website</h2>
          <h2>Axel Wilson's Mixtape Maker!</h2>
        </div>
      </div>
    </>
  );
}

export default experience;
