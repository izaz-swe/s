import React, { useEffect, useState } from "react";
import SearchOrder from "./SearchOrder";
import OrderStatus from "./OrderStatus";
import { useParams } from "react-router-dom";
import axios from "../../../utils/axios";
const TrackingPage = () => {
  const { orderId } = useParams();
  
  const [component, setComponent] = useState({});
  useEffect(() => {
    const getOrderDetails = async () => {
      const order = await axios.get(`/order/track/${orderId}`);
      setComponent(order.data.data);
    };
    getOrderDetails();
  }, [orderId]);
  return (
    <div className="bg-gray-100">
      <SearchOrder />
      <OrderStatus component={component} />
    </div>
  );
};

export default TrackingPage;
