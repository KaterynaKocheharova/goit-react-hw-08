import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

const LoginPage = () => {
  return (
    <>
      <Section>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};

export default LoginPage;
