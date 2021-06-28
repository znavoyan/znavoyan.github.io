import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const Slider = () => {

    const { t } = useTranslation('common');
    const speakersList = t('speakers.speakersList', { returnObjects: true });

    return (
        <div className={styles["Marquee"]}>
            <div className={styles["Marquee-content"]}>
                {speakersList.map((speaker, index) => {
                    return (
                    <div className={styles["Marquee-tag"]} key={index}>
                        <a href={speaker.linkedUrl} className="link-no-decoration" target="_blank" rel="noopener noreferrer">
                            <div className="flex column">
                                <img src={speaker.imgUrl} alt="" className="rounded" />

                                <p className="img-title">
                                    <span>{speaker.name}</span> {speaker.surname}
                                </p>
                                <p className="img-paragraph">
                                    {speaker.position} <br></br>
                                    {speaker.company}
                                </p>
                            </div>
                        </a>
                    </div>
                    )
                })}               
            </div>
        </div>
    );
};

export default Slider;