import { useAtom } from "jotai";
import styled from "styled-components";

import { dataAtom } from "@/store/atoms/inputData";
import { validateText } from "@/utils/validateInput";
import { Error } from "@/styles/Error.styled";

type TextProps = {
  name: string;
  field: string;
  error?: string;
};

type InputCustomStyledProps = {
  error: undefined | string;
};

const Text = ({ name, field, error }: TextProps) => {
  const [data, setData] = useAtom(dataAtom);

  return (
    <>
      <InputCustom
        type="text"
        defaultValue={`${data[field]}`}
        error={error ? (data[error] as string) : undefined}
        onChange={(e) => {
          setData((prev) => ({ ...prev, [field]: e.target.value }));
        }}
        onBlur={() => {
          if (error) {
            validateText({
              name,
              input: data[field] as string,
              error,
              setData,
            });
          }
        }}
      />
      {error && <Error>{data[error]}</Error>}
    </>
  );
};

export default Text;

const InputCustom = styled.input<InputCustomStyledProps>`
  width: 200px;
  height: 30px;

  border: 1px solid ${(props) => (props.error ? "#d90303" : "#e5e9ed")};
  border-radius: 5px;
`;
