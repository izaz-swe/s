import { Card, CardContent, Skeleton } from '@mui/material'
import React from 'react'

const DashboardAmountCardSkeleton = () => {
  return (
    <Card sx={{ position: "relative" }}>
        <CardContent>
          <Skeleton variant="text" width={180} height={50} animation="wave" />
          <Skeleton variant="text" width={150} height={60} animation="wave" />
          <Skeleton variant="rectangular" width={100} height={32} animation="wave" />
        </CardContent>
      </Card>
  )
}

export default DashboardAmountCardSkeleton