import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css["home-section"]}>
      <div className={css["home-page"]}>
        <p>Welcome Page</p>
      </div>
    </section>
  );
};

export default HomePage;
