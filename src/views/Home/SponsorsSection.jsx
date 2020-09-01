import React from "react";
import { useTranslation } from "react-i18next";

import sponsor_vector_1 from '../../images/webbFontaine.png';
import sponsor_vector_2 from '../../images/simplytech.png';
import sponsor_vector_3 from '../../images/krisp.png';
import sponsor_vector_4 from '../../images/picsart.png';

import styles from './styles.module.scss';

const SponsorsSection = () => {

    const { t } = useTranslation('common');

    return (
        <div className={styles["sponsors"]}>
            <div className="space-25-height"></div>
            <div className="space-25-height"></div>
            <h2 className="title big">
                {t('sponsors.our')} <span>{t('sponsors.title')}</span>
            </h2>
            <div className="space-25-height"></div>
            <div className="space-40-height"></div>
            <div className="flex column center">
                <div className="sponsors-icons">

                    <div className="flex">
                        <div className={styles['img-content']}>
                            <a href="https://webbfontaine.com" className="underlined" target="_blank" rel="noopener noreferrer">
                                <img src={sponsor_vector_1} className="icon-webb-fontaine" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://www.simplytechnologies.net" className="underlined" target="_blank" rel="noopener noreferrer">
                                <img src={sponsor_vector_2} className="icon-simply" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://krisp.ai" className="underlined" target="_blank" rel="noopener noreferrer">
                                <img src={sponsor_vector_3} className="icon-krisp" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://picsart.com" className="underlined" target="_blank" rel="noopener noreferrer">
                                <img src={sponsor_vector_4} className="icon-picsart" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-85-height"></div>
                <div className="space-25-height"></div>
                <div className="flex">
                    <div className="link">
                        <a href="/sponsors">
                            <span>{t('sponsors.seeAll')}</span>
                        </a>
                    </div>
                </div>
                <div className="space-85-height"></div>
            </div>

        </div>
    );
};

export default SponsorsSection;