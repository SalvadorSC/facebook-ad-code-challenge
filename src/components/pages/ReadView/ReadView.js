import React, { useContext, useState } from "react";
import "../../../styles/globalStyles.css";
import "./ReadView.styles.css";
import { useParams } from "react-router-dom";
import IndexButton from "../../atoms/IndexButton/IndexButton";
import Modal from "../../atoms/Modal/Modal";
import AdReadViewCard from "../../organisms/AdReadViewCard/AdReadViewCard";
import BaseContext from "../../../common/context/BaseContext";
const ReadView = () => {
  const { shop_data } = useContext(BaseContext);
  const [showModal, setShowModal] = useState(false);
  const [showMockProduct, setShowMockProduct] = useState(false);
  let { productId: paramsId } = useParams();
  const adArrayToMap =
    paramsId === "0"
      ? shop_data.ads
      : shop_data.ads.filter((ad) => ad.productId.toString() === paramsId);

  return (
    <>
      {showModal && (
        <Modal>
          <form action="" className="w100">
            <div className="flex-align-center flex-justify-space-between">
              <h4>Create a new ad:</h4>
              <div>
                <input
                  type="checkbox"
                  id="mock"
                  name="drone"
                  value="mock"
                  onChange={() => setShowMockProduct(!showMockProduct)}
                />
                <label htmlFor="mock">Mock a new product</label>
              </div>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
            <hr className="w100" />
            <div className="flex-align-center w100">
              <div className="flex-direction-column mr-15 w100">
                <label htmlFor="adTopMessage">Ad's Top Message:</label>
                <input
                  className="new-ad-input"
                  name="adTopMessage"
                  type="text"
                />
                <label htmlFor="buttonText">Button Text:</label>
                <input className="new-ad-input" name="buttonText" type="text" />
                <label htmlFor="websiteLink">Website Link:</label>
                <input
                  className="new-ad-input"
                  name="websiteLink"
                  type="text"
                />
                <label htmlFor="profileName">Profile Name:</label>
                <input
                  className="new-ad-input"
                  name="profileName"
                  type="text"
                />
                <label htmlFor="profileImage">Profile Image:</label>
                <input name="profileImage" type="file" />
                {showMockProduct ? (
                  <>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                      className="new-ad-input"
                      name="productName"
                      type="text"
                    />
                    <label htmlFor="productDescription">
                      Product Description:
                    </label>
                    <input
                      className="new-ad-input"
                      name="productDescription"
                      type="text"
                    />
                    <label htmlFor="productImage">Product Image:</label>
                    <input name="productImage" type="file" />
                    <label htmlFor="productId">Product Id:</label>
                    <input
                      className="new-ad-input"
                      name="productId"
                      type="text"
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <br />
          </form>
        </Modal>
      )}
      <div className="read-view-container">
        <div className="flex-align-center">
          <div onClick={() => setShowModal(true)}>
            <IndexButton
              title={"New ad"}
              logo={"AD"}
              description={"Create a new ad mockup"}
              extraLogo={"+"}
            />
          </div>
        </div>
        <p className="mt-20">Recently modified ads</p>
        <hr />
        <div className="flex-align-center ad-view-container flex-justify-space-between">
          {adArrayToMap.map(
            ({
              productName: name,
              productImage: image,
              productDescription: description,
              id,
            }) => (
              <AdReadViewCard
                key={id}
                name={name}
                image={image}
                description={description}
                id={id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
export default ReadView;
