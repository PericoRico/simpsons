import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {

  const reqApi = async () => {
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");
    const frase = await api.json();
    console.log(frase);
  }

  reqApi();

  return (
    <Container>
      <Header />
      <Welcome />
    </Container>

  );
}

export default App;
