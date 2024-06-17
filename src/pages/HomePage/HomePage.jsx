import Text from "../../components/Text/Text";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Text isCentered accented>
          Welcome To The Contacts App!
        </Text>
        <Text isCentered>
          You can register, login, and keep your contacts here.
        </Text>
      </Container>
    </Section>
  );
};

export default HomePage;
