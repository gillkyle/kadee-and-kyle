import { Box, Heading } from "@chakra-ui/react";
import * as React from "react";

const IndexPage = () => {
  return (
    <div>
      <title>Home</title>
      <Box maxW="50ch" textAlign="center" m="2rem auto">
        <Heading fontWeight="normal">Sealing</Heading>
        <Heading as="h2" fontWeight="normal" fontSize="2xl" mb={2}>
          12:00pm-1:00pm
        </Heading>
        <Box my="2">The Bountiful Temple</Box>
        <Box my="2">640 S Bountiful Blvd, Bountiful, UT 84010</Box>
        <Box my="2" mb="6" fontStyle="italic">
          Please arrive 30 min early.
        </Box>
        <Heading fontWeight="normal">Luncheon</Heading>
        <Heading as="h2" fontWeight="normal" fontSize="2xl" mb={2}>
          2:30pm-4:00pm
        </Heading>
        <Box my="2">Tucanos</Box>
        <Box my="2" mb="6">
          265 North West Promontory Farmington, UT 84025
        </Box>
        <Heading fontWeight="normal">Reception</Heading>
        <Heading as="h2" fontWeight="normal" fontSize="2xl" mb={2}>
          6:30pm-9:00pm
        </Heading>
        <Box my="2">The Gill residence</Box>
        <Box my="2">211 Willowmere Dr. Kaysville, UT 84037</Box>
        <Box my="2" mb="6" fontStyle="italic">
          A light grazing board, drinks, and ice cream will be provided.
        </Box>
      </Box>
    </div>
  );
};

export default IndexPage;
