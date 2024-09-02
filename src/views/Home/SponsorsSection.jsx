import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const SponsorsSection = ({ year }) => {
  const { t } = useTranslation("common");
  const sponsorsSection = t("sponsors", { returnObjects: true });
  const categories = sponsorsSection.categories;

  return (
    <div className={styles["sponsors"]}>
      {/* <div className="space-25-height"></div> */}
      <div className="space-25-height"></div>

      <div className="flex column center">
        {Object.keys(categories).map((categoryKey) => {
          const sponsors = categories[categoryKey];
          if (sponsors.length) {
            return (
              <div
                key={categoryKey}
                className={`sponsors-icons ${styles["sponsors-icons"]}`}
              >
                <h2 className="title big">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t(`sponsors.${categoryKey}Title`),
                    }}
                  ></div>
                </h2>
                <div className="sponsors-columns flex flex-wrap flex-start">
                  {sponsors.map((sponsor, index) => (
                    <div className={styles["img-content"]} key={index}>
                      <a
                        href={sponsor.linkedUrl}
                        className="underlined"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={sponsor.imgUrl}
                          style={{ width: sponsor.width }}
                          className="icon-sponsor"
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}

        <div className="flex">
          <div className="link">
            <a href={`${year}/sponsors`}>
              <span>{t("sponsors.seeAll")}</span>
            </a>
          </div>
        </div>
        <div className="space-85-height"></div>
      </div>
    </div>
  );
};

export default SponsorsSection;
