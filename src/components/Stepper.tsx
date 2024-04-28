import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";

type StepperProps = {
  steps: {
    title: string;
    element: JSX.Element;
  }[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <Container>
      {steps.slice(0, -1).map((step, index) => {
        return (
          <Step key={step.title}>
            {index < currentStep ? (
              <FaCircleCheck size="40" />
            ) : (
              <Index>{index + 1}</Index>
            )}
            <Title>{step.title}</Title>
          </Step>
        );
      })}
    </Container>
  );
};

export default Stepper;

const Container = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Index = styled.div`
  width: 40px;
  height: 40px;

  border: 2px solid #d0d0d0;
  border-radius: 50%;

  font-weight: semi-bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span``;
