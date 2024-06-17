import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

const RegistrationPage = () => {
  return (
    <>
      <Section>
        <Container>
          <RegistrationForm />
        </Container>
      </Section>
    </>
  );
};

export default RegistrationPage;
