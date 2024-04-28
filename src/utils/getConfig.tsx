import Type from "@/components/steps/Type";
import Information from "@/components/steps/Information";
import Confirmation from "@/components/steps/Confirmation";
import Registered from "@/components/steps/Registered";

export const getStepsConfig = () => {
  return [
    { title: "Type", element: <Type /> },
    { title: "Information", element: <Information /> },
    { title: "Confirmation", element: <Confirmation /> },
    { title: "Registered", element: <Registered /> },
  ];
};

export const getTypesConfig = () => {
  return [
    {
      name: "Container",
      value: "Container",
    },
    {
      name: "Bulk Carrier",
      value: "Bulk Carrier",
    },
    {
      name: "LNGC",
      value: "LNGC",
    },
    {
      name: "PCTC",
      value: "PCTC",
    },
    {
      name: "Passenger",
      value: "Passenger",
    },
    {
      name: "Naval",
      value: "Naval",
    },
  ];
};

export const getInformationConfig = () => {
  return [
    {
      input: "text",
      name: "Ship name",
      field: "shipName",
    },
    {
      input: "text",
      name: "Call sign",
      field: "callSign",
    },
    {
      input: "radio",
      name: "Engine",
      field: "numOfEngines",
      error: "numOfEnginesError",
      options: [
        {
          name: "Single",
          value: "1",
        },
        {
          name: "Twin",
          value: "2",
        },
      ],
    },
    {
      input: "text",
      name: "Length",
      field: "length",
      error: "lengthError",
    },
    {
      input: "text",
      name: "Beam",
      field: "beam",
      error: "beamError",
    },
    {
      input: "text",
      name: "Draft",
      field: "draft",
      error: "draftError",
    },
  ];
};
