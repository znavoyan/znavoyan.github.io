import React from "react";
import { useTranslation } from "react-i18next";

import sponsorFrame from '../../images/sponsorFrame.svg';
import sponsor_vector_1 from '../../images/sponsor_vector_1.svg';
import sponsor_vector_2 from '../../images/simplytech.png';

const Sponsors = () => {

    const { t } = useTranslation('common');

    return <div className="container">
        <div className="sponsors">
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div>{t('sponsors.our')}</div>
                            <div><span>{t('sponsors.title')}</span></div>
                        </div>
                    </div>
                    <img src={sponsorFrame} className="main" alt="" />
                </div>
            </div>
            <div className="space-85-height"></div>
            <p className="paragraph">
                {t('sponsors.text')}
            </p>

            <div className="space-100-height"></div>

            <div className="flex sponsors-icons">
                <div className="flex">
                    <div className="flex column">
                        <a className="underlined" href="https://company.com" target="_blank" rel="noopener noreferrer">
                            <img src={sponsor_vector_1} className="icon-box" alt="" />
                        </a>
                        <div className="space-25-height"></div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex column">
                        <a className="underlined" href="https://www.simplytechnologies.net" target="_blank" rel="noopener noreferrer">
                            <img src={sponsor_vector_2} className="icon-simply" alt="" />
                        </a>
                        <div className="space-25-height"></div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex column">
                        <a className="underlined" href="https://company.com" target="_blank" rel="noopener noreferrer">
                            <img src={sponsor_vector_1} className="icon-box" alt="" />
                        </a>
                        <div className="space-25-height"></div>
                    </div>
                </div>

                <div className="flex">
                    <div className="space-10-height"></div>
                    <div className="flex column">
                        <a className="underlined" href="https://company.com" target="_blank" rel="noopener noreferrer">
                            <img src={sponsor_vector_1} className="icon-box" alt="" />
                        </a>
                        <div className="space-25-height"></div>
                    </div>
                </div>

            </div>
            <div className="space-100-height"></div>
            <div className="space-40-height"></div>
        </div>
    </div >
};


export default Sponsors;