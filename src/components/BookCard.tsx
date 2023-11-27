import styled from "styled-components";

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
    </Card>
  );
};

const Card = styled.div`
  padding: 32px;
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

export default BookCard;
