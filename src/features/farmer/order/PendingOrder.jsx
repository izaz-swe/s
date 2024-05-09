import React, { useEffect, useState } from "react";
import TitleCard from "../../../components/cards/TitleCard";
import CustomDataTable from "../../../components/CustomDataTable/CustomDataTable";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  assignVehicle,
  getAvailableVehicle,
} from "../../../state/reducers/order/orderSlice";

const PendingOrder = ({ orders }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.user);
  const [rowsWithIds, setRowsWithIds] = React.useState([]); // Manage rows with IDs in state
  const [vehicle, setVehicle] = useState({vehicleId: ""});
  const { vehicles, vehicleAssigned } = useSelector((state) => state.order);
  useEffect(() => {
    if (orders) {
      const filteredOrders = orders.filter((order) => order.status === "paid");
      const mappedRows = filteredOrders.map((row, index) => ({
        ...row,
        id: index + 1,
      }));
      setRowsWithIds(mappedRows);
    }
    dispatch(getAvailableVehicle());
  }, [orders, dispatch, vehicleAssigned]); // Re-run useEffect when orders change

  const handleClick = (row) => {
    const body = {
      orderId: row.orderId,
      vehicleId: vehicle.vehicleId,
    };
    dispatch(assignVehicle({ token, body }));
  };
  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedVehicle = vehicles?.find(
      (cat) => cat.vehicleId === selectedId
     );
     setVehicle(selectedVehicle);
  }
  return (
    <TitleCard title="Pending Orders">
      <CustomDataTable>
        <Table sx={{ minWidth: 500 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Vehicle</TableCell>
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
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={vehicle.vehicleId}
                      label="Vehicle"
                      onChange={handleChange}
                    >
                      {vehicles?.map((veh) => (
                        <MenuItem
                          value={veh.vehicleId}
                          key={veh.vehicleId}
                        >
                          {veh?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleClick(row)}>
                    Assign Vehicle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomDataTable>
    </TitleCard>
  );
};

export default PendingOrder;
