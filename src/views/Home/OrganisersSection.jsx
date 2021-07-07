import React from "react";
import { useTranslation } from "react-i18next";

import styles from './styles.module.scss';

const OrganisersSection = () => {

    const { t } = useTranslation('common');
    const organisersList = t('organisers.organisersList', { returnObjects: true });

    return (
        <div className={styles["organisers"]}>
            <div className="container">
                <div className="space-25-height"></div>
                <div className="space-25-height"></div>
                <h2 className="title big">
                    <span>{t('organisers.title')}</span>
                </h2>
                <div className="space-25-height"></div>
                <div className="space-40-height"></div>
                <div className="flex column center">
                    <div className="container flex center">

                        <div className="flex organisers-images flex-wrap">
                            
                            {organisersList.map((organiser, index) => {
                                    return (
                                        <div className={styles['img-content']} key={index}>
                                            <a href={organiser.linkedUrl} className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                                            <img src={organiser.imgUrl} alt="" className="rounded" />
                                                <div className={styles['text']}>
                                                    <span>{organiser.name}</span> {organiser.surname}
                                                </div>
                                            </a>
                                        </div>
                                    )

                            })}
                        </div>
                    </div>
                    <div className="space-85-height"></div>
                </div>
            </div>
        </div>
    );
};

export default OrganisersSection;