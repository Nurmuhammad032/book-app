import { useState, ChangeEventHandler } from "react";

const useForm = <T extends object>(values: T) => {
  const [form, setForm] = useState<T>(values);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    form,
    changeHandler,
  };
};

export default useForm;
