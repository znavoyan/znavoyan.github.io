import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './styles.module.scss';

const mapStyles = {
    position: 'absolute',
    left: '0',
    width: '100%',
    height: '100%',
};

const MapSection = ({ google }) => {


    return (
        <div className="full-width">
            <div className="space-25-height"></div>
            <div className="space-25-height"></div>
            <h2 className="title big">
                <span>Where to find us</span>
            </h2>
            <div className="space-40-height"></div>

            <div className={styles["map"]}>
                <div className={styles["map-content"]}>
                    <Map
                        google={google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233
                        }}
                    ></Map>
                </div>
            </div>

            <div className="container">
                <div className="space-20-height"></div>
                <div className="space-25-height"></div>
                <div className="space-85-height"></div>
                <h2 className="title">
                    Lorem ipsum <span>dolor sit</span>
                </h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et felis congue, malesuada metus nec, gravida neque.
                </p>
                <div className="space-250-height"></div>
            </div>

        </div>
    );
};

export default GoogleApiWrapper({ apiKey: ('') })(MapSection);