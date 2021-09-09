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
  width: ${({width})=>width?'150px':'100px'};
  height: 40px;
  background: #3a68b8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({mr})=>mr?'15px':'0'};

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
  padding: 100px 0 70px;
`;
Headers.Top = styled.div`
  display: flex;
  align-items: center;
`;
Headers.Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
  .f-img{
    margin-left: 0;
  }
  img{
    margin-left: 30px;
  }
`;
export const SideLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const SideRight = styled.div`
  width: 50%;
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
`