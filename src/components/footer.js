import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        marginBottom: 8,
        fontSize: 20,
        textAlign: `center`,
        textTransform: `uppercase`,
        color: `#80765b`,
        lineHeight: 1.5,
        letterSpacing: 3,
      }}
    >
      <StaticImage
        src="../images/small-leaves.png"
        alt="Small Leaves"
        layout="fixed"
        placeholder="tracedSVG"
        width={180}
      />
      <div>8.20.2021</div>
      <Divider m={2} maxWidth={120} colorScheme="yellow" />
      <div>K&K</div>
    </div>
  );
};

export default Footer;
