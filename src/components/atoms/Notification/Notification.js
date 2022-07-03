import React from "react";
import "../../../styles/globalStyles.css";
import "./Notification.styles.css";

const Notification = ({ children }) => {
  return (
    <div className=" flex-justify-center w100 position-absolute">
      <div className="bg-black-80 notification flex-align-center flex-justify-center flex-direction-column mt-10 p-16 border-8 textWhite">
        {children}
      </div>
    </div>
  );
};
export default Notification;
