import React from "react";
import routes from "../routes/buyerRoute";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/ContainerHome/Home.jsx";
import PrivateRoutes from "../routes/PrivateRoutes.jsx";
import BlogPage from "../features/home/Blog/BlogPage.jsx";
import TrackingPage from "../features/home/Tracking/TrackingPage.jsx";
const HomePageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes role="buyer"/>}>
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
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/track/:id" element={<TrackingPage/>}/>
      </Routes>
    </div>
  );
};

export default HomePageContent;
