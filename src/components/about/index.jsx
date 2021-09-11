import React from "react";
import {
  All,
  Button,
  Commit,
  Container,
  Headers,
  SideLeft,
  SideRight,
  Title,
} from "../styles/styles";
import aboutImg from "../../images/about/about 4.png";

export const About = () => {
  return (
    <All>
      <Container>
        <Headers.Top>
          <SideRight>
            <img className='abs' src={aboutImg} alt="aboutImg" />
          </SideRight>
          <SideLeft margin>
            <Title>ArtApply AI, Deep Learning and Data Sciece to solve</Title>
            <Commit>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Commit>
            <Headers.Buttons>
              <Button width mr>
                Get Started
              </Button>
            </Headers.Buttons>
          </SideLeft>
        </Headers.Top>
      </Container>
    </All>
  );
};
