import React from "react";
import "../../../styles/globalStyles.css";
import "./IndexButton.styles.css";

const IndexButton = ({ logo, title, description, extraLogo }) => {
  return (
    <div className="button-container flex-align-center flex-justify-space-around basic-hover">
      {logo}
      <div>
        <h4 className="title">{title}</h4>
        <p>{description}</p>
      </div>

      {extraLogo}
    </div>
  );
};
export default IndexButton;
