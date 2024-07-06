import {
  AssignmentReturn,
  CheckRounded,
  LocalShipping,
  PendingActions,
} from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const OrderStatus = ({ component }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (component?.status == "pending") setValue(0);
    else if (component?.status == "paid") setValue(25);
    else if (component?.status == "confirmed") setValue(50);
    else if (component?.status == "delivered") setValue(75);
  }, []);
  return (
    <section>
      <div className="p-4 max-w-screen-2xl mx-auto">
        <div className="h-full bg-gray-100 bg-opacity-40 px-8 pt-9 pb-24 rounded-lg overflow-hidden text-center relative">
          <div className="flex justify-around text-lg font-medium">
            <h2 className="">
              Order ID:{" "}
              {component?.offerDetails?.offerId
                ? component.offerDetails?.offerId
                : "xxx-xxx-xxx"}
            </h2>
            <h2 className="">Delivered by: Rider </h2>
          </div>
          <hr />
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="sr-only">Steps</h2>
            <LinearProgress variant="determinate" value={value} />
            <div>
              <div className=" h-2 overflow-hidden rounded-full bg-stone-200"></div>
              <ol className="mt-4 grid grid-cols-4 text-sm font-medium text-gray-500">
                <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                  <span className="hidden sm:inline"> Pending </span>
                  <PendingActions />
                </li>
                <li className="flex items-center justify-center text-amber-400 sm:gap-1.5">
                  <span className="hidden sm:inline"> On The Way </span>
                  <LocalShipping />
                </li>
                <li className="flex items-center justify-end sm:gap-1.5">
                  <span className="hidden sm:inline"> Delivered </span>
                  <CheckRounded />
                </li>
                <li className="flex items-center justify-end sm:gap-1.5">
                  <span className="hidden sm:inline"> Return </span>
                  <AssignmentReturn />
                </li>
              </ol>
            </div>
          </div>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-black my-10">
            Order Details
          </h1>
          <div className="flex justify-between text-start font-medium">
            <div className="w-1/2">
              <div className="flex">
                <p className="mb-2 mr-3 text-amber-500">
                  Name:{" "}
                  {component?.offerDetails?.offerName
                    ? component?.offerDetails?.offerName
                    : "----"}{" "}
                </p>
                <p></p>
              </div>
              <div className="flex">
                <p className="mb-2 mr-3 text-amber-500">Payment: </p>
                {component?.totalPrice ? component?.totalPrice : "00"} tk
                <p></p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex">
                <p className="mb-2 mr-3 text-amber-500">
                  Delivery Location:{" "}
                  {component?.address ? component?.address : "Anywhere"}
                </p>
                <p></p>
              </div>
              <div className="flex">
                <p className="mr-3 text-amber-500">Weight: </p>
                <p>{component?.address ? component?.address : "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderStatus;
