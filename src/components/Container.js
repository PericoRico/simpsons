import styled from "styled-components";

export default function Container({ children }) {
    return <Content>{children}</Content>;

}

//Crea un styled para sustituir en el div
const Content = styled.div`
    max-width:1200px;
    padding: 40px;
    margin: 0 auto;
`;

