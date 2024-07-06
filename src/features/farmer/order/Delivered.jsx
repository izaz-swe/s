import React, { useEffect, useState } from "react";
import TitleCard from "../../../components/cards/TitleCard";
import CustomDataTable from "../../../components/CustomDataTable/CustomDataTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Delivered = ({ orders }) => {
  const [rowsWithIds, setRowsWithIds] = React.useState([]); // Manage rows with IDs in state
  useEffect(() => {
    if (orders) {
      const filteredOrders = orders.filter((order) => order.status === "delivered");
      const mappedRows = filteredOrders.map((row, index) => ({
        ...row,
        id: index + 1,
      }));
      setRowsWithIds(mappedRows);
    }
  }, [orders]); // Re-run useEffect when orders change

  
  return (
    <TitleCard title="Delivered">
      <CustomDataTable>
        <Table sx={{ minWidth: 500 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsWithIds.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row?.id}
                </TableCell>
                <TableCell>{row?.offerDetails?.offerName}</TableCell>
                <TableCell>{row?.offerDetails?.weight}</TableCell>
                <TableCell>{row?.offerDetails?.price}</TableCell>
                
                <TableCell sx={{"color":"green"}}>
                  Completed
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomDataTable>
    </TitleCard>
  );
};

export default Delivered;
