import React from 'react';
import Slider from 'react-slick';
import './sliderProductsStyle.scss';
import SlideProducts from './components/SlideProducts';

import "../sliderProducts/components/slick/slick/slick.css";
import "../sliderProducts/components/slick/slick/slick-theme.css"


export default function SliderProducts() {
   
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }

    return (
        <> 
            <div className='headerName'> Товары со скидкой </div>
            <div className='headerText'> Наша компания предлагает покупать товар со скидкой не только в дни распродаж или в течение действия ограниченных предложений, но и пользоваться скидками постоянно! </div>
            
            <Slider className="mainProducts" {...settings}>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
                <SlideProducts discount = {true}/>
            </Slider>
        </>
    ); 
} 