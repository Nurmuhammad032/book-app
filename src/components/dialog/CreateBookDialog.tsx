import { FC, useContext, useState } from "react";
import { IDialogProps } from "./types";
import { Dialog, Stack } from "@mui/material";
import styled from "styled-components";
import { TextInput } from "../input";
import { IconX } from "../icons";
import { BlueButton, OutlineBlueButton } from "../button";
import { sm } from "../../breakpoints";
import { isValidISBNCode } from "../../utils/validateIsbn";
import { apiFetch } from "../../utils/axiosConfig";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Context, { ContextProps } from "../../context/GlobalContext";

const CreateBookDialog: FC<IDialogProps> = ({ open, close }) => {
  const { getAllBooks } = useContext(Context) as ContextProps;
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const validateIsbnInput = () => {
    setError("");
    let validationError = false;

    if (!isbn.length) {
      validationError = true;
      setError("Isbn is required");
    } else if (!isValidISBNCode(isbn)) {
      setError("Isbn is not valid");
      validationError = true;
    }

    if (validationError) {
      return true;
    }

    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(e.target.value);
  };

  const submit = async () => {
    setIsPending(true);
    try {
      const res = await apiFetch.post("/books", {
        isbn,
      });
      await getAllBooks();
      toast.success(`${res.data.data.title} - book is successfully created!`);
      setIsbn("");
      close();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response?.data) {
        toast.error(err.response.data.message);
      }
    } finally {
      setIsPending(false);
    }
  };
  const handleSubmit = () => {
    const isError = validateIsbnInput();

    if (!isError) {
      submit();
    }
  };

  return (
    <Dialog fullWidth open={open} onClose={close}>
      <DialogWrapper>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Title>Create a book</Title>
          <span onClick={close} style={{ cursor: "pointer" }}>
            <IconX />
          </span>
        </Stack>
        <FormControl>
          <TextInput
            error={error}
            label="Isbn"
            name="isbn"
            placeholder="Enter isbn of book"
            onChange={handleChange}
            value={isbn}
          />
        </FormControl>
        <ButtonWrapper>
          <OutlineBlueButton onClick={close}>Close</OutlineBlueButton>
          <BlueButton isLoading={isPending} onClick={handleSubmit}>
            Create
          </BlueButton>
        </ButtonWrapper>
      </DialogWrapper>
    </Dialog>
  );
};

const Title = styled.h1`
  font-family: "mulish-semibold";
  color: var(--dark);
  font-size: 20px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 24px 28px;

  ${sm} {
    padding: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  ${sm} {
    flex-direction: column;
  }
`;

export default CreateBookDialog;
