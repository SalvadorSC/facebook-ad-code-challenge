import React from "react";
import "../../../styles/globalStyles.css";
import "./IndexView.styles.css";
import { Link } from "react-router-dom";
import adData from "../../../data/shop_data.json";
const IndexView = () => {
  const { products } = adData;
  return (
    <div className="index-view-container">
      <p className="mt-20 fontWeight600">Recently modified products</p>
      <hr />
      <div className="flex-align-center ad-view-container">
        {products.map(
          ({
            id,
            productName: name,
            price,
            productDescription: description,
            date,
          }) => (
            <Link
              to={`readView/${id}`}
              className="adListItem w100 basic-hover border-8"
              key={id}
            >
              <div className="flex-justify-space-between p-10 plr-15 pb-0 bg-blue border-top-8 textWhite">
                <p className="fontWeight500 mb-10">{`${name} - ${price}€`}</p>
                <p className="fontSize12 textRight w100 flex1">{date}</p>
              </div>
              <p className="p-10 plr-15 pt-0">{description}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default IndexView;
