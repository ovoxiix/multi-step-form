import { useAtom } from "jotai";
import styled from "styled-components";

import { dataAtom } from "@/store/atoms/inputData";

type RadioProps = {
  field: string;
  options: {
    name: string;
    value: string;
  }[];
  error?: string;
};

const Radio = ({ field, options, error }: RadioProps) => {
  const [data, setData] = useAtom(dataAtom);

  return (
    <>
      {options.map((option) => {
        return (
          <LabelCustom key={option.name}>
            <RadioCustom
              type="radio"
              name={field}
              value={option.value}
              checked={option.value === data[field]}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [field]: e.target.value,
                  ...(error !== undefined ? { [error]: undefined } : {}),
                }))
              }
            />
            {option.name}
          </LabelCustom>
        );
      })}
    </>
  );
};

export default Radio;

const LabelCustom = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const RadioCustom = styled.input`
  appearance: none;
  position: relative;

  width: 13px;
  height: 13px;
  margin-right: 5px;

  border: 1px solid #000;
  border-radius: 50%;

  &:checked {
    &::before {
      content: "";

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 8px;
      height: 8px;

      background-color: #000;

      border-radius: 50%;
    }
  }
`;
