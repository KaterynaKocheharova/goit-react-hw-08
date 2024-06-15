import Text from "../../components/Text/Text";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css["home-section"]}>
      <div className={css["home-page-container"]}>
        <Text isCentered accented>
          Welcome To The Contacts App!
        </Text>
        <Text isCentered>
          You can register, login, and keep your contacts here.
        </Text>
      </div>
    </section>
  );
};

export default HomePage;
