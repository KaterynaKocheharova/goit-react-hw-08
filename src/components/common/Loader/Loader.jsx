import Text from "../../Text/Text";
import Container from "../Container/Container";
import Section from "../Section/Section";

const Loader = ({ children }) => {
  return (
    <Section>
      <Container>
        <Text isCentered>{children}</Text>
      </Container>
    </Section>
  );
};

export default Loader;
