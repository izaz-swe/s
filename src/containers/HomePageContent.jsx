import React from "react";
import routes from "../routes/buyerRoute";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/ContainerHome/Home.jsx";
import PrivateRoutes from "../routes/PrivateRoutes.jsx";
import BlogPage from "../features/home/Blog/BlogPage.jsx";
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
      </Routes>
    </div>
  );
};

export default HomePageContent;
