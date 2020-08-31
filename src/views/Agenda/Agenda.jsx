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
                                <p className="img-title margin-off left"><span className="uppercase">{t('agenda.month')} 10</span></p>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_3.name')} {t('speakers.speaker_3.surname')} <br /></span>
                                        {t('agenda.1.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_14.name')} {t('speakers.speaker_14.surname')} <br /></span>
                                        {t('agenda.1.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_7.name')} {t('speakers.speaker_7.surname')} <br /></span>
                                        {t('agenda.1.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_4.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_8.name')} {t('speakers.speaker_8.surname')} <br /></span>
                                        {t('agenda.1.topic_4.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_1.name')} {t('speakers.speaker_1.surname')} <br /></span>
                                        {t('agenda.1.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_6.name')} {t('speakers.speaker_6.surname')} <br /></span>
                                        {t('agenda.1.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.1.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {t('agenda.1.topic_7.text')}
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="space-80-height"></div>
                        <div className="flex align-start">
                            {/* <img src={number_2} className="icon" alt="" /> */}
                            {/* <div className="space-60-width"></div> */}
                            <div className="small-text">
                                <p className="img-title margin-off left"><span className="uppercase">{t('agenda.month')} 11</span></p>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_4.name')} {t('speakers.speaker_4.surname')} <br /></span>
                                        {t('agenda.2.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {/* <span className="name">{t('speakers.speaker_14.name')} {t('speakers.speaker_14.surname')} <br /></span> */}
                                        {t('agenda.2.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_11.name')} {t('speakers.speaker_11.surname')} <br /></span>
                                        {t('agenda.2.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_4.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_9.name')} {t('speakers.speaker_9.surname')} <br /></span>
                                        {t('agenda.2.topic_4.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_13.name')} {t('speakers.speaker_13.surname')} <br /></span>
                                        {t('agenda.2.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_2.name')} {t('speakers.speaker_2.surname')} <br /></span>
                                        {t('agenda.2.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.2.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {t('agenda.2.topic_7.text')}
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="space-80-height"></div>
                        <div className="flex align-start">
                            {/* <img src={number_3} className="icon" alt="" /> */}
                            {/* <div className="space-60-width"></div> */}
                            <div className="small-text">
                                <p className="img-title margin-off left"><span className="uppercase">{t('agenda.month')} 12</span></p>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_1.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_5.name')} {t('speakers.speaker_5.surname')} <br /></span>
                                        {t('agenda.3.topic_1.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_2.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_10.name')} {t('speakers.speaker_10.surname')} <br /></span>
                                        {t('agenda.3.topic_2.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_3.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        <span className="name">{t('speakers.speaker_12.name')} {t('speakers.speaker_12.surname')} <br /></span>
                                        {t('agenda.3.topic_3.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
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
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_5.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {/* <span className="name">{t('speakers.speaker_1.name')} {t('speakers.speaker_1.surname')} <br /></span> */}
                                        {t('agenda.3.topic_5.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_6.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {/* <span className="name">{t('speakers.speaker_6.name')} {t('speakers.speaker_6.surname')} <br /></span> */}
                                        {t('agenda.3.topic_6.text')}
                                    </p>
                                </div>
                                <div className="space-25-height"></div>
                                <div className="flex align-start flex-start">
                                    <p className="paragraph margin-off left">
                                        <span className="time">{t('agenda.3.topic_7.time')}</span>
                                    </p>
                                    <div className="space-25-width"></div>
                                    <p className="paragraph margin-off left">
                                        {t('agenda.3.topic_7.text')}
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