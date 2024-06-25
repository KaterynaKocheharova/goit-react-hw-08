import Text from "../Text/Text";
import Container from "../common/Container/Container";
import Section from "../common/Section/Section";

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
