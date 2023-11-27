import styled from "styled-components";
import notFound from "../../assets/images/not-found.png";
import { BlueButton, OutlineBlueButton } from "../../components/button";
import { lg, sm } from "../../breakpoints";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <div>
        <img src={notFound} alt="not found" />
        <ButtonWrapper>
          <BlueButton onClick={() => navigate("/")}>Go home</BlueButton>
          <OutlineBlueButton onClick={() => window.location.reload()}>
            Reload the page
          </OutlineBlueButton>
        </ButtonWrapper>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  img {
    width: 100%;
    max-width: 720px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  padding: 0 5rem;
  justify-content: center;
  gap: 0 12px;

  ${lg} {
    margin-top: 50px;
    padding: 0;
  }

  ${sm} {
    flex-direction: column;
    gap: 12px 0;
  }
`;

export default NotFound;
