import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { BlueButton } from "../../components/button";
import { IconPlus } from "../../components/icons";
import BookCard from "../../components/BookCard";
import { xl } from "../../breakpoints";
import { useContext, useEffect, useState } from "react";
import { CreateBookDialog, EditBookDialog } from "../../components/dialog";
import Context, { ContextProps } from "../../context/GlobalContext";
import Loader from "../../components/Loader";

const Home = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const { getAllBooks, books } = useContext(Context) as ContextProps;
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleCreateDialogClose = () => {
    setOpenCreateDialog(false);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  return (
    <Section>
      <div className="container">
        <Stack
          direction={{ sm: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            component="h1"
            fontFamily={"mulish-bold"}
            fontSize={{ xs: 25, sm: 36 }}
            mb={{ sm: 0 }}
            sx={{ color: "var(--primary-blue)", flexShrink: 0, mb: 1 }}
          >
            You've got 7 book
          </Typography>
          <ButtonWrapper>
            <BlueButton
              icon={<IconPlus />}
              onClick={() => setOpenCreateDialog(true)}
            >
              Create a book
            </BlueButton>
          </ButtonWrapper>
        </Stack>
        <BookWrapper>
          {books ? (
            books.map((bk) => (
              <BookCard
                key={bk.book.id}
                title={bk.book.title}
                author={bk.book.author}
                id={bk.book.id}
                isbn={bk.book.isbn}
                pages={bk.book.pages}
                published={bk.book.published}
                status={bk.status}
              />
            ))
          ) : (
            <p>Nothing found</p>
          )}
        </BookWrapper>
      </div>
      <CreateBookDialog
        open={openCreateDialog}
        close={handleCreateDialogClose}
      />
      <EditBookDialog />
    </Section>
  );
};

const Section = styled.section`
  margin-top: 36px;
`;

const ButtonWrapper = styled.div`
  max-width: 11.3rem;
  width: 100%;
`;

const BookWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  ${xl} {
    justify-content: space-evenly;
  }
`;

export default Home;
