import { ButtonWrapper, Title } from "../auth.styled";
import { Box } from "@mui/material";
import { BlueButton } from "../../components/button";
import { Link } from "react-router-dom";
import { TextInput } from "../../components/input";

const SignUpForm = () => {
  return (
    <>
      <Title>Sign up</Title>
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
          error={""}
          name="username"
          label="Your username"
          placeholder="Username"
        />
        <TextInput
          error={"fdasfsdafsa"}
          name="username"
          label="Your username"
          placeholder="Username"
        />
        <ButtonWrapper>
          <BlueButton isLoading={true}>Submit</BlueButton>
          <p>
            Already signed in?{" "}
            <Link to={"/sign-in"} style={{ color: "var(--primary-blue)" }}>
              Go to sign in.
            </Link>
          </p>
        </ButtonWrapper>
      </Box>
    </>
  );
};

export default SignUpForm;
