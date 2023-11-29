import { ButtonWrapper, Title } from "../auth.styled";
import { Box } from "@mui/material";
import { BlueButton } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../../components/input";
import useForm from "../../hooks/useForm";
import useError from "../../hooks/useValidation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiFetch } from "../../utils/axiosConfig";
import { IUser } from "../../types/userInfo";
import { AxiosError } from "axios";
import { IResponse } from "../../types/response";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const { form, changeHandler } = useForm({
    name: "",
    email: "",
    key: "",
    secret: "",
  });

  const initialError = {
    name: "",
    email: "",
    key: "",
    secret: "",
  };

  const { error, setError, clearError, isReadyDateToSend } =
    useError(initialError);

  const validateInputs = () => {
    clearError();
    const { name, email, key, secret } = form;
    const validationsError = initialError;

    if (!name.length) {
      validationsError.name = "Name is required";
    }
    if (!email.length) {
      validationsError.email = "Email is required";
    } else if (!email.match(/[\w._]+@\w+\.\w{2,}/g)) {
      validationsError.email = "Email is not valid";
    }

    if (!secret.length) {
      validationsError.secret = "Secret field is required";
    }
    if (!key.length) {
      validationsError.key = "Key field is required";
    }

    const hasError = isReadyDateToSend(validationsError);

    if (hasError) {
      for (const key in validationsError) {
        setError(key, validationsError[key as keyof typeof validationsError]);
      }

      return true;
    }

    return false;
  };

  const submit = async () => {
    setIsPending(true);
    try {
      const res = await apiFetch.post<IResponse<IUser>>("/signup", form);
      if (res.data.isOk) {
        localStorage.setItem("userKey", res.data.data.key);
        localStorage.setItem("userSecret", res.data.data.secret);
        navigate("/");
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response?.data) {
        toast.error(err.response.data.message);
      }
    } finally {
      setIsPending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = validateInputs();

    if (!isError) {
      submit();
    }
  };

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
        onSubmit={handleSubmit}
      >
        <TextInput
          error={error.name}
          value={form.name}
          name="name"
          label="Your name"
          placeholder="Enter your name"
          onChange={changeHandler}
        />
        <TextInput
          error={error.email}
          value={form.email}
          name="email"
          label="Your email"
          placeholder="Enter your email"
          onChange={changeHandler}
        />
        <TextInput
          error={error.key}
          value={form.key}
          name="key"
          label="Your key"
          placeholder="Enter your key"
          onChange={changeHandler}
        />
        <TextInput
          error={error.secret}
          value={form.secret}
          name="secret"
          label="Your secret"
          placeholder="Enter your secret"
          onChange={changeHandler}
        />
        <ButtonWrapper>
          <BlueButton type="submit" isLoading={isPending}>
            Submit
          </BlueButton>
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
