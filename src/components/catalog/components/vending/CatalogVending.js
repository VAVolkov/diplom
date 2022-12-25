import React from 'react';
import styles from './catalogVendingStyle.module.scss';
import MainHeader from '../../../main/header/MainHeader';


import MenuVending from './components/menu/MenuVending';
import CardsVending from './components/cards/CardsVending'
import SubscriptionVending from './components/subscriptionVending/SubscriptionVending';
import FooterVending from './footerVending/FooterVending';

export default function CatalogVending() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <MenuVending />
            <CardsVending />
            <SubscriptionVending />
            <FooterVending />
        </div>
    ); 
} 