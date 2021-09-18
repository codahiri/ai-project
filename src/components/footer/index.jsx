import React from "react";
import { Footers, Container, Box, Brand } from "../styles/styles";
import Logo from "../../images/logo/logo.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";

export const Footer = () => {
  return (
    <Footers>
      <Container>
        <Footers.Content>
          <Footers.Logo>
            <Brand start>
              <img src={Logo} alt="Logo" />
              <span>Artificial Intelligence</span>
            </Brand>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and layouts and visual mockups.
            </p>

            <div className="link">
              <MailOutlineIcon />
              <span>Company@gmail.com.com</span>
            </div>
            <div className="link">
              <PhoneForwardedIcon />
              <span>Phone: (064) 332-1233</span>
            </div>
            <div className="link">
              <LocationOnOutlinedIcon />
              <span>450 Wall Street, USA, New York</span>
            </div>
          </Footers.Logo>
          <Box>
            <h1>INFORMATION</h1>
            <ul>
              <li>
                <a href="/">New Collection</a>
              </li>
              <li>
                <a href="/">About Store</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Latest News</a>
              </li>
              <li>
                <a href="/">Our Sitemap</a>
              </li>
              <li>
                <a href="/">Orders History</a>
              </li>
            </ul>
          </Box>
          <Box>
            <h1>FOOTER MENU</h1>
            <ul>
              <li>
                <a href="/">Instagram profile</a>
              </li>
              <li>
                <a href="/">New Collection</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Latest News</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Purchase Theme</a>
              </li>
            </ul>
          </Box>
          <Box>
            <h1>INFORMATION</h1>
            <ul>
              <li>
                <a href="/">New Collection</a>
              </li>
              <li>
                <a href="/">About Store</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Latest News</a>
              </li>
              <li>
                <a href="/">Our Sitemap</a>
              </li>
              <li>
                <a href="/">Orders History</a>
              </li>
            </ul>
          </Box>
          <Box className="last-box">
            <h1>ABOUT THE STORE</h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and layouts and visual mockups.
            </p>
            <div className="link">
              <span>www.company.com</span>
            </div>
            <div className="social">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
            <div className="lang">
              <LanguageIcon />
              <select id="lang">
                <option value="english" selected>English</option>
                <option value="uzbek">Uzbek</option>
                <option value="vw">Russia</option>
              </select>
            </div>
          </Box>
        </Footers.Content>
      </Container>
    </Footers>
  );
};