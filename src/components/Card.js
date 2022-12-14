import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "./styles/Container.styles";
import { StyledTitle } from "./styles/Custom.styles";
import { H1, Image, P, Tag } from "./styles/Elements";
import Switch from "./Switch";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Switch />
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle text="React Styled Components" color="#fff" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button
            link="https://simple-react-card.netlify.app/"
            text="Watch now"
          />
          <Button
            link="https://github.com/suzon-ahmmed/simple-react-styled"
            text="Github repo"
          />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}
