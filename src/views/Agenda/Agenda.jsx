import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import agendaFrame from "../../images/agendaFrame.png";

const Agenda = () => {

    const episodeSection = useRef(null);
    const { t } = useTranslation('common');
    const days = t('agenda.days', { returnObjects: true });

    const scrollDown = () => {
        episodeSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return <div className="container">
        <div className="agenda">
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div dangerouslySetInnerHTML={{ __html: t('agenda.title') }}></div>
                        </div>
                        <p className="small-text"><span>{t('agenda.yerevanTime')}</span></p>
                    </div>

                    <img src={agendaFrame} className="main" alt="" />
                </div>
            </div>


            <div className="space-85-height"></div>

            <p className="paragraph">
                {t('agenda.text')}
            </p>
            <div className="space-100-height"></div>
            <div className="flex center">
                <div className="btn">
                    <div className="btn-cover white-btn-cover big-btn-cover"></div>
                    <button className="big bordered big-white-border" onClick={scrollDown}>
                        <span className="uppercase">{t('agenda.btnText')}</span>
                    </button>
                </div>
            </div>

            <div className="space-100-height"></div>
            {t('agenda.aboveText') && <div className="small-text"><p>{t('agenda.aboveText')}</p></div>}
            <div id="episodeSection" ref={episodeSection}>
                <div className="space-40-height"></div>
                <div className="flex episodes" >

                    <div className="flex column col align-start">
                        
                            {days.map((day, dayIndex) => {
                                return (<div className="flex align-start" key={dayIndex}>
                                            <div className="small-text">
                                                <p className="img-title margin-off left"><span className="uppercase left">{day.date}</span></p><div className="space-25-width"></div>
                                                <div className="space-25-height"></div>
                                                {day.agendaList.map((agenda, index) => {
                                                    return (<div>
                                                                <div className="flex align-start flex-start mobile-width" key={index}>
                                                                    <p className="paragraph margin-off left">
                                                                        <span className={`time ${agenda?.key === "break" ? "pink-text" : ""} ${agenda?.key === "opening" ? "blue-text" : ""}`}>{agenda.time}</span>
                                                                    </p>
                                                                    <div className="space-25-width"></div>
                                                                    <p className={`paragraph margin-off left ${agenda?.key === "break" ? "pink-text" : ""} ${agenda?.key === "opening" ? "blue-text" : ""}`}>
                                                                        <span className="name">{agenda.title}</span>
                                                                        {agenda.text}
                                                                    </p>
                                
                                                                </div>
                                                                <div className="space-25-height"></div>
                                                            </div>)
                                                })}
                                                <div className="space-25-height"></div>
                                            </div>
                                        </div>)
                                        
                            })}
                        
                        <div className="space-80-height"></div>
                    </div>
                </div>

            </div>
            {t('agenda.bottomText') && <div className="small-text"><p>{t('agenda.bottomText')}</p></div>}
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
        </div>
    </div>
};


export default Agenda;