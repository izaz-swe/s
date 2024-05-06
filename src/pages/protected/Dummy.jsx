import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByFarmerId } from '../../state/reducers/order/orderSlice';

const Dummy = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.user.user);
  useEffect(()=> {
    dispatch(getOrderByFarmerId(token))
  },[dispatch])
  return (
    <div>Dummy</div>
  )
}

export default Dummy