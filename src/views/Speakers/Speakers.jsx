import React from "react";
import { useTranslation } from "react-i18next";

import speakerFrame from '../../images/speakerFrame.svg';
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

const Speakers = () => {

    const { t } = useTranslation('common');

    return <div className="container">
        <div className="speakers">
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div>{t('speakers.our')}</div>
                            <div><span>{t('speakers.title')}</span></div>
                        </div>
                    </div>

                    <img src={speakerFrame} className="main" alt="" />
                </div>
            </div>
            <div className="space-85-height"></div>
            <div>

                <div className="space-100-height"></div>
                <div className="space-40-height"></div>

                <div className="flex speakers-images align-start">

                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/erik-harutyunyan-293458131" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_1} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_1.name')}</span> {t('speakers.speaker_1.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_1.position')} <br></br>
                                {t('speakers.speaker_1.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/stepansargsyan" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_2} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_2.name')}</span> {t('speakers.speaker_2.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_2.position')} <br></br>
                                {t('speakers.speaker_2.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/levan-tsinadze-246a1b2a" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_3} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_3.name')}</span> {t('speakers.speaker_3.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_3.position')} <br></br>
                                {t('speakers.speaker_3.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/davidkocharian" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_4} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_4.name')}</span> {t('speakers.speaker_4.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_4.position')} <br></br>
                                {t('speakers.speaker_4.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://github.com/hrayrhar" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_5} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_5.name')}</span> {t('speakers.speaker_5.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_5.position')} <br></br>
                                {t('speakers.speaker_5.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/shant-navasardyan-1302aa149" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_6} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_6.name')}</span> {t('speakers.speaker_6.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_6.position')} <br></br>
                                {t('speakers.speaker_6.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <a href="https://ru.linkedin.com/in/manvelavetisian" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_7} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_7.name')}</span> {t('speakers.speaker_7.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_7.position')} <br></br>
                                {t('speakers.speaker_7.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/robert-yenokyan" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_8} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_8.name')}</span> {t('speakers.speaker_8.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_8.position')} <br></br>
                                {t('speakers.speaker_8.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <div className="flex center column">
                            <img src={speaker_9} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_9.name')}</span> {t('speakers.speaker_9.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_9.position')} <br></br>
                                {t('speakers.speaker_9.company')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <div className="flex center column">
                            <img src={speaker_10} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_10.name')}</span> {t('speakers.speaker_10.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_10.position')} <br></br>
                                {t('speakers.speaker_10.company')}
                            </p>
                        </div>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/arsen-yeghiazaryan-9abb4721" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_11} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_11.name')}</span> {t('speakers.speaker_11.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_11.position')} <br></br>
                                {t('speakers.speaker_11.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/andranik-khachatryan-4b6b82145" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_12} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_12.name')}</span> {t('speakers.speaker_12.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_12.position')} <br></br>
                                {t('speakers.speaker_12.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/zavennavoyan" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_13} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_13.name')}</span> {t('speakers.speaker_13.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_13.position')} <br></br>
                                {t('speakers.speaker_13.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/akobel" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_14} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_14.name')}</span> {t('speakers.speaker_14.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_14.position')} <br></br>
                                {t('speakers.speaker_14.company')}
                            </p>
                        </a>
                    </div>
                    <div className="space-25-height"></div>
                    <div className="flex column">
                        <a href="http://linkedin.com/in/inesmontani" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_15} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_15.name')}</span> {t('speakers.speaker_15.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_15.position')} <br></br>
                                {t('speakers.speaker_15.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <a href="https://www.linkedin.com/in/tnazaryan" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker_16} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{t('speakers.speaker_16.name')}</span> {t('speakers.speaker_16.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_16.position')} <br></br>
                                {t('speakers.speaker_16.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
                <div className="flex speakers-images align-start">
                    <div className="flex column">
                        <a href="https://am.linkedin.com/in/hakob-tamazyan-51aa67102" className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            {/* <img src={speaker_17} alt="" className="rounded" /> */}
                            <p className="img-title">
                                <span>{t('speakers.speaker_17.name')}</span> {t('speakers.speaker_17.surname')}
                            </p>
                            <p className="img-paragraph">
                                {t('speakers.speaker_17.position')} <br></br>
                                {t('speakers.speaker_17.company')}
                            </p>
                        </a>
                    </div>
                </div>
                <div className="space-25-height"></div>
            </div>
            <div className="space-100-height"></div>
            <div className="space-20-height"></div>
        </div>
    </div>
};


export default Speakers;