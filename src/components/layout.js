import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import TabNav from "./tabnav";
import Footer from "./footer";
import { Box } from "@chakra-ui/react";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Cormorant Garamond, -apple-system, Roboto, sans-serif, serif",
  letterSpacing: 1,
};

export default function Layout({ children }) {
  return (
    <Box as="main" p={[8, 12, 16]} style={pageStyles}>
      <Helmet titleTemplate="%s | Kyle Gill" />
      <Header />
      <TabNav />
      {children}
      <Footer />
    </Box>
  );
}
