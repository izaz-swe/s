import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getOffersByUserId } from "../../state/reducers/offer/offerSlice";

const OfferCart = () => {
  const dispatch = useDispatch();
  const { userId, token } = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getOffersByUserId({ userId, token }));
  }, [dispatch, userId]);
  const { offers } = useSelector((state) => state.offer);
  const rowsWithIds = offers.map((row, index) => ({ ...row, id: index + 1 }));

  return (
    <Table sx={{ minWidth: 500 }} aria-label="caption table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Unit</TableCell>
          <TableCell>Weight</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsWithIds.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.offerName}</TableCell>
            <TableCell>{row.unit}</TableCell>
            <TableCell>{row.weight}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OfferCart;
