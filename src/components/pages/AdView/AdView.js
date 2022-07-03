import React, { useContext, useState } from "react";
import "../../../styles/globalStyles.css";
import "./AdView.styles.css";
import { useParams, useNavigate } from "react-router-dom";
import FbAdMockUp from "../../organisms/FbAdMockUp/FbAdMockUp";
import BaseContext from "../../../common/context/BaseContext";
import Modal from "../../atoms/Modal/Modal";
import Notification from "../../atoms/Notification/Notification";
const AdView = () => {
  let { shop_data, setShopData } = useContext(BaseContext);
  let { id: paramsId } = useParams();
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { ads } = shop_data;
  const {
    productName: name,
    productImage: image,
    productDescription: description,
    productId,
  } = ads.filter((ad) => ad.id.toString() === paramsId)[0];
  const initialState = {
    adTopMessage: "Write a message here for the post!",
    productName: name,
    buttonText: "Download",
    productDescription: description,
    websiteLink: "maxsport.com",
    profileName: "Max's Sporting Goods",
    profileImage: "https://via.placeholder.com/50",
    productImage: image,
    productId,
  };

  const [adInformation, setAdInformation] = useState(initialState);

  return (
    <>
      {showModal && (
        <Modal>
          <p className="fontWeight600">
            Are you sure that you want to delete this ad permanently?
          </p>
          <div className="flex-align-center">
            <button
              className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite mr-15 button-danger"
              onClick={() => {
                setShopData(ads.filter((ad) => ad.id.toString() !== paramsId));
                setShowModal(!showModal);
                navigate(-1);
              }}
            >
              Delete
            </button>
            <button
              className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
      {showNotification && (
        <Notification>Changes have been saved correctly. ✅</Notification>
      )}
      <div className="flex-align-center flex-direction-column">
        <div className="flex-justify-space-between buttonsMenu mt-10">
          <button
            onClick={() => navigate(-1)}
            className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite"
          >
            ⬅ Return
          </button>
          <button
            onClick={() => setAdInformation(initialState)}
            className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite"
          >
            Reset
          </button>
          <button
            onClick={() => setShowModal(!showModal)}
            className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite"
          >
            Delete ad
          </button>
          <button
            className="fb-ad-control-button mt-10 fontSize15 basic-hover textBold textWhite"
            onClick={() => {
              setShopData(
                ads.splice(
                  ads.indexOf(ads.find((ad) => ad.id.toString() === paramsId)),
                  1,
                  { ...adInformation, id: paramsId }
                )
              );
              setShowNotification(true);
              setTimeout(() => setShowNotification(false), 1500);
            }}
          >
            Save
          </button>
        </div>

        <div className="ad-view-container w100 flex-justify-center">
          <FbAdMockUp
            adInformation={adInformation}
            setAdInformation={setAdInformation}
          />
        </div>
        <div className="flex-justify-space-around buttonsMenu mt-10"></div>
      </div>
    </>
  );
};
export default AdView;
