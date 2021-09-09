import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HeaderImg from '../../images/header/header-img.png';
import Part1 from '../../images/partners/partner1.png';
import Part2 from '../../images/partners/partner2.png';
import Part3 from '../../images/partners/partner3.png';
import Part4 from '../../images/partners/partner4.png';
import {
  Button,
  Commit,
  Container,
  Desc,
  Headers,
  SideLeft,
  SideRight,
  Title,
} from "../styles/styles";

export const Header = () => {
  return (
    <Headers>
      <Container>
        <Headers.Top>
          <SideLeft>
            <Desc>Next genaretion platform</Desc>
            <Title>Artificial intelligence & Cyber security</Title>
            <Commit>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Commit>
            <Headers.Buttons>
              <Button width mr>Get Started</Button>
              <Button width>
                <PlayArrowIcon />
                Whatch Video
              </Button>
            </Headers.Buttons>
          </SideLeft>
          <SideRight>
            <img src={HeaderImg} alt='Header pic' />
          </SideRight>
        </Headers.Top>
        <Headers.Bottom>
          <img className='f-img' src={Part1} alt='partners' />
          <img src={Part2} alt='partners' />
          <img src={Part3} alt='partners' />
          <img src={Part4} alt='partners' />
        </Headers.Bottom>
      </Container>
    </Headers>
  );
};
