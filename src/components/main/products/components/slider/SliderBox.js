import React from 'react';
import Slider from 'react-slick';
import './sliderBoxStyle.scss';
import Slide from './components/Slide';

import "../slider/components/slick/slick/slick.css";
import "../slider/components/slick/slick/slick-theme.css"


export default function SliderBox() {
   
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return ( 
    <Slider className="main" {...settings}>
        <Slide />
        <Slide />
        <Slide />
    </Slider>
    ); 
} 