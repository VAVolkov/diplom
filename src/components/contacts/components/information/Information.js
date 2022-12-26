import React, { useState} from 'react';
import styles from './informationStyle.module.scss';


export default function Information() {
       
    const [infoContacts,setInfoContacts] = useState(styles.infoContacts);
    const [infoShops, setInfoShops] = useState(styles.noShow);

    return ( 
        <>
        <div className={styles.main}>
            <div className={styles.labelPage}>Главная  Контакты</div>
            <div className={styles.btnInfoContacts} onClick = {() => {
                                                                        setInfoContacts(styles.infoContacts);
                                                                        setInfoShops(styles.noShow);
                                                                    }}>Контакты</div>
            <div className={styles.btnInfoShops} onClick = {() => {
                                                                setInfoContacts(styles.noShow);
                                                                setInfoShops(styles.infoShops);
                                                            }}>Наши магазины</div>

            <div className={styles.infoPlace}>
                <div className={styles.informtion}>
                    <div className={infoContacts}>
                        <div className={styles.contactWithUs}>Связаться с нами:</div>
                        <div className={styles.contactWithUsContent}>+7 (401) 237 53 43 <br/> Import@kldefine.com</div>
                        <div className={styles.registeredOffice}>Юридический адрес:</div>
                        <div className={styles.registeredOfficeContent}>Российская, Федерация, 238310, 
                                                                    Калининградская <br/> область, Гурьевский район, поселок
                                                                    Васильково, улица <br/> Шатурская, дом 4А </div>
                        <div className={styles.storageAddress}>Адрес склада:</div>
                        <div className={styles.storageAddressContent}>Московская область, Балашиха, Западная <br/> промзона, 
                                                                    Шоссе энтузиастов 1</div>
                    </div>
                    <div className={infoShops}>
                        <div className={styles.shopsSaintPetersburg}>Наши магазины г. Санкт-Петербург</div>
                        <div className={styles.shopsSaintPetersburgContent}> Гороховая, 53 <br/> Московский, 53</div>
                        <div className={styles.shopsKaliningrad}>Наши магазины Калининградская обл.</div>
                        <div className={styles.shopsKaliningradContent}> Советск, Гончарова 2а <br/> Черняховск, Пионерская 1 <br/> 
                                                                            Ульяны-Громовой 15 <br/> Советский проспект 6а <br/> 
                                                                            Гурьевск, Каштановая 1г <br/> Черняховского 15 <br/> Панина 2а <br/> 
                                                                            Ленинский 8Б <br/> Аксакова 133 <br/> Липовая Аллея 2 </div>
                    </div>

                </div>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d87727.52055884498!2d20.4783590175011!3d54.70425826599574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1672081879183!5m2!1sru!2sua" 
                           className={styles.mapLoads} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </>
    );
} 