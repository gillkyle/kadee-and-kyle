import * as React from "react";
import Header from "../components/header";
import TabNav from "../components/tabnav";
import Footer from "../components/footer";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Cormorant Garamond, -apple-system, Roboto, sans-serif, serif",
  letterSpacing: 1,
};

const IndexPage = () => {
  return (
    <div>
      <title>Registry</title>
      <Box
        display="flex"
        alignItems="center"
        maxWidth={320}
        py={8}
        margin="0 auto"
        flexDir="column"
        textAlign="center"
      >
        <Box mb={4}>
          Thanks for considering contributing to our wish list, we are
          registered at Target.
        </Box>
        <Button
          colorScheme="yellow"
          size="lg"
          textTransform="uppercase"
          fontFamily="sans-serif"
          color="white"
          as="a"
          href="https://www.target.com/gift-registry/giftgiver?registryId=3c4b8422dccb4f099947e4a6a0d776e1&type=WEDDING"
          target="_blank"
          leftIcon={
            <svg
              style={{ marginTop: 6 }}
              version="1.1"
              id="Layer_1"
              x="0px"
              y="8px"
              width="32px"
              height="32px"
              viewBox="0 0 432 574"
            >
              <g>
                <g>
                  <path
                    fill="#fff"
                    d="M217.074,360.93c-71.239,0-129.052-57.721-129.052-128.972c0-71.38,57.813-129.059,129.052-129.059    c71.301,0,129.042,57.679,129.042,129.059C346.116,303.209,288.375,360.93,217.074,360.93 M217.074,38.459    c-106.796,0-193.399,86.625-193.399,193.499c0,106.792,86.603,193.39,193.399,193.39c106.842,0,193.581-86.598,193.581-193.39    C410.655,125.084,323.916,38.459,217.074,38.459z"
                  />
                  <path
                    fill="#fff"
                    d="M217.074,165.651c-36.607,0-66.268,29.589-66.268,66.307c0,36.597,29.66,66.274,66.268,66.274    c36.642,0,66.367-29.678,66.367-66.274C283.441,195.241,253.716,165.651,217.074,165.651"
                  />
                </g>
              </g>
            </svg>
          }
        >
          View Target Registry
        </Button>
      </Box>
    </div>
  );
};

export default IndexPage;
