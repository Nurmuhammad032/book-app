import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import { SignInForm, SignUpForm } from "./_auth/forms";
import { Home, NotFound } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
