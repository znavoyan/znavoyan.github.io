import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useTranslation } from "react-i18next";

import styles from './styles.module.scss';

const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

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
                        marker
                        initialCenter={{
                            lat: `${t('location.lat')}`,
                            lng: `${t('location.lng')}`
                        }}
                    >
                        <Marker 
                            name={'Current location'} />
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({ apiKey: (REACT_APP_GOOGLE_MAP_API_KEY) })(MapSection);