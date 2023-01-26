import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {

  const [characters, setCharacters] = useState(null);

  //Por que mete esto dentro del App y no fuera
  const reqApi = async () => {
    const api = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=3"
    );
    const frases = await api.json();
    setCharacters(frases);
  }

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi}></CharacterContainer>
      )}

    </Container>

  );
}

export default App;
