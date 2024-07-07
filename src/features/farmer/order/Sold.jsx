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
import { useDispatch, useSelector } from "react-redux";
import { getOrderByFarmerId } from "../../../state/reducers/order/orderSlice";

const Sold = () => {
  const [rowsWithIds, setRowsWithIds] = React.useState([]); // Manage rows with IDs in state
  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.user.user);
  const {farmerOrders} = useSelector((state)=> state.order)

  useEffect(()=> {
    dispatch(getOrderByFarmerId(token))
  }, [dispatch, token])
  useEffect(() => {
    if (farmerOrders) {
      const filteredOrders = farmerOrders.filter((order) => order.status === "delivered");
      const mappedRows = filteredOrders.map((row, index) => ({
        ...row,
        id: index + 1,
      }));
      setRowsWithIds(mappedRows);
    }
  }, [farmerOrders]); // Re-run useEffect when farmerOrders change

  
  return (
    <TitleCard title="All Sold Offer List">
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

export default Sold;
