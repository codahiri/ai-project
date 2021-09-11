import React from "react";
import {
  All,
  Commit,
  Container,
  Headers,
  SideLeft,
  SideRight,
  Title,
} from "../styles/styles";
import blogImg from "../../images/blog/blog.png";

export const Blog = () => {
  return (
    <All>
      <Container>
        <Headers.Top style>
          <SideLeft>
            <Title>What our clients say about our awesome solutions</Title>
            <Commit>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it who do
              not know. <br /> <br /> Lorem ipsum is placeholder text commonly
              used in the graphic, print, and publishing . <br /> <br />
              Lorem ipsum is placeholder previewing layouts and visual mockups.{" "}
              <br /> <br />
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Commit>
          </SideLeft>
          <SideRight>
            <img src={blogImg} alt="blogImg" />
          </SideRight>
        </Headers.Top>
      </Container>
    </All>
  );
};
