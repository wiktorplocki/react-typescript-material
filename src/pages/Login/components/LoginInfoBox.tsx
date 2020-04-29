import React from "react";
import { Box } from "@material-ui/core";

type LoginDetails = { ok: boolean | undefined; user: string | undefined };

interface Props {
  loginDetails: LoginDetails;
}

const LoginInfoBox = ({
  loginDetails: { ok, user },
  ...props
}: Props): JSX.Element => (
  <Box
    width="200px"
    height="150px"
    marginBottom="25px"
    padding="10px"
    textAlign="center"
    bgcolor={ok ? "success.main" : "error.main"}
    color={ok ? "success.contrastText" : "success.contrastText"}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {ok ? `Success! Logged in as ${user}` : `Error! Login details incorrect!`}
  </Box>
);

export { LoginInfoBox };
