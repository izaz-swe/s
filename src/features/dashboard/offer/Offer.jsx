import React, { useState } from 'react'
import TitleCard from '../../../components/cards/TitleCard';
import { Box, Grid, Modal, Typography } from '@mui/material';
import OfferModal from './OfferModal';
import OfferCart from './OfferCart';
import CustomDataTable from '../../../components/CustomDataTable/CustomDataTable';

const TopSideButtons = ({ handleOpen }) => {
  return (
      <button
        className="btn rounded  hover:bg-indigo-700 bg-indigo-600 px-6 py-2 btn-sm normal-case text-white"
        onClick={() => handleOpen()}
      >
        Make An Offer
      </button>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};
const textStyle = {
  textAlign: "center",
  color: "blue",
  fontFamily: "cursive",
  fontSize: "24px",
};

const Offer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <TitleCard 
        title="Make Offer"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons handleOpen={handleOpen}/>}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby = "modal-modal-title"
          aria-describedby= "modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant='h6' sx={textStyle}>
              Make Offer
            </Typography>
            <OfferModal handleClose={handleClose}></OfferModal>
          </Box>
        </Modal>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Typography variant='h5' gutterBottom>
              Offer List
            </Typography>
            <CustomDataTable>
              <OfferCart></OfferCart>
            </CustomDataTable>
          </Grid>
        </Grid>
      </TitleCard>
    </div>
  )
}

export default Offer