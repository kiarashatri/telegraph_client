import { AxiosResponse } from "axios";
import VerifyTokenResponseType from "../Types/axios/response/VerifyTokenResponseType";
import api from "./api";

const verifyToken = async (token: string | null): Promise<boolean> => {
  let verify: boolean = true;

  if (token === null) return false;

  try {
    const apiResponse: AxiosResponse = await api.post<VerifyTokenResponseType>(
      "/verify_token",
      {
        ACCESS_TOKEN: token,
      }
    );

    verify = apiResponse.data.verify;
  } catch (error) {
    verify = false;
  }

  return verify;
};

export default verifyToken;
