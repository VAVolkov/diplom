import React from 'react';
import MainHeader from './header/MainHeader';
import Products from './products/Products';


import styles from './mainStyle.module.scss';


export default function Main() {
   
    return ( 
        <>
        <div className={styles.mainList}>
            <MainHeader />
            <Products />
        </div>
        
        <link rel="stylesheet" href='./products/components/slider/components/slick/slick/slick.css'/>
        <link rel="stylesheet" href='./products/components/slider/components/slick/slick/slick-theme.css'/>
        <script src = "https://code.jquery.com/jquery-3.6.2.min.js"></script>
        <script src="./products/components/slider/components/slick/slick/slick.min.js"></script>
    </>
    );
} 