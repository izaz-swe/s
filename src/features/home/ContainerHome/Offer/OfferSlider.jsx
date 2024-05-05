import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../../../state/reducers/offer/offerSlice";
import Slider from "react-slick";

const OfferSlider = () => {
  const dispatch = useDispatch();
  const { homeOffers } = useSelector((state) => state.offer);
  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);
  console.log(homeOffers);


  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
}
  return (
    <div className="container mx-auto my-10">
      <Slider {...settings}>
        {homeOffers.map((homeOffer, i) => (
          <div
            key={i}
            className=" flex flex-col items-center  group  py-2 px-4   relative rounded-xl "
          >
            <div className="relative">
              <img src={homeOffer?.image[0]} alt="" className="w-full h-64" />
            </div>
            <h1 className="text-3xl text-center">{homeOffer?.offerName}</h1>
            <p className="text-2xl  font-semibold text-black py-2">
              {homeOffer?.Price}
            </p>
            <p className="text-center">
              Quantity : {homeOffer?.weight} {homeOffer?.unit}
            </p>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
