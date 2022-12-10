import React from 'react';
import MainHeader from './header/MainHeader';
//import { images } from './ImagesDB';
import styles from './mainStyle.module.scss';

export default function Main() {
   
    return ( 
    <div className={styles.mainList}>
        <MainHeader />
    </div>
    );
} 