import { useAtomValue } from "jotai";
import styled from "styled-components";

import { dataAtom } from "@/store/atoms/inputData";
import Required from "../Required";
import Radio from "../inputForm/Radio";
import { getTypesConfig } from "@/utils/getConfig";
import { Error } from "@/styles/Error.styled";

type TypesType = {
  name: string;
  value: string;
};

const Type = () => {
  const { shipTypeError } = useAtomValue(dataAtom);
  const types: TypesType[] = getTypesConfig();

  return (
    <Container>
      <TitleWrapper>
        <Title>Type</Title>
        <Required />
      </TitleWrapper>
      <OptionsWrapper>
        <Options>
          <Radio field={"shipType"} options={types} error={"shipTypeError"} />
        </Options>
        <Error>{shipTypeError}</Error>
      </OptionsWrapper>
    </Container>
  );
};

export default Type;

const Container = styled.div`
  width: 100%;
  height: 230px;

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

const OptionsWrapper = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 25px;
`;
