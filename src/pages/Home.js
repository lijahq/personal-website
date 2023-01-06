import photo from "./noir.jpg";
import gif from "./trombone.gif";
import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={homeStyles["left-container"]}>
        <h1>Hello!</h1>
        <img src={photo} alt="uke" className={homeStyles.image}></img>
      </div>
      <div className={homeStyles["right-header"]}>
        <div>
          <h2 className={homeStyles.right}>My name is Elijah Quentin.</h2>
        </div>
        <div>
          <h3 className={homeStyles.right}>I'm an aspiring developer.</h3>
        </div>
      </div>
      <div className={homeStyles.linebreak}>
        <hr></hr>
        <div className={homeStyles["right-container"]}>
          <img src={gif} alt="trombone" className={homeStyles.image}></img>
          <div>
            <h3 className={homeStyles.right}>
              I also like to play the trombone*.
            </h3>
          </div>
        </div>
        <hr></hr>
      </div>
      <div>
        <div className={homeStyles.about}>
          <p className={homeStyles.p}>
            I'm currently a sophomore at the University of Nebraska at Lincoln.
            I'm majoring in software engineering with a minor in
            entrepreneurship. You can find my professional and maybe not-so
            professional experiences in development and technology under the{" "}
            <Link to="/experience">experience</Link> tab.
          </p>
          <p className={homeStyles.p}>
            I'm also passionate about music production and audio engineering.
            I'm sharing my experiences and music under the{" "}
            <Link to="/blog">blog</Link> tab.
          </p>
          <p className={homeStyles.right}>*(and many other instruments)</p>
        </div>
      </div>
    </>
  );
}

export default Home;
