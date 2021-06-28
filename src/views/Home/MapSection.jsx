import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useTranslation } from "react-i18next";

import styles from './styles.module.scss';

const mapStyles = {
    position: 'absolute',
    left: '0',
    width: '100%',
    height: '100%',
};

const MapSection = ({ google }) => {
    const { t } = useTranslation('common');

    return (
        <div className="full-width">
            <div className="space-25-height"></div>
            <div className="space-25-height"></div>
            <h2 className="title big">
                <span>{t('location.title')}</span>
            </h2>
            <div className="space-40-height"></div>

            <div className={styles["map"]}>
                <div className={styles["map-content"]}>
                    <Map
                        google={google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: `${t('location.lat')}`,
                            lng: `${t('location.lng')}`
                        }}
                    ></Map>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({ apiKey: ('AIzaSyBZqz_TG-_tbyOd3qczRRPC1o4xjCTCZlE') })(MapSection);