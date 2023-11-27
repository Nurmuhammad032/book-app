import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { BlueButton } from "../../components/button";
import { IconPlus } from "../../components/icons";
import BookCard from "../../components/BookCard";

const Home = () => {
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
            <BlueButton icon={<IconPlus />}>Create a book</BlueButton>
          </ButtonWrapper>
        </Stack>
        <div>
          <BookCard />
        </div>
      </div>
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

export default Home;
