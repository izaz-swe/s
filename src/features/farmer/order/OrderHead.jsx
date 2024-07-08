import React from 'react'
import TitleCard from '../../../components/cards/TitleCard'
import { Typography } from '@mui/material'
import OrderCard from '../../../components/cards/OrderCard'
import { CancelScheduleSend, EventAvailable, LocalMall, LocalShipping } from '@mui/icons-material'

const OrderHead = ({orders}) => {
  return (
    <TitleCard title="Orders">
        <Typography variant="body2">This Month</Typography>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-2 md:grid-cols-3 gap-4">
          <OrderCard
            text="New Orders"
            count={orders?.new ? orders?.new : 0}
            cardColor="#6495ED"
            icon={<LocalMall sx={{ fontSize: "50px" }} />}
          />
         <OrderCard
            text="Cancelled"
            count={0}
            cardColor="#8A2BE2"
            icon={<CancelScheduleSend sx={{ fontSize: "50px" }} />}
          />
          <OrderCard
            text="On Delivery"
            count={orders?.onDelivery ? orders?.onDelivery : 0}
            cardColor="#5DADE2"
            icon={<LocalShipping sx={{ fontSize: "50px" }} />}
          />
          <OrderCard
            text="Delivered"
            count={orders?.delivered ? orders?.delivered : 0}
            cardColor="#F1948A"
            icon={<EventAvailable sx={{ fontSize: "50px" }} />}
          />
        </div>
      </TitleCard>
  )
}

export default OrderHead