import styled from "styled-components";

// colors
const colors = {
  nav: "#0A121F",
  header: `#08101E`,
  btn: "#3A68B8",
  commit: "#B5B7BB",
};
// container
export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
// button
export const Button = styled.div`
  width: ${({ width }) => (width ? "150px" : "100px")};
  height: 40px;
  background: #3a68b8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ mr }) => (mr ? "15px" : "0")};

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    opacity: 0.7;
  }
  :active {
    transform: scale(0.9);
  }
`;
// barnd
export const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    height: 45px;
  }
  span {
    margin-left: 5px;
    color: ${colors.btn};
  }
`;

////////////

// navbar section
export const Nav = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${colors.nav};
`;
export const Navbars = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-items {
    display: flex;
    .f-child {
      margin-left: 0;
    }
    li {
      list-style: none;
      margin-left: 25px;
      a {
        text-decoration: none;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #ffffff;
      }
    }
  }
`;

// header section
export const Headers = styled.div`
  width: 100%;
  background-color: ${colors.header};
  padding: 50px 0 70px;
`;
Headers.Top = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: ${({style})=>style && '235px'}; */
`;
Headers.Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
  .f-img {
    margin-left: 0;
  }
  img {
    margin-left: 30px;
  }
`;
export const SideLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  /* margin-top: 300px;
  margin-left: 118px; */
  margin: ${({ margin }) => margin && "300px 0 0 90px"};
`;
export const SideRight = styled.div`
  width: 50%;
  .abs {
    position: absolute;
    top: 130px;
    left: 256px;
  }
`;
export const Desc = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.btn};
`;
export const Title = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 100%;
  color: #ffffff;
  margin: 10px 0 15px;
`;
export const Commit = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  margin-bottom: 40px;
`;
Headers.Buttons = styled.div`
  display: flex;
  align-items: center;
`;

// about section
export const All = styled.div`
  background-color: #020a18;
  width: 100%;
  height: 800px;
  position: relative;
  padding-top: ${({ marTop }) => marTop && "170px"};
`;

export const AboutImg = styled.img`
  margin: 130px 0 0 0;
`;

// carousel section
export const Caros = styled.div`
  width: 347px;
  height: 389px;
  background-color: #0f1624;
  backdrop-filter: blur(200px);
  border-radius: 10px;
  margin-left: 30px;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const CarImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: ${({ padding }) => (padding ? "47px" : "30px")};
  box-sizing: border-box;
`;

export const CarTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 125%;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  margin-top: ${({ pdTop }) => (pdTop ? "46px" : "30px")};
`;
export const CarText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 30px;
`;



// footer section
export const Box = styled.div``;
