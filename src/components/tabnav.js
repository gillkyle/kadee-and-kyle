import * as React from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { Link } from "gatsby";

const TabNav = () => {
  return (
    <Box display="flex" flexDir="row" justifyContent="center" my={6}>
      <Stack direction={["row"]} spacing={[1, 2, 4]}>
        <Button
          as={Link}
          colorScheme="yellow"
          py={2}
          px={[2, 3]}
          variant="ghost"
          size="md"
          _focus={{ boxShadow: `0 0 0 2px rgba(236,236,213,0.25)` }}
          to="/"
        >
          Home
        </Button>
        <Button
          as={Link}
          colorScheme="yellow"
          py={2}
          px={[2, 3]}
          variant="ghost"
          size="md"
          _focus={{ boxShadow: `0 0 0 2px rgba(236,236,213,0.25)` }}
          to="/registry"
        >
          Registry
        </Button>
        <Button
          as={Link}
          colorScheme="yellow"
          py={2}
          px={[2, 3]}
          variant="ghost"
          size="md"
          _focus={{ boxShadow: `0 0 0 2px rgba(236,236,213,0.25)` }}
          to="/photos"
        >
          Photos
        </Button>
        <Button
          as={Link}
          colorScheme="yellow"
          py={2}
          px={[2, 3]}
          variant="ghost"
          size="md"
          _focus={{ boxShadow: `0 0 0 2px rgba(236,236,213,0.25)` }}
          to="/invitations"
        >
          Invitations
        </Button>
      </Stack>
    </Box>
  );
};

export default TabNav;
