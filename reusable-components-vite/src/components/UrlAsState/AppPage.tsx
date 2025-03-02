import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Users from "./UsersPage";
import ProductsPage from "./ProductsPage";

const UrlStatePage = () => {
  return (
    <>
      <Typography variant="h2">Url As State Example</Typography>

      <Stack spacing={2} direction="row">
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </Stack>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
};

export default UrlStatePage;
