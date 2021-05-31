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

const ThankYou = () => {
  return (
    <main style={pageStyles}>
      <title>Thank You | Kadee and Kyle</title>
      <Header />
      <TabNav />
      <Box textAlign="center" pb={8} maxWidth={460} margin="0 auto">
        <p>
          Thank You! You can expect to receive an invitation in the next few
          months. We're excited to celebrate with you.
        </p>
        <Box my={4}>
          Some friends and family have reached out asking for our Venmo that
          aren't able to attend. What's more important to us is that we get to
          see and share support with friends and family on a day that will
          forever be meaningful to us, but we understand not everyone will be
          able to attend. That's okay!
        </Box>
      </Box>
      <Footer />
    </main>
  );
};

export default ThankYou;
