import { Paper, TableContainer } from '@mui/material'
import React from 'react'

const CustomDataTable = ({children}) => {
  return (
    <div className='table-wrapper'>
      <TableContainer component={Paper} sx={{padding: "24px"}}>
        {children}
      </TableContainer>
    </div>
  )
}

export default CustomDataTable