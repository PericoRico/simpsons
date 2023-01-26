import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    const { characters, reqApi } = props;
    console.log(characters);

    return (
        <>
            <DivCharacter>
                {characters.map((character, index) => (
                    <Character dataCharacter={character} key={index}></Character>
                ))}

            </DivCharacter>
            <DivButton>
                <Button onClick={reqApi}>Nuevas frases</Button>
            </DivButton>
        </>
    )

}

const DivCharacter = styled.div`
    display: flex;
`;

const DivButton = styled.div`
    width: 100%;
    text-align:center;
    `;

const Button = styled.button`
    width: 250px;
    background-color:#e76f51;
    color:#fff;
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;

    &:hover{
        cursor:pointer;
        background-color: #1c0950;
    }
`;