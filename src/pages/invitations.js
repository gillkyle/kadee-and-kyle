import * as React from "react";
import Header from "../components/header";
import TabNav from "../components/tabnav";
import Footer from "../components/footer";
import { Box } from "@chakra-ui/react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Cormorant Garamond, -apple-system, Roboto, sans-serif, serif",
  letterSpacing: 1,
};

const Invitations = () => {
  return (
    <main style={pageStyles}>
      <title>Invitations | Kadee and Kyle</title>
      <Header />
      <TabNav />
      <Box textAlign="center" pb={8} maxWidth={460} margin="0 auto">
        <p>
          If you'd like to receive an invitation by mail, please fill out the
          form below and we'll be sure to deliver to your address.
        </p>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        maxWidth={320}
        margin="0 auto"
        pos="relative"
        height={400}
      >
        <Box
          position="absolute"
          zIndex="400"
          background="white"
          bottom="0"
          right="0"
          height={100}
          width={130}
        ></Box>
        <iframe
          src="https://tally.so/embed/wkeMMm?hideTitle=1&alignLeft=1&transparentBackground=1"
          width="100%"
          height="500"
        ></iframe>
      </Box>
      <Footer />
    </main>
  );
};

export default Invitations;
