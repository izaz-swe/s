import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../../../state/reducers/offer/offerSlice";

import Slider from "../../../../components/Slider/Slider";
import Loader from "../../../../components/loader/Loader";

const OfferSlider = () => {
  const dispatch = useDispatch();
  const { homeOffers } = useSelector((state) => state.offer);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  

  return (
    <div className=" bg-gray-200 py-8 px-10 ">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold">Offer Product</h1>
        {
          homeOffers.length > 0 ? < Slider homeOffers={homeOffers}/> : <Loader/>
        }
      </div>
    </div>
  );
};

export default OfferSlider;
