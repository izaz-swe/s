import { useEffect } from "react";
import DataTableShow from "../../../components/CustomDataTable/DataTableShow";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByBuyerId } from "../../../state/reducers/order/orderSlice";







const Order = () => {
  const dispatch = useDispatch()
   const {buyerOrders} = useSelector((state)=>state.order)
   const {token} = useSelector((state)=>state.user.user)
  useEffect(() => {
    dispatch(getOrderByBuyerId(token))
  }, [dispatch,token]);
  return (
    <div className="flex flex-row">
      
      <div className=" container py-10 mx-auto">
       <DataTableShow component={buyerOrders}/>
      </div>
    </div>
  );
};

export default Order;
