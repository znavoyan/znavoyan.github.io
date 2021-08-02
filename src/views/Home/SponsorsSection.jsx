import React from "react";
import { useTranslation } from "react-i18next";

import styles from './styles.module.scss';

const SponsorsSection = () => {

    const { t } = useTranslation('common');
    const generalSponsorsList = t('sponsors.generalSponsorsList', { returnObjects: true });
    const sponsorsList = t('sponsors.sponsorsList', { returnObjects: true });
    const siteSponsorsList = t('sponsors.siteSponsorsList', { returnObjects: true });

    return (
        <div className={styles["sponsors"]}>
            <div className="space-25-height"></div>
            <div className="space-25-height"></div>
        
            <div className="flex column center">
            {!!generalSponsorsList.length && <div className={`sponsors-icons ${styles["sponsors-icons"]}`}>

                    <h2 className="title big">
                        <div dangerouslySetInnerHTML={{ __html: t('sponsors.generalSponsorsTitle') }}></div>
                    </h2>
                    <div className="space-25-height"></div>
                    <div className="space-40-height"></div>

                    <div className="sponsors-columns">
                        {generalSponsorsList.map((sponsor, index) => {
                            return (<div className={styles['img-content']} key={index}>
                                        <a href={sponsor.linkedUrl} className="underlined" target="_blank" rel="noopener noreferrer">
                                            <img src={sponsor.imgUrl} className="icon-sponsor" alt="" />
                                        </a>
                                    </div>)
                        })}
                    </div>
                    <div className="space-85-height"></div>
                    <div className="space-25-height"></div>
                </div>}

                {!!sponsorsList.length && <div className="sponsors-icons">

                    <h2 className="title big">
                        <div dangerouslySetInnerHTML={{ __html: t('sponsors.sponsorsTitle') }}></div>
                    </h2>
                    <div className="space-25-height"></div>
                    <div className="space-40-height"></div>

                    <div className="sponsors-columns flex flex-wrap flex-start">
                        {sponsorsList.map((sponsor, index) => {
                            return (<div className={styles['img-content']} key={index}>
                                        <a href={sponsor.linkedUrl} className="underlined" target="_blank" rel="noopener noreferrer">
                                            <img src={sponsor.imgUrl} className="icon-sponsor" alt="" />
                                        </a>
                                    </div>)
                        })}
                    </div>
                    <div className="space-85-height"></div>
                    <div className="space-25-height"></div>
                </div>}

                {!!siteSponsorsList.length && <div className="sponsors-icons">

                    <h2 className="title big">
                        <div dangerouslySetInnerHTML={{ __html: t('sponsors.siteSponsorsTitle') }}></div>
                    </h2>
                    <div className="space-25-height"></div>
                    <div className="space-40-height"></div>

                    <div className="sponsors-columns flex flex-wrap flex-start">
                        {siteSponsorsList.map((sponsor, index) => {
                            return (<div className={styles['img-content']} key={index}>
                                        <a href={sponsor.linkedUrl} className="underlined" target="_blank" rel="noopener noreferrer">
                                            <img src={sponsor.imgUrl} className="icon-sponsor" alt="" />
                                        </a>
                                    </div>)
                        })}
                    </div>
                    <div className="space-85-height"></div>
                    <div className="space-25-height"></div>
                </div>}

                <div className="flex">
                    <div className="link">
                        <a href="/#/sponsors">
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