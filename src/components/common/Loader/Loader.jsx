import Section from "../Section/Section";
import Container from "../Container/Container";
import Text from "../Text/Text";

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
