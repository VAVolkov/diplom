import React from 'react';
import styles from './catalogHealthFoodStyle.module.scss';
import MainHeader from '../../../main/header/MainHeader';


import MenuHealthFood from './components/menu/MenuHealthFood';
import CardsHealthFood from './components/cards/CardsHealthFood'
import SubscriptionHealthFood from './components/subscriptionHealthFood/SubscriptionHealthFood';
import FooterHealthFood from './footerHealthFood/FooterHealthFood';

export default function CatalogHealthFood() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <MenuHealthFood />
            <CardsHealthFood />
            <SubscriptionHealthFood />
            <FooterHealthFood />
        </div>
    ); 
} 