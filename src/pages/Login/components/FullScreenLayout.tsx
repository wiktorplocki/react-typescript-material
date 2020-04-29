import React from "react";
import { Box } from "@material-ui/core";

const FullScreenLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Box
      display="flex"
      width={`${100}vw`}
      height={`${100}vh`}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export { FullScreenLayout };
