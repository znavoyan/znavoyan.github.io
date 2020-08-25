import React from "react";
import { useTranslation } from "react-i18next";

import { Slider } from '../../shared';

import styles from './styles.module.scss';

const SpeakersSection = () => {

    const { t } = useTranslation('common');

    return (
        <div className={styles["slider"]}>
            <div className="space-20-height"></div>
            <div className="space-85-height"></div>
            <div className="space-85-height"></div>
            <h2 className="title">
                {t('speakers.our')} <span>{t('speakers.title')}</span>
            </h2>
            <div className="space-40-height"></div>
            <div className="space-25-height"></div>
            <div className={styles["shadow-left"]}></div>
            <div className={styles["shadow-right"]}></div>
            <Slider />

            <div className="space-40-height"></div>
            <div className="flex center">
                <a href="/speakers">
                    <div className="btn big-pink">
                        <div className="btn-cover medium-btn-cover pink-btn-cover"></div>
                        <button className="big bordered medium big-pink-border">
                            <span>{t('speakers.more')}</span>
                        </button>

                    </div>
                </a>
            </div>
            <div className="space-20-height"></div>
            <div className="space-85-height"></div>
            <div className="space-85-height"></div>
        </div>
    );
};

export default SpeakersSection;