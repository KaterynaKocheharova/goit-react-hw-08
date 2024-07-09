import Section from "../Section/Section";
import Container from "../Container/Container";
import Text from "../Text/Text";
import { Circles } from "react-loader-spinner";

const Loader = ({ children }) => {
  return (
    <Section>
      <Container>
        <div>
          <Text isCentered>{children}</Text>
          <Circles />
        </div>
      </Container>
    </Section>
  );
};

export default Loader;
