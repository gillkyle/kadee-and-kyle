import * as React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "gatsby";

const TabNav = () => {
  return (
    <Box display="flex" flexDir="row" justifyContent="center" my={6}>
      <ButtonGroup colorScheme="yellow" variant="ghost" isAttached size="lg">
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/registry">
          Registry
        </Button>
        <Button as={Link} to="/photos">
          Photos
        </Button>
        <Button as={Link} to="/invitations">
          Invitations
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TabNav;
