import React from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, Skeleton } from '@mui/material';

const OfferModalSkeleton = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>
              <Skeleton variant="text" />
            </InputLabel>
            <Select label="Category" name="category" required>
              <MenuItem>
                <Skeleton variant="text" />
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" height={56} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>
              <Skeleton variant="text" />
            </InputLabel>
            <Select label="Is Active" name="isActive" required>
              <MenuItem>
                <Skeleton variant="text" />
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" disabled>
            <Skeleton variant="text" width={120} />
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default OfferModalSkeleton