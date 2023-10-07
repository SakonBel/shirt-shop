import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Categories.style.scss";

const Categories = () => {
  return (
    <section className="categories-section">
      <Typography
        variant="h3"
        display="block"
        marginX="auto"
        maxWidth="35vw"
        fontWeight={300}
        letterSpacing={0.2}
      >
        Choose from our finest selection
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={4} marginTop={10}>
          <Grid item xs={7}>
            <div className="item item-1">
              <Typography variant="h4" fontWeight={600}>
                Men
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="item item-2">
              <Typography variant="h4" fontWeight={600}>
                Jackets
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="item item-3">
              <Typography variant="h4" fontWeight={600}>
                Accessories
              </Typography>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className="item item-4">
              <Typography variant="h4" fontWeight={600}>
                Women
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Categories;
