import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Link, Checkbox, ErrorMessage, Preloader } from "@ui";
import { validate } from "./validate";

const Card = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.borderRadius};
  position: relative;
  box-shadow: 0px 0px 20px 9px rgba(0, 0, 0, 0.2);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
`;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  Input,
  Button {
    margin-bottom: 1rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.secondary};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const SuccessContainer = styled.div`
  color: ${(props) => props.theme.colors.success};
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const SuccessMessage = styled.span`
  margin-bottom: 1rem;
`;

type IndicatorProps = {
  error: boolean;
  success: boolean;
};

const Indicator = styled.div<IndicatorProps>`
  width: 100%;
  height: 1rem;
  background: ${(props) =>
    props.success
      ? props.theme.colors.success
      : props.error
      ? props.theme.colors.error
      : props.theme.colors.neutral};
  border-radius: ${(props) => props.theme.borderRadius};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const acceptedLogin = "test@gmail.com";
const acceptedPassword = "test";

export function Auth() {
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const error = validate(data);
      if (!error) {
        if (
          data.email === acceptedLogin &&
          data.password === acceptedPassword
        ) {
          setAuthorized(true);
        } else {
          setError("Wrong login and/or password");
        }
      } else setError(error);
      setLoading(false);
    }, 4000);
  };

  return (
    <Container>
      <Card>
        <Preloader loading={loading} />
        <Indicator error={!!error} success={authorized} />
        {!authorized && (
          <>
            <Form onSubmit={handleSubmit}>
              <Input
                name="email"
                label="Email"
                placeholder="Type your email"
                value={data.email}
                required={true}
                type="text"
                onChange={handleChange}
                error={!!error}
              />
              <Input
                name="password"
                label="Password"
                placeholder="Type your password"
                value={data.password}
                required={true}
                type="password"
                onChange={handleChange}
                error={!!error}
              />
              <Checkbox
                name="remember"
                label="Remember me"
                onChange={handleChange}
                checked={data?.remember}
              />
              <Button type="submit">Sign in</Button>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </Form>
            <Bottom>
              <Link to="/">Sign up</Link>
              or
              <Link to="/">Restore password</Link>
            </Bottom>
          </>
        )}
        {authorized && (
          <>
            <SuccessContainer>
              <SuccessMessage>Succesfully logged in</SuccessMessage>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setAuthorized(false)}
              >
                Logout
              </Button>
            </SuccessContainer>
          </>
        )}
      </Card>
    </Container>
  );
}
