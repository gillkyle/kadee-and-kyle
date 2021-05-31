import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const headingStyles = {
  marginTop: 0,
  marginBottom: 16,
  fontSize: 52,
  fontWeight: `normal`,
  textTransform: `uppercase`,
  color: `#80765b`,
  textAlign: `center`,
};
const paragraphStyles = {
  marginBottom: 8,
  fontSize: 16,
  textAlign: `center`,
  textTransform: `uppercase`,
  color: `#80765b`,
  lineHeight: 1.5,
  letterSpacing: 3,
};

const Header = () => {
  return (
    <>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
        }}
      >
        <StaticImage
          src="../images/leaves.png"
          alt="Leaves"
          layout="fixed"
          placeholder="tracedSVG"
          width={300}
        />
      </div>
      <h1 style={headingStyles}>Kadee & Kyle</h1>
      <p style={paragraphStyles}>August 20, 2021 • Bountiful, UT</p>
      <p style={paragraphStyles}>80 days to go</p>
    </>
  );
};

export default Header;
