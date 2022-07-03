import React, { useRef } from "react";
import "../../../styles/globalStyles.css";
import "./FbAdMockUp.styles.css";
const FbAdMockUp = ({ setAdInformation, adInformation }) => {
  const refProfileImage = useRef(null);
  const refProductImage = useRef(null);
  const {
    profileImage,
    profileName,
    adTopMessage,
    productImage,
    productDescription,
    websiteLink,
    productName,
    buttonText,
  } = adInformation;
  return (
    <>
      <div className="flex-direction-column fb-ad-container hover-shadow border-8">
        <div className="p-12 pb-6 ad-top-part">
          <div className="flex-align-center">
            <input
              type="file"
              accept="image/*"
              id="files"
              className="fb-profile-image-input"
              onChange={(event) => {
                const target = event.target;
                const file = target.files[0];

                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  const profileImage = reader.result;
                  if (refProfileImage.current) {
                    refProfileImage.current.src = `${profileImage}`;
                  }
                  setAdInformation({ ...adInformation, profileImage });
                });
                reader.readAsDataURL(file);
              }}
            />
            <img
              src={
                profileImage !== ""
                  ? profileImage
                  : "https://via.placeholder.com/50"
              }
              className="fb-profile-image border-50 mr-8"
              ref={refProfileImage}
              alt="Selected Profile Pic"
            />

            <div className="flex-justify-start flex-direction-column mt-4">
              <input
                className="fontWeight500 mb-3 textFBBlue fontSize14 w100 dashed-hover"
                placeholder={profileName}
                value={profileName}
                onChange={(e) =>
                  setAdInformation({
                    ...adInformation,
                    profileName: e.target.value,
                  })
                }
              />
              <p className="fontSize12 ad-descr textGrey fontSize12">
                Sponsored
              </p>
            </div>
          </div>
          <input
            className="mt-10 fontSize14 w100 dashed-hover"
            placeholder={adTopMessage}
            value={adTopMessage}
            onChange={(e) =>
              setAdInformation({
                ...adInformation,
                adTopMessage: e.target.value,
              })
            }
          />
        </div>
        <input
          type="file"
          accept="image/*"
          id="files"
          className="fb-ad-image-input"
          onChange={(event) => {
            const target = event.target;
            const file = target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", () => {
              const productImage = reader.result;
              if (refProductImage.current) {
                refProductImage.current.src = `${productImage}`;
              }
              setAdInformation({
                ...adInformation,
                productImage: productImage,
              });
            });
            reader.readAsDataURL(file);
          }}
        />
        <img
          className="w100 fb-ad-image"
          ref={refProductImage}
          src={productImage}
          alt={productDescription}
        />
        <div className="preview-below-image p-12 plr-16 flex-align-center flex-justify-space-between w100">
          <div className="overflow-hidden flex-direction-column w100">
            <input
              className="uppercase textGrey fontSize12 dashed-hover"
              placeholder={websiteLink}
              value={websiteLink}
              onChange={(e) =>
                setAdInformation({
                  ...adInformation,
                  websiteLink: e.target.value,
                })
              }
            />
            <input
              className="fontWeight600 fontSize17 dashed-hover"
              placeholder={productName}
              value={productName}
              onChange={(e) =>
                setAdInformation({
                  ...adInformation,
                  productName: e.target.value,
                })
              }
            />
            <input
              className="fb-ad-descr textGrey fontSize15 dashed-hover w100"
              value={productDescription}
              onChange={(e) =>
                setAdInformation({
                  ...adInformation,
                  productDescription: e.target.value,
                })
              }
            />
          </div>
          <button className="fb-ad-button-download cursor-pointer">
            <input
              value={buttonText}
              onChange={(e) =>
                setAdInformation({
                  ...adInformation,
                  buttonText: e.target.value,
                })
              }
              className="fontSize12 fontWeight600 cursor-pointer dashed-hover w100"
            />
          </button>
        </div>
        <div className="plr-12 ad-interact-buttons flex-align-center flex-justify-space-around flex-direction-column">
          <div className="flex-justify-space-between w100 fontSize12">
            <p>👍 62</p>
            <p>20 comments</p>
          </div>
          <hr className="w100 m-0" />
          <div className="flex-justify-space-around w100 textBold">
            <p className="cursor-pointer">Like</p>
            <p className="cursor-pointer">Comment</p>
            <p className="cursor-pointer">Share</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FbAdMockUp;
