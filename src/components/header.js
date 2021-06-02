import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { differenceInCalendarDays } from "date-fns";
import { Heading } from "@chakra-ui/react";
import ClientOnly from "../components/client-only";

const paragraphStyles = {
  marginBottom: 8,
  fontSize: 16,
  textAlign: `center`,
  color: `#80765b`,
  lineHeight: 1.5,
  letterSpacing: 3,
};

const Header = () => {
  const daysUntil = differenceInCalendarDays(new Date(2021, 7, 20), new Date());

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
          width={240}
        />
      </div>
      <Heading
        as="h1"
        marginTop={0}
        marginBottom={3}
        color="#80765b"
        fontWeight="normal"
        textAlign="center"
        textTransform="uppercase"
        lineHeight={1.25}
        size={"2xl"}
      >
        Kadee & Kyle
      </Heading>
      <p style={paragraphStyles}>August 20, 2021 • Bountiful, UT</p>
      {daysUntil >= 0 && (
        <p style={paragraphStyles}>
          <ClientOnly>
            <b>{daysUntil}</b> days to go
          </ClientOnly>
        </p>
      )}
    </>
  );
};

export default Header;
