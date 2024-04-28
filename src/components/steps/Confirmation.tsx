import { useAtomValue } from "jotai";
import styled from "styled-components";

import { dataAtom } from "@/store/atoms/inputData";

type RenderPropertyProps = {
  label: string;
  value: string;
};

const Confirmation = () => {
  const data = useAtomValue(dataAtom);

  const renderProperty = ({ label, value }: RenderPropertyProps) => {
    return (
      value && (
        <ValueWrapper key={label}>
          "{label}": "{value}"
          <br />
        </ValueWrapper>
      )
    );
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>Confirmation</Title>
      </TitleWrapper>
      <FieldContainer>
        {"{"}
        <br />
        {Object.entries(data).map(([key, value]) =>
          value !== undefined
            ? renderProperty({ label: key, value: value.toString() })
            : null
        )}
        {"}"}
      </FieldContainer>
    </Container>
  );
};

export default Confirmation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
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
  padding: 15px;

  background-color: #f0f0f0;

  border-radius: 5px;

  line-height: 1.5;
`;

const ValueWrapper = styled.div`
  margin-left: 15px;
`;
