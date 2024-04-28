import { SetterOrUpdater } from "recoil";

import { DataAtom } from "@/store/atoms/inputData";

type SetErrorProps = {
  setData: SetterOrUpdater<DataAtom>;
  error: string;
  message: string;
};

export const setError = ({ setData, error, message }: SetErrorProps) => {
  setData((prev) => ({
    ...prev,
    [error]: message,
  }));
};
