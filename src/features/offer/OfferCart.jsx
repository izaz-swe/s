import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOffersByUserId,
  updateOffer,
} from "../../state/reducers/offer/offerSlice";
import { DeleteOutline } from "@mui/icons-material";

const OfferCart = () => {
  const dispatch = useDispatch();
  const { userId, token } = useSelector((state) => state.user.user);
  const { offers, offerDeleted } = useSelector((state) => state.offer);
  useEffect(() => {
    dispatch(getOffersByUserId({ userId, token }));
  }, [dispatch, userId, offerDeleted]);
  const rowsWithIds = offers.filter(row => row.isActive).map((row, index) => ({ ...row, id: index + 1 }));
  const handleDelete = (offerId) => {
    const body = {
      offerId: offerId
    }
    dispatch(updateOffer({ token, body }));
  }
  return (
    <Table sx={{ minWidth: 500 }} aria-label="caption table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Unit</TableCell>
          <TableCell>Weight</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Remove</TableCell>
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
            <TableCell>
              <Button onClick={() => handleDelete(row.offerId)}>
                <DeleteOutline></DeleteOutline>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OfferCart;
