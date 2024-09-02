import React from "react";
import { useTranslation } from "react-i18next";

import sponsorFrame from '../../images/sponsorFrame.svg';

const Sponsors = () => {

    const { t } = useTranslation('common');
    const sponsorsSection = t("sponsors", { returnObjects: true });
  const categories = sponsorsSection.categories;

    return <div className="container">
        <div className="sponsors">
            <div className="space-100-height"></div>
            {/* <div className="space-85-height"></div> */}
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div dangerouslySetInnerHTML={{ __html: t('sponsors.title') }}></div>
                        </div>
                    </div>
                    <img src={sponsorFrame} className="main" alt="" />
                </div>
            </div>
            <p className="paragraph">
                {t('sponsors.text')}
            </p>

            {t('sponsors.aboveText') && <div>
                {/* <div className="space-40-height"></div> */}
                <div className="small-text"><p>{t('sponsors.aboveText')}</p></div>
                <div className="space-40-height"></div>
            </div>}
            
        
            <div className="flex column center">
            {Object.keys(categories).map((categoryKey) => {
          const sponsors = categories[categoryKey];
          if (sponsors.length) {
            return (
              <div
                key={categoryKey}
                className='sponsors-icons'
              >
                <h2 className="title big">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t(`sponsors.${categoryKey}Title`),
                    }}
                  ></div>
                </h2>
                <div className="space-40-height"></div>
                <div className="sponsors-columns">
                  {sponsors.map((sponsor, index) => (
                    <div className="img-content" key={index}>
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
                <div className="space-25-height"></div>
              </div>
            );
          }
          return null;
        })}
                <div className="space-85-height"></div>
            </div>
            

        </div>
            {t('sponsors.bottomText') && <div className="small-text"><p>{t('sponsors.bottomText')}</p></div>}
            <div className="space-40-height"></div>
            <div className="space-100-height"></div>
    </div>
};


export default Sponsors;