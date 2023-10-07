import { Button, Container, Typography } from "@mui/material";
import React from "react";
import "./Hero.style.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <p>Comfort with style</p>
        <Typography
          variant="h2"
          fontWeight={700}
          lineHeight={0.6}
          className="top"
        >
          Perfect for
        </Typography>
        <Typography variant="h2" fontWeight={700} className="bottom">
          every occasion
        </Typography>
        <Button variant="contained" color="success">
          Shop now
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
