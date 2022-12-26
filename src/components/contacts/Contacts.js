import React from 'react';
import MainHeader from '../main/header/MainHeader';
import SubscriptionContacts from './components/subscriptionContacts/SubscriptionContacts';
import FooterContacts from './components/footerContacts/FooterContacts';
import Information from './components/information/Information';
import styles from './contactsStyle.module.scss';


export default function Contacts() {
   
    return ( 
        <>
        <div className={styles.main}>
            <MainHeader />
            <Information />
            <SubscriptionContacts />
            <FooterContacts />
        </div>
    </>
    );
} 