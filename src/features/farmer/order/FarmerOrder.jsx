import React, { useEffect } from 'react'
import OrderHead from './OrderHead'
import PendingOrder from './PendingOrder'
import OrderSkeleton from './OrderSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByFarmerId } from '../../../state/reducers/order/orderSlice';
import OnDelivery from './OnDelivery';
import Delivered from './Delivered';
import { getOrderCount } from '../../../state/reducers/dashboard/dashboardSlice';

const FarmerOrder = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.user.user);
  const {farmerOrders, vehicleAssigned, orderDeliveredSuccess} = useSelector((state)=> state.order)
  const {orders} = useSelector(state => state.dashboard);

  useEffect(()=> {
    dispatch(getOrderByFarmerId(token))
    dispatch(getOrderCount(token));
  }, [dispatch, token, vehicleAssigned, orderDeliveredSuccess])
  return (
    <div>
      <OrderHead orders={orders}/>
      {farmerOrders ? <PendingOrder orders={farmerOrders}/> : <OrderSkeleton/>}
      {farmerOrders ? <OnDelivery orders={farmerOrders}/>: <OrderSkeleton/>}
      {farmerOrders ? <Delivered orders={farmerOrders}/>: <OrderSkeleton/>}
    </div>
  )
}

export default FarmerOrder