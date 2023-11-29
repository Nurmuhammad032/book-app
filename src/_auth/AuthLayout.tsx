import styled from "styled-components";
import { Outlet, Navigate } from "react-router-dom";
import Context, { ContextProps } from "../context/GlobalContext";
import { useContext } from "react";
import { sm } from "../breakpoints";

export default function AuthLayout() {
  const { isAuthenticated } = useContext(Context) as ContextProps;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <AuthWrapper>
            <FormCard>
              <Outlet />
            </FormCard>
          </AuthWrapper>
        </>
      )}
    </>
  );
}

const AuthWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 700px) {
    align-items: start;
  }
`;

const FormCard = styled.div`
  max-width: 430px;
  width: 100%;
  padding: 48px 28px;
  background-color: var(--light-white);
  border-radius: 12px;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);

  ${sm} {
    background-color: transparent;
    box-shadow: none;
  }
`;
