import React, { useEffect, useState } from "react";

const CustomTooltip = (props) => {
  const [show, setShow] = useState(props.show);


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
