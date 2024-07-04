import React, { useState } from 'react'
import SearchOrder from './SearchOrder'
import OrderStatus from './OrderStatus';

const TrackingPage = () => {
  const [parcelId, setParcelId] = useState("");
  
  return (
    <div className='bg-gray-100'>
      <SearchOrder parcelId={parcelId} setParcelId={setParcelId}/>
      <OrderStatus/>
    </div>
  )
}

export default TrackingPage