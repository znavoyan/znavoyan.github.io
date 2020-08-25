import React from "react";
import { useTranslation } from "react-i18next";
import {
    FacebookOutlined,
    CalendarOutlined
} from '@ant-design/icons';

import { Tooltip } from "../../shared";

const AboutSection = () => {
    const { t } = useTranslation('common');
    const facebookPageUrl = "https://facebook.com/datafestYerevan";
    const facebookEventPageUrl = "https://facebook.com/events/3676170732411668";

    return (
        <div className="about">
            <div className="space-85-height"></div>
            <h2 className="title">
                {t('home.about.title_first_part')} <span>{t('home.about.title_second_part')}</span>
            </h2>
            <div className="paragraph">
                {t('home.about.text')}
                <div className="flex column">
                    <div className="space-25-height"></div>
                    <div className="flex">
                        <p>{t('home.about.followUs')}</p>
                        <div className="space-25-width"></div>
                        <a href={facebookPageUrl} className="url" target="_blank" rel="noopener noreferrer">
                            <Tooltip tooltipText={t('home.about.facebookPageText')} />
                            <FacebookOutlined />
                            <div className="icon-shadow"></div>
                        </a>
                        <div className="space-25-width"></div>
                        <a href={facebookEventPageUrl} className="url" target="_blank" rel="noopener noreferrer">
                            <Tooltip tooltipText={t('home.about.facebookEventText')} />
                            <CalendarOutlined />
                            <div className="icon-shadow"></div>
                        </a>
                    </div>
                </div>


            </div>
            <div className="space-25-height"></div>
            <h2 className="title topics">
                {t('home.about.topic_title')}
            </h2>
            <div className="space-40-height"></div>
            <div className="topic-icons">
                <p className="paragraph flex flex-start">
                    <span className="dot"></span>
                    <span>{t('home.about.topic_1')} </span>
                </p>

                <p className="paragraph flex flex-start">
                    <span className="dot"></span>
                    <span>{t('home.about.topic_2')}</span>
                </p>

                <p className="paragraph flex flex-start">
                    <span className="dot"></span>
                    <span>{t('home.about.topic_3')}</span>
                </p>
            </div>

        </div>
    );
};

export default AboutSection;