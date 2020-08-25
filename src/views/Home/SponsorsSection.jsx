import React from "react";
import { useTranslation } from "react-i18next";

import sponsor_vector_1 from '../../images/sponsor_vector_1.svg';
import sponsor_vector_2 from '../../images/simplytech.png';
import sponsor_vector_3 from '../../images/sponsor_vector_3.svg';
import sponsor_vector_4 from '../../images/sponsor_vector_4.svg';

import styles from './styles.module.scss';

const SponsorsSection = () => {

    const { t, i18n } = useTranslation('common');

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
                <div className="container sponsors-icons">

                    <div className="flex">
                        <div className={styles['img-content']}>
                            <a href="https://company.com" className="underlined" target="_anchor" rel="noopener noreferrer">
                                <img src={sponsor_vector_1} className="icon-box" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://www.simplytechnologies.net" className="underlined" target="_anchor" rel="noopener noreferrer">
                                <img src={sponsor_vector_2} className="icon-simply" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://company.com" className="underlined" target="_anchor" rel="noopener noreferrer">
                                <img src={sponsor_vector_3} className="icon-fb" alt="" />
                            </a>
                        </div>
                        <div className={styles['img-content']}>
                            <a href="https://company.com" className="underlined" target="_anchor" rel="noopener noreferrer">
                                <img src={sponsor_vector_4} className="icon-t" alt="" />
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