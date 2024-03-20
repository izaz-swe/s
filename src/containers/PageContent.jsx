import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import Dummy from "../components/Dummy";

function PageContent({drawerWidth}) {
  return (
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar/>
        <Routes>
          {
            routes.map((route, key) => {
              return (
                <Route key={key}
                  exact={true}
                  path={`${route.path}`}
                  element={<route.component/>}
                />
              )
            })
          }
          <Route path="*" element={<Dummy/>} />
        </Routes>
      </Box>
  );
}

export default PageContent;
