import React from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapSection = () => {
  const { t } = useTranslation("common");

  return (
    <div className="full-width">
      <div className="space-25-height"></div>
      <div className="space-25-height"></div>
      <h2 className="title big">
        <span>{t("location.title")}</span>
      </h2>
      <div className="space-40-height"></div>

      <div className={styles["map"]}>
        <div className={styles["map-content"]}>
          <MapContainer
            center={[t("location.lat"), t("location.lng")]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[t("location.lat"), t("location.lng")]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
