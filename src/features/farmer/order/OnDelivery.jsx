import React, { useEffect, useState } from "react";
import TitleCard from "../../../components/cards/TitleCard";
import CustomDataTable from "../../../components/CustomDataTable/CustomDataTable";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { orderDelivered } from "../../../state/reducers/order/orderSlice";

const OnDelivery = ({ orders }) => {
  const [rowsWithIds, setRowsWithIds] = React.useState([]); // Manage rows with IDs in state
  const {token} = useSelector((state)=> state.user.user)
  
  useEffect(() => {
    if (orders) {
      const filteredOrders = orders.filter((order) => order.status === "confirmed");
      const mappedRows = filteredOrders.map((row, index) => ({
        ...row,
        id: index + 1,
      }));
      setRowsWithIds(mappedRows);
    }
  }, [orders]); // Re-run useEffect when orders change
  const dispatch = useDispatch();
  const handleDelivery = (ob)=> {
    const body = {
      orderId: ob.orderId,
      vehicle: ob.vehicle,
    };
    dispatch(orderDelivered({ token, body }));
  }
  return (
    <TitleCard title="On The Way">
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
                
                <TableCell>
                  <Button onClick={()=> handleDelivery(row)}>Received</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomDataTable>
    </TitleCard>
  );
};

export default OnDelivery;
