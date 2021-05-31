import * as React from "react";
import Header from "../components/header";
import TabNav from "../components/tabnav";
import Footer from "../components/footer";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const Photos = () => {
  return (
    <div>
      <title>Photos</title>
      <Box display="flex" alignItems="center" maxWidth={320} margin="0 auto">
        <StaticImage src="../images/engaged.jpg" />
      </Box>
    </div>
  );
};

export default Photos;
