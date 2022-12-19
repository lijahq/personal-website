import photo from "./noir.jpg";
import homeStyles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={homeStyles.container}>
        <h1>Hello!</h1>
        <img src={photo} alt="uke" className={homeStyles.image}></img>
      </div>
    </>
  );
}

export default Home;
