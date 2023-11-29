import { useState } from "react";
interface ErrorValues {
  [key: string]: any;
}

const useError = (values: ErrorValues) => {
  const [error, setErrorState] = useState<ErrorValues>(values);

  const setError = (key: string, value: string) => {
    setErrorState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const clearError = () => {
    setErrorState((prev) => {
      const emptyErrorState: ErrorValues = {};
      for (const key in prev) {
        emptyErrorState[key] = "";
      }
      return emptyErrorState;
    });
  };

  const isReadyDateToSend = <T extends object>(validationErrors: T) => {
    const keys = Object.keys(validationErrors);
    if (keys.length) {
      return keys.some((key) => validationErrors[key as keyof T] !== "");
    }
    return false;
  };

  return {
    error,
    setError,
    clearError,
    isReadyDateToSend,
  };
};

export default useError;
