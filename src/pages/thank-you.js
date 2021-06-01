import * as React from "react";
import { Box } from "@chakra-ui/react";

const ThankYou = () => {
  return (
    <div>
      <title>Thank You | Kadee and Kyle</title>
      <Box textAlign="center" pb={8} maxWidth={460} margin="0 auto">
        <p>
          Thank You! You can expect to receive an invitation in the next few
          months. We're excited to celebrate with you.
        </p>
        <Box my={4}>
          We understand not everyone will be able to attend, and that's okay! We
          look forward to seeing as many friends as we can.
        </Box>
      </Box>
    </div>
  );
};

export default ThankYou;
