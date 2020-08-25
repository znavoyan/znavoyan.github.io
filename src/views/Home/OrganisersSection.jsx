import React from "react";
import { useTranslation } from "react-i18next";

import organiser_vector_1 from '../../images/Arsen_Yeghiazaryan.jpg';
import organiser_vector_2 from '../../images/Hrant_Khachatrian.jpg';
import organiser_vector_3 from '../../images/Zaven_Navoyan.jpg';
import organiser_vector_4 from '../../images/Andranik_Khachatryan.jpg';

import styles from './styles.module.scss';

const OrganisersSection = () => {

    const { t } = useTranslation('common');

    return (
        <div className={styles["organisers"]}>
            <div className="container">
                <div className="space-25-height"></div>
                <div className="space-25-height"></div>
                <h2 className="title big">
                    <span>{t('organisers')}</span>
                </h2>
                <div className="space-25-height"></div>
                <div className="space-40-height"></div>
                <div className="flex column center">
                    <div className="container">

                        <div className="flex organisers-images">
                            <div className={styles['img-content']}>
                                <a href="https://www.linkedin.com/in/arsen-yeghiazaryan-9abb4721" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                                    <img src={organiser_vector_1} alt="" className="rounded" />
                                    <div className={styles['text']}>
                                        <span>{t('speakers.speaker_11.name')}</span> {t('speakers.speaker_11.surname')}
                                    </div>
                                </a>
                            </div>
                            <div className={styles['img-content']}>
                                <img src={organiser_vector_2} alt="" className="rounded" />
                                <div className={styles['text']}>
                                    <span>{t('speakers.speaker_10.name')}</span> {t('speakers.speaker_10.surname')}
                                </div>
                            </div>

                        </div>
                        <div className="space-85-height"></div>
                        <div className="flex organisers-images">
                            <div className={styles['img-content']}>
                                <a href="https://www.linkedin.com/in/zavennavoyan" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                                    <img src={organiser_vector_3} alt="" className="rounded" />
                                    <div className={styles['text']}>
                                        <span>{t('speakers.speaker_13.name')}</span> {t('speakers.speaker_13.surname')}
                                    </div>
                                </a>
                            </div>
                            <div className={styles['img-content']}>
                                <a href="https://www.linkedin.com/in/andranik-khachatryan-4b6b82145" className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                                    <img src={organiser_vector_4} alt="" className="rounded" />
                                    <div className={styles['text']}>
                                        <span>{t('speakers.speaker_12.name')}</span> {t('speakers.speaker_12.surname')}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-85-height"></div>
                </div>
            </div>
        </div>
    );
};

export default OrganisersSection;