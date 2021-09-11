import React from "react";
import Carousel from "styled-components-carousel";
import { All, CarImg, Caros, CarText, CarTitle } from "../styles/styles";
import car1 from "../../images/carousel/car1.png";
import car2 from "../../images/carousel/car2.png";
import car3 from "../../images/carousel/car3.png";
import car5 from "../../images/carousel/car5.png";
import car4 from "../../images/carousel/car4.png";

export const Car = () => {
  return (
    <All marTop>
      <Carousel
        slidesToShow={10}
        //   center
        //   centerPadding={30}
        breakpoints={[
          {
            size: 200,
            settings: {
              slidesToShow: 1,
              showArrows: false,
              showIndicator: false,
              swipeable: true,
            },
          },
          {
            size: 600,
            settings: {
              slidesToShow: 3,
              showArrows: false,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: 1000,
            settings: {
              slidesToShow: 5,
              showArrows: false,
              showIndicator: true,
              center: false,
              swipeable: true,
            },
          },
        ]}
      >
        <Caros>
          <CarImg padding  src={car1} alt="car1" />
          <CarTitle pdTop>Naxly as the Winners in Global Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car2} alt="car2" />
          <CarTitle>Expert Prespective Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car3} alt="car3" />
          <CarTitle>Business Prespective Global Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car4} alt="car4" />
          <CarTitle>Value for Results in Global Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car5} alt="car5" />
          <CarTitle>Global Experience in Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car2} alt="car2" />
          <CarTitle>Expert Prespective Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car4} alt="car4" />
          <CarTitle>Value for Results in Global Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg padding src={car1} alt="car1" />
          <CarTitle pdTop>Expert Prespective Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car5} alt="car5" />
          <CarTitle>Global Experience in Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
        <Caros>
          <CarImg src={car3} alt="car3" />
          <CarTitle>Business Prespective Global Agency Awards</CarTitle>
          <CarText>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</CarText>
        </Caros>
      </Carousel>
    </All>
  );
};
