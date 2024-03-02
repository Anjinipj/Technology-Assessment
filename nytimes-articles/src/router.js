import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./main";
import ArticleDetail from "./components/ArticleDetails/ArticleDetails";
const Router = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path="/:id" element={<ArticleDetail />} />
  </Routes>
);

export default Router;
