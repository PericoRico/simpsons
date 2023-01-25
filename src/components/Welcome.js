import styled from "styled-components";
import Logo from "../pictures/the-simpson.png";

export default function WelcomeText(props) {
  const { reqApi } = props;

  return (
    <>
      <ContentLogo>
        <ImageLogo src={Logo} alt="logo simpsons" onClick={reqApi} />
      </ContentLogo>
      <SubTitle>Pulsa en la imagen para ver las mejores frases de los Simpsons</SubTitle>
    </>
  );

}

const SubTitle = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25;
`;

const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  &:hover{
    cursor:pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;