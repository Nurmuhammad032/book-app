import styled from "styled-components";
import { IconPencil, IconTrash } from "./icons";
import { lg } from "../breakpoints";
import { Button, Chip, CircularProgress, Stack } from "@mui/material";
import { FC, useContext, useState } from "react";
import { IBook } from "../types/book";
import { allStatus } from "../utils/constants";
import Context, { ContextProps } from "../context/GlobalContext";
import { apiFetch } from "../utils/axiosConfig";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type IStatus = Pick<IBook, "status">;
type IProps = IBook["book"] & IStatus;

const BookCard: FC<Omit<IProps, "cover">> = ({
  status,
  author,
  id,
  isbn,
  pages,
  published,
  title,
}) => {
  const { getAllBooks } = useContext(Context) as ContextProps;
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    setIsPending(true);
    try {
      await apiFetch.delete(`/books/${id}`);
      await getAllBooks();
    } catch (error) {
      toast.error((error as AxiosError).message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Card>
      <InfoWrapper>
        <div>
          <Title>{author || "Author is not defined!"}</Title>
          <Info>{title || "Book title is not defined!"}</Info>
          <Info style={{ marginTop: "2px" }}>
            Status:{" "}
            <span style={{ color: "var(--primary-blue)" }}>
              {allStatus[status as keyof typeof allStatus]}
            </span>
          </Info>
          <CardFooter>
            <p>
              Published: {published ? `${published}-year` : "Not specified"}
            </p>
            <span>{pages} pages</span>
          </CardFooter>
        </div>
        <Action className="float-actions">
          <DeleteIconBox onClick={handleDelete}>
            {isPending ? (
              <CircularProgress
                size={"20px"}
                color="inherit"
                sx={{
                  position: "absolute",
                  left: "6.6px",
                  top: "6px",
                }}
              />
            ) : (
              <IconTrash />
            )}
          </DeleteIconBox>
          <EditIconBox>
            <IconPencil />
          </EditIconBox>
        </Action>
        <PhoneButtonWrapper>
          <Button variant="outlined">Edit</Button>
          <Button variant="outlined">Delete</Button>
        </PhoneButtonWrapper>
      </InfoWrapper>
    </Card>
  );
};

const Card = styled.div`
  z-index: 10;
  max-width: 397px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  border: 1px solid var(--light-gray);
  border-radius: 12px;
  background-color: var(--light-white);
  width: 100%;
  padding: 32px;
  position: relative;

  &:hover .float-actions {
    opacity: 1;
    right: -32px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  color: var(--dark);
  font-family: "mulish-semibold", sans-serif;
  margin-bottom: 6px;
`;

const Info = styled.p`
  color: #333;
  font-size: 14px;
`;

const CardFooter = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 14px;
  }

  span {
    padding: 2px 12px;
    background-color: #efe6fd;
    font-size: 12px;
    color: #9654f4;
    border-radius: 8.5px;
  }

  ${lg} {
    margin-bottom: 18px;
  }
`;

const Action = styled.div`
  position: absolute;
  z-index: -11;
  right: 0;
  transition: all 0.3s;
  opacity: 0;
  top: 1rem;

  ${lg} {
    display: none;
  }
`;

const BaseActionBox = styled.div`
  width: 32px;
  cursor: pointer;
  height: 32px;
  position: relative;
  display: flex;
  margin: 2px 0;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
`;

const DeleteIconBox = styled(BaseActionBox)`
  background-color: var(--error-red);
  border-radius: 6px 6px 6px 0px;
`;

const EditIconBox = styled(BaseActionBox)`
  background-color: var(--primary-blue);
  border-radius: 0px 6px 6px 6px;
`;

const PhoneButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  display: none;

  ${lg} {
    display: flex;
  }
`;

export default BookCard;
