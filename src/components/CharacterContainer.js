import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    const { characters } = props;
    console.log(characters);

    return (
        <DivCharacter>
            {characters.map((character, index) => (
                <Character dataCharacter={character} key={index}></Character>
            ))}
        </DivCharacter>
    )

}

const DivCharacter = styled.div`
    display: flex;
`;