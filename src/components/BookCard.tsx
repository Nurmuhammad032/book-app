import styled from "styled-components";
import { IconPencil, IconTrash } from "./icons";

const BookCard = () => {
  return (
    <Card>
      <div>
        <Title>Raspberry Pi User Guide</Title>
        <Info>
          Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
          vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
        </Info>
        <CardFooter>Eben Upton: 2012-year</CardFooter>
      </div>
      <Action>
        <DeleteIconBox>
          <IconTrash />
        </DeleteIconBox>
        <EditIconBox>
          <IconPencil />
        </EditIconBox>
      </Action>
    </Card>
  );
};

const Card = styled.div`
  padding: 32px;
  position: relative;
  max-width: 397px;
  background-color: var(--light-white);
  width: 100%;
  border: 1px solid var(--light-gray);
  border-radius: 12px;
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
  margin-bottom: 18px;
`;

const CardFooter = styled.p`
  font-size: 14px;
`;

const Action = styled.div`
  position: absolute;
  right: -1rem;
  top: 1rem;
`;

const BaseActionBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const DeleteIconBox = styled(BaseActionBox)`
  background-color: var(--error-red);
  border-radius: 6px 6px 6px 0px;
`;

const EditIconBox = styled(BaseActionBox)`
  background-color: var(--error-red);
  border-radius: 0px 6px 6px 6px;
`;

export default BookCard;
