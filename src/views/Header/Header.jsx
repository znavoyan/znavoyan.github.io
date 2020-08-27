import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { saveState, loadState, removeState } from "../../localStorage/localStorage";
import logo from "../../logo.svg";
import styles from "./styles.module.scss";

const Header = ({ changeFooterHeight, ...props }) => {

    const { t, i18n } = useTranslation('common');
    const languages = ['en', 'am'];
    const language = loadState('language') ? loadState('language') : 'en';

    const [langDropDownValues, setLangDropDownValues] = useState(languages);
    const [openMenu, setOpenMenu] = useState(false);
    const [langSelectedValue, setLangSelectedValue] = useState(language);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const registerUrl = "https://forms.gle/LZviScoxDHaSB1TJ8";

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const onLinkClick = (section) => {
        if (openMenu) {
            setOpenMenu(false);
        }

        if (!window.location.href.includes('#')) {
            const getCurrenturl = `${window.location.href}#/`;
            window.history.pushState({}, null, getCurrenturl);
        }

        changeFooterHeight(section);
    }

    const toggleLanguageDropDown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const onLanguageChange = (lang) => {

        const newListOflanguages = languages.filter((language) => language !== lang);
        setLangDropDownValues(newListOflanguages);
        setLangSelectedValue(lang);
        i18n.changeLanguage(lang);
        setDropdownOpen(false);

        if (loadState('language')) {
            removeState('language');
        }

        saveState(lang, 'language');
    }

    useEffect(() => {
        const newListOflanguages = languages.filter((language) => language !== langSelectedValue);
        setLangDropDownValues(newListOflanguages);
    }, []);

    return (
        <header {...props} className={styles["header"]}>
            <div className={styles["header-content"]}>
                <div className={classnames({ [styles["hamburder"]]: true, [styles["active"]]: openMenu })} onClick={toggleMenu}>
                    <span></span>
                </div>
                <a href={`/`} className={styles["logo"]}>
                    <img src={logo} alt="logo" />
                </a>
                <div className={styles["navbar"]}>
                    <ul className={classnames({ [styles["active"]]: openMenu })}>
                        {/* <li className={styles["link"]}>
                            <NavLink to="/about" activeClassName={styles["active"]} onClick={() => onLinkClick("about")}>about</NavLink>
                        </li> */}
                        <li className={styles["link"]}>
                            <NavLink to="/speakers" activeClassName={styles["active"]} onClick={() => onLinkClick("speakers")}>{t('header.speakers')}</NavLink>
                        </li>
                        <li className={styles["link"]}>
                            <NavLink to="/sponsors" activeClassName={styles["active"]} onClick={() => onLinkClick("sponsors")}>{t('header.sponsors')}</NavLink>
                        </li>
                        <li className={styles["link"]}>
                            <NavLink to="/agenda" activeClassName={styles["active"]} onClick={() => onLinkClick("agenda")}>{t('header.agenda')}</NavLink>
                        </li>
                        {/* <li className={styles["link"]}>
                            <a href="/#location">location</a>
                        </li> */}
                    </ul>

                    <div className="btn fixed"><div className="btn-cover blue-btn-cover"></div>
                        <a href={registerUrl} target="_blank" rel="noopener noreferrer"><button className="blue">{t('header.register')}</button></a>
                    </div>


                </div>


                {/* <div className={styles["dates"]}>
                    previous years <span>2018 2019</span>
                </div> */}
            </div>
            <div className={styles["language"]}>
                <div onClick={toggleLanguageDropDown} className={styles["dropdown-btn"]}>
                    <span>{langSelectedValue}</span>
                    <span className={styles["arrow-down"]}></span>
                </div>
                <div className={classnames({ [styles["dropdown"]]: true, [styles["dropdown-open"]]: dropdownOpen })}>
                    {langDropDownValues.map((language) =>
                        <div key={language} className={styles["drop"]} onClick={() => onLanguageChange(language)}>
                            {language}
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;