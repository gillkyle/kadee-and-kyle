import * as React from "react";
import Header from "../components/header";
import TabNav from "../components/tabnav";
import Footer from "../components/footer";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Cormorant Garamond, -apple-system, Roboto, sans-serif, serif",
  letterSpacing: 1,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home | Kadee and Kyle</title>
      <Header />
      <TabNav />
      <Footer />
    </main>
  );
};

export default IndexPage;
