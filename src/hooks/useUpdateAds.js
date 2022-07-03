import { useContext } from "react";
import BaseContext from "../common/context/BaseContext";

export const useUpdateAds = (newItem, id) => {
  const { shop_data, setShopData } = useContext(BaseContext);

  setShopData(
    shop_data.ads.splice(
      shop_data.ads.indexOf(
        shop_data.ads.find((ad) => ad.id.toString() === id)
      ),
      1,
      newItem
    )
  );
};
