import axios from "axios";

import { DataType } from "@/store/atoms/inputData";

export const postData = async (data: DataType) => {
  try {
    await axios.post("/api/registration", {
      shipType: data.shipType,
      shipName: data.shipName,
      callSign: data.callSign,
      numOfEngines: Number(data.numOfEngines),
      length: Number(data.length),
      beam: Number(data.beam),
      draft: Number(data.draft),
    });
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
  }
};
