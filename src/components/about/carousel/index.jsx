import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarImg, CarouselDiv, FirstCarosel } from '../styles/styles'
import carImg from "../../images/about/about 4.png";


export const Carousel = () => {
    return (
        <CarouselDiv>
            <FirstCarosel>
                <CarImg src={carImg} alt='car1'/>
            </FirstCarosel>
        </CarouselDiv>
    )
}
