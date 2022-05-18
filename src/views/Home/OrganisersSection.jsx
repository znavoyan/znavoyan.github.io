import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../../logo.svg";
import styles from './styles.module.scss';

const OrganisersSection = () => {

    const { t } = useTranslation('common');
    const organisersList = t('organisers.organisersList', { returnObjects: true });
    const teamList = t('organisers.teamList', { returnObjects: true });

    return (
        <div>
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
                                
                                <a href={`/`} className="logo">
                                    <img src={logo} alt="logo" />
                                </a>
                                
                                {organisersList.map((organiser, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={organiser.linkedUrl} className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                                                <img src={organiser.imgUrl} style={{width: organiser.width}} alt="" />
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
            <div className={styles["team"]}>
                <div className="container">
                    <div className="space-25-height"></div>
                    <div className="space-25-height"></div>
                    <h2 className="title big">
                        <span>{t('organisers.teamTitle')}</span>
                    </h2>
                    <div className="space-25-height"></div>
                    <div className="space-40-height"></div>
                    <div className="flex column center">
                        <div className="container flex center">

                            <div className="flex team-images flex-wrap">
                                
                                {teamList.map((organiser, index) => {
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
        </div>
    );
};

export default OrganisersSection;