import Text from "../../components/Text/Text";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import { Wave } from "react-animated-text";

const HomePage = () => {
  return (
    <Section type="home-page">
      <Container>
        <Text isCentered accented>
          <Wave
            text={`Welcome to the contacts app!`}
            effect="verticalFadeIn"
           
          />
        </Text>
        <Text isCentered>
          You can register, log in, and start keeping your contacts here.
        </Text>
      </Container>
    </Section>
  );
};

export default HomePage;
