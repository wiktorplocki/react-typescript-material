import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { Button, Card, TextField } from "@material-ui/core";
import { FullScreenLayout } from "./components/FullScreenLayout";
import { LoginInfoBox } from "./components/LoginInfoBox";

interface InputEvent {
  target: {
    value: string;
  };
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 400px;
`;

const StyledHeading = styled.h1`
  font-family: "Roboto";
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin: 10px;
  }
`;

const LoginPage: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [loginDetails, setLoginDetails] = useState({
    ok: undefined,
    user: undefined,
  });

  const validateCorrectEmail = (email: string) => {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email);
  };

  const validatePasswordLength = (password: string) => password.length < 4;

  const generateHelperText = (text: string, validatorFn: boolean): string => {
    if (validatorFn) {
      return text;
    } else {
      return "";
    }
  };

  const onEmailChange = (inputEvent: InputEvent): void => {
    validateCorrectEmail(inputEvent.target.value);
    setEmail(inputEvent.target.value);
  };

  const onPasswordChange = (inputEvent: InputEvent): void => {
    validatePasswordLength(inputEvent.target.value);
    setPassword(inputEvent.target.value);
  };

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    setClickCount((prev) => prev + 1);

    if (clickCount % 3 === 0) {
      fetch(`${process.env.REACT_APP_SUCCESS}`)
        .then((res: Response) => res.json())
        .then((result) => setLoginDetails(result));
    } else {
      fetch(`${process.env.REACT_APP_FAILURE}`)
        .then((res: Response) => res.json())
        .then((result) => setLoginDetails(result));
    }
  };

  return (
    <FullScreenLayout>
      <StyledCard>
        <StyledHeading>Login</StyledHeading>
        <StyledForm onSubmit={onSubmit}>
          <TextField
            id="email-input"
            label="Email address"
            variant="outlined"
            onChange={(event: InputEvent) => onEmailChange(event)}
            error={!validateCorrectEmail(email)}
            helperText={generateHelperText(
              "Invalid email",
              !validateCorrectEmail(email)
            )}
            type="email"
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={(event: InputEvent) => onPasswordChange(event)}
            error={validatePasswordLength(password)}
            helperText={generateHelperText(
              "Password should be longer than 5 characters",
              validatePasswordLength(password)
            )}
            type="password"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={
              !validateCorrectEmail(email) || validatePasswordLength(password)
            }
          >
            Log in
          </Button>
        </StyledForm>
        {loginDetails && <LoginInfoBox loginDetails={loginDetails} />}
      </StyledCard>
    </FullScreenLayout>
  );
};

export { LoginPage };
