import { SetterOrUpdater } from "recoil";

import { DataAtom } from "@/store/atoms/inputData";
import { setError } from "./setError";

type ValidateRadioProps = {
  field: string;
  value: string;
  error: string;
  setData: SetterOrUpdater<DataAtom>;
};

type ValidateTextProps = {
  name: string;
  input: string;
  error: string;
  setData: SetterOrUpdater<DataAtom>;
};

export const validateRadio = ({
  field,
  value,
  error,
  setData,
}: ValidateRadioProps) => {
  if (value === "") {
    setError({ setData, error, message: `Please select one of the ${field}` });
    return false;
  }

  setData((prev) => ({ ...prev, [error]: undefined }));
  return true;
};

export const validateText = ({
  name,
  input,
  error,
  setData,
}: ValidateTextProps) => {
  if (input === "") {
    setError({ setData, error, message: `Please enter a ${name}` });
    return false;
  }

  if (isNaN(Number(input))) {
    setError({ setData, error, message: "Please enter a number only" });
    return false;
  }

  if (Number(input) <= 0) {
    setError({
      setData,
      error,
      message: "Please enter a number greater than 0",
    });
    return false;
  }

  if (input.indexOf(".") !== -1 && input.length - input.indexOf(".") - 1 > 1) {
    setError({
      setData,
      error,
      message: "Max precision is 1 decimal places",
    });
    return false;
  }

  setData((prev) => ({ ...prev, [error]: undefined }));
  return true;
};
