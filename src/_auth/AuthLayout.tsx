import styled from "styled-components";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;

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
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormCard = styled.div`
  max-width: 430px;
  width: 100%;
  padding: 48px 28px;
  background-color: var(--light-white);
  border-radius: 12px;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;
