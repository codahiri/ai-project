import React from "react";
import { Footers, Container, Box, Brand } from "../styles/styles";
import Logo from '../../images/logo/logo.png';

export const Footer = () => {
  return (
    <Footers>
      <Container>
        <Box>
          <Brand start>
            <img src={Logo} alt="Logo" />
            <span>Artificial Intelligence</span>
          </Brand>
        </Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
      </Container>
    </Footers>
  );
};
