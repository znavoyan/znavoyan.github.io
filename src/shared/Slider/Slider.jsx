import React from "react";
import { useTranslation } from "react-i18next";

import speaker_1 from '../../images/Erik_Harutyunyan.jpg';
import speaker_2 from '../../images/Stepan_Sargsyan.jpg';
import speaker_3 from '../../images/Levan_Tsinadze.png';
import speaker_4 from '../../images/Davit_Kocharian.png';
import speaker_5 from '../../images/Hrayr_Harutyunyan.png';
import speaker_6 from '../../images/Shant_Navasardyan.jpg';
import speaker_7 from '../../images/Manvel_Avetissian.jpeg';
import speaker_8 from '../../images/Robert_Yenokyan.jpg';
import speaker_9 from '../../images/Karen_Hambardzumyan.jpg';
import speaker_10 from '../../images/Hrant_Khachatrian.jpg';
import speaker_11 from '../../images/Arsen_Yeghiazaryan.jpg';
import speaker_12 from '../../images/Andranik_Khachatryan.jpg';
import speaker_13 from '../../images/Zaven_Navoyan.jpg';
import speaker_14 from '../../images/Artur_Kobelyan.png';
import speaker_15 from '../../images/Ines_Montani.jpg';
import speaker_16 from '../../images/Tigran_Nazaryan.jpg';
// import speaker_17 from '../../images/Hakob_Tamazyan.jpg';

import styles from "./styles.module.scss";

const Slider = () => {

    const { t } = useTranslation('common');

    return (
        <div className={styles["Marquee"]}>
            <div className={styles["Marquee-content"]}>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/erik-harutyunyan-293458131" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_1} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_1.name')}</span> {t('speakers.speaker_1.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_1.position')} <br></br>
                                {t('speakers.speaker_1.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/stepansargsyan" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_2} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_2.name')}</span> {t('speakers.speaker_2.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_2.position')} <br></br>
                                {t('speakers.speaker_2.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/levan-tsinadze-246a1b2a" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_3} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_3.name')}</span> {t('speakers.speaker_3.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_3.position')} <br></br>
                                {t('speakers.speaker_3.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/davidkocharian" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_4} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_4.name')}</span> {t('speakers.speaker_4.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_4.position')} <br></br>
                                {t('speakers.speaker_4.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://github.com/hrayrhar" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_5} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_5.name')}</span> {t('speakers.speaker_5.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_5.position')} <br></br>
                                {t('speakers.speaker_5.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/shant-navasardyan-1302aa149" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_6} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_6.name')}</span> {t('speakers.speaker_6.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_6.position')} <br></br>
                                {t('speakers.speaker_6.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://ru.linkedin.com/in/manvelavetisian" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_7} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_7.name')}</span> {t('speakers.speaker_7.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_7.position')} <br></br>
                                {t('speakers.speaker_7.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/robert-yenokyan" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_8} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_8.name')}</span> {t('speakers.speaker_8.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_8.position')} <br></br>
                                {t('speakers.speaker_8.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    {/* <a href="#" className="link-no-decoration" target="_blank" rel="noopener noreferrer"> */}
                    <div className="flex column">
                        <img src={speaker_9} alt="" className="rounded" />
                        <p className="img-title">
                            <span>{t('speakers.speaker_9.name')}</span> {t('speakers.speaker_9.surname')}
                        </p>
                        <p className="img-paragraph">
                            {t('speakers.speaker_9.position')} <br></br>
                            {t('speakers.speaker_9.company')}
                        </p>
                    </div>
                    {/* </a> */}
                </div>
                <div className={styles["Marquee-tag"]}>
                    {/* <a href="#" className="link-no-decoration" target="_blank" rel="noopener noreferrer"> */}
                    <div className="flex column">
                        <img src={speaker_10} alt="" className="rounded" />
                        <p className="img-title">
                            <span>{t('speakers.speaker_10.name')}</span> {t('speakers.speaker_10.surname')}
                        </p>
                        <p className="img-paragraph">
                            {t('speakers.speaker_10.position')} <br></br>
                            {t('speakers.speaker_10.company')}
                        </p>
                    </div>
                    {/* </a> */}
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/arsen-yeghiazaryan-9abb4721" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_11} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_11.name')}</span> {t('speakers.speaker_11.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_11.position')} <br></br>
                                {t('speakers.speaker_11.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/andranik-khachatryan-4b6b82145" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_12} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_12.name')}</span> {t('speakers.speaker_12.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_12.position')} <br></br>
                                {t('speakers.speaker_12.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/zavennavoyan" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_13} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_13.name')}</span> {t('speakers.speaker_13.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_13.position')} <br></br>
                                {t('speakers.speaker_13.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/akobel" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_14} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_14.name')}</span> {t('speakers.speaker_14.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_14.position')} <br></br>
                                {t('speakers.speaker_14.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="http://linkedin.com/in/inesmontani" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_15} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_15.name')}</span> {t('speakers.speaker_15.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_15.position')} <br></br>
                                {t('speakers.speaker_15.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://www.linkedin.com/in/tnazaryan" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            <img src={speaker_16} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_16.name')}</span> {t('speakers.speaker_16.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_16.position')} <br></br>
                                {t('speakers.speaker_16.company')}
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles["Marquee-tag"]}>
                    <a href="https://am.linkedin.com/in/hakob-tamazyan-51aa67102" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                        <div className="flex column">
                            {/* <img src={speaker_17} alt="" className="rounded" /> */}
                            <p className="img-title">
                                <span>{t('speakers.speaker_17.name')}</span> {t('speakers.speaker_17.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_17.position')} <br></br>
                                {t('speakers.speaker_17.company')}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;