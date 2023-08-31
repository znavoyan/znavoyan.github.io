import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const CustomTooltip = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    e.target.closest('.custom-appointment').parentElement.classList.remove("active-popup");
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="overlay"
    >
      <div className="popup">
        <h2>{props.title}</h2>
        <span className="close" onClick={closeHandler}>
          &times;
        </span>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default CustomTooltip;
