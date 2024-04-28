import { ReactElement, useState } from "react";
import { useAtom } from "jotai";

import { dataAtom } from "@/store/atoms/inputData";
import { validateRadio, validateText } from "@/utils/validateInput";
import { postData } from "@/utils/postData";

type useMultiStepFormProps = {
  steps: {
    title: string;
    element: ReactElement;
  }[];
};

const useMultiStepForm = ({ steps }: useMultiStepFormProps) => {
  const [data, setData] = useAtom(dataAtom);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const movePrevious = () => {
    setCurrentStepIndex((prev) => {
      return prev <= 0 ? 0 : prev - 1;
    });
  };

  const moveNext = async () => {
    if (currentStepIndex === steps.length - 2) {
      await postData(data);
    }
    setCurrentStepIndex((prev) => {
      return prev + 1;
    });
  };

  const validateStep = () => {
    switch (currentStepIndex) {
      case 0:
        if (
          validateRadio({
            field: "types",
            value: data.shipType,
            error: "shipTypeError",
            setData,
          })
        ) {
          moveNext();
        }
        break;
      case 1:
        const validations = [
          validateRadio({
            field: "engines",
            value: data.numOfEngines,
            error: "numOfEnginesError",
            setData,
          }),
          validateText({
            name: "Length",
            input: data.length,
            error: "lengthError",
            setData,
          }),
          validateText({
            name: "Beam",
            input: data.beam,
            error: "beamError",
            setData,
          }),
          validateText({
            name: "Draft",
            input: data.draft,
            error: "draftError",
            setData,
          }),
        ];
        if (validations.every(Boolean)) {
          moveNext();
        }
        break;
      case 2:
        moveNext();
        break;
      default:
        break;
    }
  };

  return {
    step: steps[currentStepIndex].element,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 2,
    movePrevious,
    validateStep,
  };
};

export default useMultiStepForm;
