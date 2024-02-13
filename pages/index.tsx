import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading tag="h2" text="Hello world" />
    </div>
  );
};
export default Home;
