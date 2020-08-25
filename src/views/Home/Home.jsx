import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";

import homeFrame from '../../images/homeFrame.svg';

import AboutSection from './AboutSection';
import SpeakersSection from './SpeakersSection';
import SponsorsSection from './SponsorsSection';
import OrganisersSection from './OrganisersSection';
// import MapSection from './MapSection';

import styles from './styles.module.scss';


const Home = () => {

    const { t, i18n } = useTranslation('common');

    const aboutBlock = useRef(null);

    const scrollDown = () => {
        aboutBlock.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div>
            <div className="container">
                <div className="flex flex-space-between column home">
                    <div></div>
                    <div className="flex flex-space-between full-width first-section">
                        <div className="flex align-start column">
                            <div className={styles["home-text"]}>
                                <div>{t('home.main.international')}</div>
                                <div dangerouslySetInnerHTML={{ __html: t('home.main.dataFestival') }}></div>
                                <div>{t('home.main.yerevan')}</div>
                            </div>
                            <div className="space-40-height"></div>
                            <div className="btn">
                                <div className="btn-cover blue-btn-cover"></div>
                                <a href="https://forms.gle/LZviScoxDHaSB1TJ8" target="_blank"><button className="blue">{t('home.main.register')}</button></a>
                            </div>
                        </div>
                        <img src={homeFrame} className="main" alt="" />
                    </div>
                    <div className="btn">
                        <button className="bordered white-border" onClick={scrollDown}>
                            <div className="flex center relative">
                                <span className={styles["btn-text"]}>{t('home.main.scrollDown')}</span>
                                <div className="flex column">
                                    <span className={styles["arrow-down"]}></span>
                                    <span className={styles["arrow-down"]}></span>
                                </div>
                            </div>
                        </button>
                        <div className="space-85-height"></div>
                    </div>
                </div>
                <div id="about" ref={aboutBlock}>
                    <AboutSection />
                </div>

            </div>

            <SpeakersSection />

            <SponsorsSection />

            <OrganisersSection />

            {/* <div id="location">
                <MapSection />
            </div> */}



        </div>
    );
}

export default Home;