import { FormEvent } from "react";
import styled from "styled-components";

import Stepper from "./Stepper";
import useMultiStepForm from "@/hooks/useMultiStepForm";
import { getStepsConfig } from "@/utils/getConfig";

const MultiStepForm = () => {
  const steps = getStepsConfig();
  const {
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    movePrevious,
    validateStep,
  } = useMultiStepForm({
    steps,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateStep();
  };

  return (
    <Background>
      <Container onSubmit={handleSubmit}>
        <Stepper steps={steps} currentStep={currentStepIndex} />
        {step}
        {currentStepIndex !== steps.length - 1 && (
          <Buttons>
            {!isFirstStep && (
              <PreviousButton type="button" onClick={movePrevious}>
                Back
              </PreviousButton>
            )}
            <NextButton type="submit">
              {isLastStep ? "Confirm" : "Continue"}
            </NextButton>
          </Buttons>
        )}
      </Container>
    </Background>
  );
};

export default MultiStepForm;

const Background = styled.main`
  position: relative;

  width: 100vw;
  height: 100vh;
`;

const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 900px;
  padding: 50px;

  border: 1px solid #e5e9ed;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

// const TitleWrapper = styled.div`
//   display: flex;
//   align-items: top;
// `;

// const Title = styled.span`
//   font-size: 30px;
//   font-weight: bold;
// `;

const Buttons = styled.div`
  position: relative;

  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
`;

const PreviousButton = styled.button`
  position: absolute;
  left: 0px;

  width: 80px;
  height: 100%;

  color: #000;
  background-color: #fff;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: #f1f5f8;
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: 0;

  width: 80px;
  height: 100%;

  color: #fff;
  background-color: #000;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: #303030;
  }
`;
