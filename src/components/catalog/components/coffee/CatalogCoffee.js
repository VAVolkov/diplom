import React from 'react';
import styles from './catalogCoffeeStyle.module.scss';
import MainHeader from '../../../main/header/MainHeader';
import Menu from './components/menu/Menu';
import Cards from './components/cards/Cards';
import Subscription2 from './components/subscriptionLevel__2/Subscription2';
import Footer2 from './footerLevel__2/Footer2';

//import cupWithCoffee from '../../../images/cupWithCoffee.png';

export default function CatalogCoffee() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <Menu />
            <Cards />
            <Subscription2 />
            <Footer2 />
        </div>
    ); 
} 