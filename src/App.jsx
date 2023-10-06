import { Container } from "@mui/material";
import Navbar from "./comps/navbar/Navbar.comp";
import Hero from "./comps/hero/Hero.comp";
import Categories from "./comps/categories/Categories.comp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
    </>
  );
}

export default App;
