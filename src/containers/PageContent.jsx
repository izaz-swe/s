import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import routes from "../routes/farmerRoute";
import PrivateRoutes from "../routes/PrivateRoutes";
function PageContent({ drawerWidth }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Routes>
        <Route element={<PrivateRoutes role="farmer"/>}>
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                exact={true}
                path={`${route.path}`}
                element={<route.component />}
              />
            );
          })}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default PageContent;
