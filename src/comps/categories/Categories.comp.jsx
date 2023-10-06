import { Typography } from "@mui/material";
import React from "react";
import "./Categories.style.scss";

const Categories = () => {
  return (
    <section className="categories-section">
      <Typography variant="h5" fontWeight={700}>
        Choose from our finest selection
      </Typography>
    </section>
  );
};

export default Categories;
