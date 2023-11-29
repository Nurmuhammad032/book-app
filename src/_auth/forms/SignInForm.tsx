import { ButtonWrapper, Title } from "../auth.styled";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextInput } from "../../components/input";

const SignInForm = () => {
  return (
    <>
      <Title>Sign in</Title>
      <Box
        component={"form"}
        sx={{
          "& > :not(style)": { width: "100%" },
          display: "flex",
          flexDirection: "column",
          gap: "1rem 0",
        }}
      >
        <TextInput
          disabled
          error={""}
          name="username"
          label="Your username"
          placeholder="Username"
        />
        <TextInput
          disabled
          error={""}
          name="username"
          label="Your username"
          placeholder="Username"
        />
        <ButtonWrapper>
          <Button fullWidth variant="contained" color="error">
            Sign in not working..
          </Button>
          <p>
            Already signed up?{" "}
            <Link to={"/sign-up"} style={{ color: "var(--primary-blue)" }}>
              Go to sign up.
            </Link>
          </p>
        </ButtonWrapper>
      </Box>
    </>
  );
};

export default SignInForm;
