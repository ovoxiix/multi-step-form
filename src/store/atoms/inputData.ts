import { atom } from "jotai";

export type DataType = {
  shipType: string;
  shipTypeError: string | undefined;
  shipName?: string;
  callSign?: string;
  numOfEngines: string;
  numOfEnginesError: string | undefined;
  length: string;
  lengthError: string | undefined;
  beam: string;
  beamError: string | undefined;
  draft: string;
  draftError: string | undefined;
  [key: string]: string | undefined;
};

const data: DataType = {
  shipType: "",
  shipTypeError: undefined,
  shipName: "",
  callSign: "",
  numOfEngines: "",
  numOfEnginesError: undefined,
  length: "",
  lengthError: undefined,
  beam: "",
  beamError: undefined,
  draft: "",
  draftError: undefined,
};

export const dataAtom = atom(data);
