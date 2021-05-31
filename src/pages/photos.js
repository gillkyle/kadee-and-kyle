import * as React from "react";
import Header from "../components/header";
import TabNav from "../components/tabnav";
import Footer from "../components/footer";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Cormorant Garamond, -apple-system, Roboto, sans-serif, serif",
  letterSpacing: 1,
};

const Photos = () => {
  return (
    <main style={pageStyles}>
      <title>Home | Kadee and Kyle</title>
      <Header />
      <TabNav />
      <Box display="flex" alignItems="center" maxWidth={320} margin="0 auto">
        <StaticImage src="../images/engaged.jpg" />
      </Box>
      <Footer />
    </main>
  );
};

export default Photos;
