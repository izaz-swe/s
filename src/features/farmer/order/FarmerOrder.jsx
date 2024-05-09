import React, { useEffect } from 'react'
import OrderHead from './OrderHead'
import PendingOrder from './PendingOrder'
import OrderSkeleton from './OrderSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByFarmerId } from '../../../state/reducers/order/orderSlice';
import OnDelivery from './OnDelivery';

const FarmerOrder = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.user.user);
  const {farmerOrders, vehicleAssigned} = useSelector((state)=> state.order)
  useEffect(()=> {
    dispatch(getOrderByFarmerId(token))
  }, [dispatch, token, vehicleAssigned])
  return (
    <div>
      <OrderHead/>
      {farmerOrders ? <PendingOrder orders={farmerOrders}/> : <OrderSkeleton/>}
      {farmerOrders ? <OnDelivery orders={farmerOrders}/>: <OrderSkeleton/>}
    </div>
  )
}

export default FarmerOrder