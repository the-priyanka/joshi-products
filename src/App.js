import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Infrastructure from "./pages/InfrastructurePage";
import NavbarPage from "./pages/NavbarPage";
import ProductsPage from "./pages/ProductsPage";
import NewsPage from "./pages/NewsPage";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7700",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <NavbarPage />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route
              path="/products"
              exact
              element={<ProductsPage />}
            />
            <Route
              path="/infrastructure"
              exact
              element={<Infrastructure />}
            />
            <Route path="/gallery" exact element={<GalleryPage />} />
            <Route path="/news" exact element={<NewsPage />} />
            <Route path="/contact" exact element={<ContactPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
