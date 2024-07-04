import React, { useState } from 'react'
import SearchOrder from './SearchOrder'
import OrderStatus from './OrderStatus';
import { useLocation } from 'react-router-dom';

const TrackingPage = () => {
  const [parcelId, setParcelId] = useState("");
  const location = useLocation();
  const { component } = location.state || {};
  console.log(component)
  return (
    <div className='bg-gray-100'>
      <SearchOrder parcelId={parcelId} setParcelId={setParcelId}/>
      <OrderStatus component={component}/>
    </div>
  )
}

export default TrackingPage