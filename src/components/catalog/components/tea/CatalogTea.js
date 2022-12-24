import React from 'react';
import styles from './catalogTeaStyle.module.scss';
import MainHeader from '../../../main/header/MainHeader';


import MenuTea from './components/menu/MenuTea';
import CardsTea from './components/cards/CardsTea'
import SubscriptionTea from './components/subscriptionTea/SubscriptionTea';
import FooterTea from './footerTea/FooterTea';

export default function CatalogTea() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <MenuTea />
            <CardsTea />
            <SubscriptionTea />
            <FooterTea />
        </div>
    ); 
} 