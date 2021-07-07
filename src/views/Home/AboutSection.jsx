import React from "react";
import { useTranslation } from "react-i18next";
import {
    FacebookOutlined,
    CalendarOutlined,
    YoutubeOutlined
} from '@ant-design/icons';

import { Tooltip } from "../../shared";

const AboutSection = () => {
    const { t } = useTranslation('common');

    return (
        <div className="about">
            <div className="space-85-height"></div>
            <h2 className="title">
                <div dangerouslySetInnerHTML={{ __html: t('home.about.title') }}></div>
            </h2>
            <div className="paragraph">
                {t('home.about.text')}
                <div className="flex column">
                    <div className="space-25-height"></div>
                    <div className="flex">
                        <p>{t('home.about.followUs')}</p>
                        <div className="space-25-width"></div>
                        <a href={t('home.about.facebookPageUrl')} className="url" target="_blank" rel="noopener noreferrer">
                            <Tooltip tooltipText={t('home.about.facebookPageText')} />
                            <FacebookOutlined />
                            <div className="icon-shadow"></div>
                        </a>
                        <div className="space-25-width"></div>
                        <a href={t('home.about.facebookEventPageUrl')} className="url" target="_blank" rel="noopener noreferrer">
                            <Tooltip tooltipText={t('home.about.facebookEventText')} />
                            <CalendarOutlined />
                            <div className="icon-shadow"></div>
                        </a>
                        <div className="space-25-width"></div>
                        <a href={t('home.about.youTubeEventPageUrl')} className="url" target="_blank" rel="noopener noreferrer">
                            <Tooltip tooltipText={t('home.about.youTubePageText')} />
                            <YoutubeOutlined/>
                            <div className="icon-shadow"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;