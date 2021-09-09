import styled from "styled-components";

const colors = {
  nav: "#0A121F",
  header: `#08101E`,
  btn: "#3A68B8",
  commit: "#B5B7BB",
};

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background: #3a68b8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover{
    opacity: 0.7;
  }
  :active{
    transform: scale(0.9);
  }
`;

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
  .nav-brand {
    display: flex;
    align-items: center;
    img {
      height: 45px;
    }
    span {
      margin-left: 5px;
      color: ${colors.btn};
    }
  }
  .nav-items {
    display: flex;
    .f-child{
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
