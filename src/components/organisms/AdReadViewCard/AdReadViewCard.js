import React from "react";
import "../../../styles/globalStyles.css";
import "./AdReadViewCard.styles.css";
import { Link } from "react-router-dom";
const AdReadViewCard = ({ name, image, description, id }) => {
  return (
    <>
      <Link
        to={`/adView/${id}`}
        className="flex-direction-column ad-container hover-shadow flex1"
      >
        <img className="w100 ad-image mb-10" src={image} alt={description} />
        <div className="plr-5">
          <p className="fontWeight500 mb-10 wrap-text">{name}</p>
          <p className="fontSize12  wrap-text">{description}</p>
        </div>
      </Link>
    </>
  );
};
export default AdReadViewCard;
