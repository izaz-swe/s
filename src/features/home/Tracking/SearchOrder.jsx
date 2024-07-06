import React from "react";
import tracking from "../../../assets/tracking.png";
import { TextField } from "@mui/material";
const SearchOrder = ({parcelId, setParcelId}) => {
  return (
    <div className="container mx-auto flex py-5">
      <div className="w-[50%] md:my-auto">
        <img src={tracking} alt="" className="w-full p-3" />
      </div>
      <div className="mx-4 p-3 w-[50%]">
        <h1 className="text-2xl font-bold mb-4">
          Effortless <span className="text-amber-400 ">Tracking</span> Your
          Shipment
        </h1>
        <p className="mb-8 leading-relaxed text-sm lg:text-base">
          Track your parcel hassle-free with our intuitive system. Stay updated
          on its whereabouts and enjoy peace of mind. Enter your unique tracking
          number for instant access to real-time status. Know the current
          location and expected delivery time. Our reliable logistics network
          ensures safe handling and timely delivery. Monitor your packages
          progress effortlessly. Experience convenience and stay informed
          throughout the entire journey. Trust us for efficient and stress-free
          shipping. Start tracking your parcel today and enjoy a worry-free
          shipping experience.
        </p>
        <div className="flex w-full md:justify-start justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
            <TextField id="outlined-basic" label="Parcel Id" variant="outlined" value={parcelId} onChange={e => setParcelId(e.value)}/>
          </div>
          <button  className="inline-flex text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg">
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOrder;
