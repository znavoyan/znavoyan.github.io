import React from "react";

import footerLogo from "../../images/footerLogo.svg";

import styles from "./styles.module.scss";

const Footer = (props) => {


    const height = props.currentFooterHeight;

    return <div className={styles["footer"]} style={{ height: `${height}em` }}>
        <div className={styles["content"]}>
            <div className="flex center column">
                <img src={footerLogo} alt="" />
                <div className="space-35-height"></div>
            </div>
        </div>
    </div>
};

export default Footer;