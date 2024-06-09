import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getOfferDetails,
  getRelatedOffers,
} from "../../../state/reducers/offer/offerSlice";
import { PriceChange } from "@mui/icons-material";
import Slider from "../../../components/Slider/Slider";
import Loader from "../../../components/loader/Loader";
import { createOrder } from "../../../state/reducers/order/orderSlice";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { offerDetails, relatedOffers } = useSelector((state) => state.offer);
  const { token } = useSelector((state) => state.user.user);
  const [address, setAddress] = useState("");
  useEffect(() => {
    dispatch(getOfferDetails(id));
    dispatch(getRelatedOffers(offerDetails.categoryId));
  }, [dispatch, offerDetails.categoryId, id]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      offerId: offerDetails.offerId,
      farmerId: offerDetails.userId,
      status: "pending",
      totalPrice: offerDetails.totalPrice,
      address,
    };
    dispatch(createOrder({ token, data }));
  };
  const { success } = useSelector((state) => state.order);

  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate("/order");
    }
  }, [navigate, success]);

  return (
    <div>
      <div className="">
        <div className=" container mx-auto flex flex-col lg:flex-row md:gap-20 my-10">
          <div className="mx-auto">
            <img src={offerDetails?.image} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col  justify-center mx-auto gap-2">
            <h1 className="text-3xl  font-bold">{offerDetails?.offerName} </h1>
            <h2 className="text-2xl  font-semibold text-green-700 flex justify-between">
              Total weight:{" "}
              <span className="text-3xl">
                {" "}
                {offerDetails?.weight} {offerDetails?.unit}
              </span>
            </h2>
            <h2 className="text-2xl  font-semibold text-green-700 flex justify-between">
              <PriceChange sx={{ fontSize: "3rem" }} />{" "}
              <span className="text-3xl">
                {" "}
                {offerDetails?.price} <span className="text-lg">tk/unit</span>
              </span>{" "}
            </h2>
            <h2 className=" text-gray-500 text-xl flex justify-between">
              {" "}
              Total Price :{" "}
              <span className="text-2xl  font-semibold text-green-700">
                {offerDetails?.totalPrice}
              </span>
            </h2>
            <h4 className="text-2xl  font-semibold text-green-700">
              Cash On Delivery :{" "}
              {offerDetails?.cashOnDelivery ? "Available" : "Not Available"}
            </h4>

            <hr />
            <div className="text-xl font-semibold">
              <h1 className="text-green-700 font-bold text-center text-2xl">
                Product Owner
              </h1>
              <h2>{offerDetails?.farmerDetails?.name}</h2>
              <h2>{offerDetails?.farmerDetails?.phone}</h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className=" container mx-auto flex flex-col justify-center  py-5 px-8">
            <h1 className="text-2xl text-center py-5 font-semibold">
              Please enter your shipping address{" "}
            </h1>
            <form
              className="flex flex-row gap-10 justify-center  items-center"
              onSubmit={handleSubmit}
              action=""
            >
              <input
                type="text"
                className="block border border-grey-light w-1/3 mx-auto text-black px-3 py-5 rounded-md mb-4"
                name="address"
                placeholder="Please enter your address"
                onChange={handleAddressChange}
                required
              />
              <button
                type="submit"
                className="btn px-2 py-5 bg-green-600 mx-auto text-white w-1/3 rounded-md"
              >
                Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 md:px-10 py-5">
        <div className="container  mx-auto">
          <h1 className=" text-center font-bold text-3xl">Related Offers</h1>
          {relatedOffers.length > 0 ? (
            <Slider homeOffers={relatedOffers} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
