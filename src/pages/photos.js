import * as React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Photos = ({ data }) => {
  console.log(data);
  return (
    <div>
      <title>Photos</title>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={320}
        margin="0 auto"
      >
        {/* <Heading as="h2">Proposal</Heading> */}
        <Box mb={4}>
          <StaticImage src="../images/engaged.jpg" />
        </Box>
        <Stack>
          {data.allFile.nodes.map((node) => (
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} />
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Photos;

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { regex: "/engagements/" } }) {
      nodes {
        id
        relativeDirectory
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
