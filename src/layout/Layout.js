import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToTop from "../utils/backToTopIcon/BackToTop";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </Container>
  );
};
