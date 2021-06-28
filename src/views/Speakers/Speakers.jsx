import React from "react";
import { useTranslation } from "react-i18next";

import speakerFrame from '../../images/speakerFrame.svg';

const Speakers = () => {

    const { t } = useTranslation('common');
    const speakersList = t('speakers.speakersList', { returnObjects: true });

    return <div className="container">
        <div className="speakers">
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div dangerouslySetInnerHTML={{ __html: t('speakers.title') }}></div>
                        </div>
                    </div>

                    <img src={speakerFrame} className="main" alt="" />
                </div>
            </div>
            <div className="space-85-height"></div>
            <div>

                <div className="space-100-height"></div>
                {t('speakers.aboveText') && <div className="small-text"><p>{t('speakers.aboveText')}</p></div>}
                <div className="space-40-height"></div>

                <div className="flex speakers-images align-start flex-wrap">
                    {speakersList.map((speaker, index) => {
                        return (<div className="flex column" key={index}>
                        <a href={speaker.linkedUrl} className="flex center column link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <img src={speaker.imgUrl} alt="" className="rounded" />
                            <p className="img-title">
                                <span>{speaker.name}</span> {speaker.surname}
                            </p>
                            <p className="img-paragraph">
                                {speaker.position} <br></br>
                                {speaker.company}
                            </p>
                        </a>
                        <div className="space-25-height"></div>
                    </div>)
                    })}
                    
                </div>
                    
            </div>
            <div className="space-20-height"></div>
            {t('speakers.bottomText') && <div className="small-text"><p>{t('speakers.bottomText')}</p></div>}
            <div className="space-100-height"></div>
        </div>
    </div>
};


export default Speakers;