import React from 'react';
import MainHeader from './header/MainHeader';
import Products from './products/Products';
import WorkWithUs from './workWithUs/WorkWithUs';
import Cooking from './cooking/Сooking';
import News from './news/News';
import WeInInstagram from './weInInstagram/WeInInstagram';
import Subscription from './subscription/Subscription';
import Footer from './footer/Footer';

import styles from './mainStyle.module.scss';


export default function Main() {
   
    return ( 
        <>
        <div className={styles.mainList}>
            <MainHeader />
            <Products />
            <WorkWithUs />
            <Cooking />
            <News />
            <WeInInstagram />
            <Subscription />
            <Footer />
        </div>
        
        <link rel="stylesheet" href='./products/components/slider/components/slick/slick/slick.css'/>
        <link rel="stylesheet" href='./products/components/slider/components/slick/slick/slick-theme.css'/>
        <script src = "https://code.jquery.com/jquery-3.6.2.min.js"></script>
        <script src="./products/components/slider/components/slick/slick/slick.min.js"></script>
    </>
    );
} 