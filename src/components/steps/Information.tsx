import { useAtomValue } from "jotai";
import styled from "styled-components";

import { dataAtom } from "@/store/atoms/inputData";
import Required from "../Required";
import Text from "../inputForm/Text";
import Radio from "../inputForm/Radio";
import { getInformationConfig } from "@/utils/getConfig";
import { Error } from "@/styles/Error.styled";

type InformationType = {
  input: string;
  name: string;
  field: string;
  error?: string;
  options?: {
    name: string;
    value: string;
  }[];
};

const Information = () => {
  const { numOfEnginesError } = useAtomValue(dataAtom);
  const information: InformationType[] = getInformationConfig();

  return (
    <Container>
      <TitleWrapper>
        <Title>Information</Title>
      </TitleWrapper>
      <FieldContainer>
        {information.map((info) => {
          return (
            <InputField key={info.name}>
              <LabelWrapper>
                <label>{info.name}</label>
                {info.error && <Required />}
              </LabelWrapper>
              {info.input === "text" && (
                <Text name={info.name} field={info.field} error={info.error} />
              )}
              {info.input === "radio" && info.options && (
                <Options>
                  <RadioWrapper>
                    <Radio
                      field={info.field}
                      options={info.options}
                      error={info.error}
                    />
                  </RadioWrapper>
                  <Error>{numOfEnginesError}</Error>
                </Options>
              )}
            </InputField>
          );
        })}
      </FieldContainer>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: top;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const FieldContainer = styled.div`
  width: 100%;
  height: 180px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: top;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 5px;

  display: flex;
  gap: 30px;
`;
