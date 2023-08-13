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
          <>
            <p>
              Mam na imię <b>Tadeusz</b>. Jestem ciekawy świata i lubię uczyć się nowych rzeczy.
            </p>
            <p>
              Podczas pandemii ukończyłem kurs Pythona. Ponieważ Pythona za pomocą aplikacji webowych takich jak: <i>Djanogo</i> i <i>Flask</i> wykorzystyje się również do tworzenia stron internetowych, zainteresowałem się frontendem i znalazłem wpaniały kurs Java Script w Szkole Programowania YouCode.
              Na razie programowanie to moje hobby, ale liczę, że uda mi się zdobyć pracę w tym zawodzie 💻.
            </p>
            <p>
              Lubię aktywność fizyczną i często jeżdzę na rowerze 🚴‍♀️, pływam 🏊‍♂️, ćwiczę 🧘‍♂️ i spaceruję z moimi psami 🐕🐕.
            </p>
            <p>
              Posiadam patent sternika jachtowego i gdy mam okazję to również żegluję ⛵. Marzę, żeby wpłynąć w dłuższy rejs do ciekawych miejsc.
            </p>
            <p>
              Lubię również literaturę i filmy sciens-fiction 👽 i fantasy 🧙‍♂️🧙‍♀️.
            </p>
            <p>
              Czasem gram na gitarze 🎸 i śpiewam a czsem tańczę 🕺.
              Nie mam wię czasu na nudę.
            </p>
          </>
        }
      />
    </Container>
  );
};

export default AuthorPage;
