import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Tadeusz Waluga"
        body={
          <>nanana</>
        }
      />
    </Container>
  );
};

export default AuthorPage;
