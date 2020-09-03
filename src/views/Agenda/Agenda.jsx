import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import agendaFrame from "../../images/agendaFrame.png";
// import number_1 from "../../images/number_1.svg";
// import number_2 from "../../images/number_2.svg";
// import number_3 from "../../images/number_3.svg";

const Agenda = () => {

    const episodeSection = useRef(null);
    const { t } = useTranslation('common');

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
                            <div>{t('agenda.our')}</div>
                            <div><span>{t('agenda.title')}</span></div>
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
                    <div className="btn-cover medium-btn-cover white-btn-cover big-btn-cover"></div>
                    <button className="big bordered medium big-white-border" onClick={scrollDown}>
                        <span className="uppercase">{t('agenda.month')} 10-12</span>
                    </button>
                </div>
            </div>

            <div className="space-100-height"></div>
            <div id="episodeSection" ref={episodeSection}>
                <div className="space-40-height"></div>
                <div className="flex episodes" >

                    <div className="flex column col align-start">
                        <div className="flex align-start">
                            {/* <img src={number_1} className="icon" alt="" /> */}
                            {/* <div className="space-60-width"></div> */}
                            <div className="small-text">
                                <p className="img-title margin-off left"><span className="uppercase left">{t('agenda.month')} 10</span></p><div className="space-25-width"></div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_3.name')} {t('speakers.speaker_3.surname')} ( {t('speakers.speaker_3.company')} ) <br /></span>
                                        {t('agenda.1.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_17.name')} {t('speakers.speaker_17.surname')} ( {t('speakers.speaker_17.company')} ) <br /></span>
                                        {t('agenda.1.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.1.short_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.1.short_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_7.name')} {t('speakers.speaker_7.surname')} ( {t('speakers.speaker_7.company')} ) <br /></span>
                                        {t('agenda.1.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_4.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_8.name')} {t('speakers.speaker_8.surname')} ( {t('speakers.speaker_8.company')} ) <br /></span>
                                        {t('agenda.1.topic_4.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.1.lunch_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.1.lunch_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_1.name')} {t('speakers.speaker_1.surname')} ( {t('speakers.speaker_1.company')} )<br /></span>
                                        {t('agenda.1.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_6.name')} {t('speakers.speaker_6.surname')} ( {t('speakers.speaker_6.company')} )<br /></span>
                                        {t('agenda.1.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('agenda.1.topic_7.text')}</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="space-80-height"></div>
                        <div className="flex align-start">
                            {/* <img src={number_2} className="icon" alt="" /> */}
                            {/* <div className="space-60-width"></div> */}
                            <div className="small-text">
                                <p className="img-title margin-off left"><span className="uppercase left">{t('agenda.month')} 11</span></p>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_13.name')} {t('speakers.speaker_13.surname')} ( {t('speakers.speaker_13.company')} )<br /></span>
                                        {t('agenda.2.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_2.name')} {t('speakers.speaker_2.surname')} ( {t('speakers.speaker_2.company')} )<br /></span>
                                        {t('agenda.2.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.2.short_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.2.short_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_11.name')} {t('speakers.speaker_11.surname')} ( {t('speakers.speaker_11.company')} )<br /></span>
                                        {t('agenda.2.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_4.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_9.name')} {t('speakers.speaker_9.surname')} ( {t('speakers.speaker_9.company')} )<br /></span>
                                        {t('agenda.2.topic_4.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.2.lunch_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.2.lunch_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_4.name')} {t('speakers.speaker_4.surname')} ( {t('speakers.speaker_4.company')} )<br /></span>
                                        {t('agenda.2.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_16.name')} {t('speakers.speaker_16.surname')} ( {t('speakers.speaker_16.company')} )<br /></span>
                                        {t('agenda.2.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('agenda.2.topic_7.text')}</span> <br />
                                        {/* {t('speakers.speaker_15.name')} {t('speakers.speaker_15.surname')},&nbsp;
                                        {t('speakers.speaker_4.name')} {t('speakers.speaker_4.surname')},&nbsp;
                                        {t('speakers.speaker_9.name')} {t('speakers.speaker_9.surname')},&nbsp;
                                        {t('speakers.speaker_11.name')} {t('speakers.speaker_11.surname')} */}
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="space-80-height"></div>
                        <div className="flex align-start">
                            {/* <img src={number_3} className="icon" alt="" /> */}
                            {/* <div className="space-60-width"></div> */}
                            <div className="small-text">
                                <p className="img-title margin-off left"><span className="uppercase left">{t('agenda.month')} 12</span></p>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_5.name')} {t('speakers.speaker_5.surname')} ( {t('speakers.speaker_5.company')} )<br /></span>
                                        {t('agenda.3.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_10.name')} {t('speakers.speaker_10.surname')} ( {t('speakers.speaker_10.company')} )<br /></span>
                                        {t('agenda.3.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.3.short_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.3.short_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_12.name')} {t('speakers.speaker_12.surname')} ( {t('speakers.speaker_12.company')} )<br /></span>
                                        {t('agenda.3.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_4.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {/* <span className="name">{t('speakers.speaker_8.name')} {t('speakers.speaker_8.surname')} <br /></span> */}
                                        {t('agenda.3.topic_4.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time pink-text">{t('agenda.3.lunch_break.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left pink-text">
                                        <span className="name">{t('agenda.3.lunch_break.text')}</span>
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_18.name')} {t('speakers.speaker_18.surname')} ( {t('speakers.speaker_18.company')} )<br /></span>
                                        {t('agenda.3.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_19.name')} {t('speakers.speaker_19.surname')} ( {t('speakers.speaker_19.company')} )<br /></span>
                                        {t('agenda.3.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start mobile-width">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('agenda.3.topic_7.text')}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-80-height"></div>
                    </div>
                </div>

            </div>

            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
        </div>
    </div>
};


export default Agenda;