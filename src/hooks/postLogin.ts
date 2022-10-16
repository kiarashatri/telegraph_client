import { AxiosResponse } from "axios";
import PostLoginAxiosResponseType from "../Types/axios/response/PostLoginAxiosResponseType";
import PostLoginHookResponseType from "../Types/hooks/postLoginHookResonseType";
import api from "./api";

const postLogin = async (
  inputUsername: string,
  inputPassword: string
): Promise<PostLoginHookResponseType> => {
  const response: PostLoginHookResponseType = {
    authenticated: false,
  };
  try {
    const apiResponse: AxiosResponse<PostLoginAxiosResponseType> =
      await api.post<PostLoginAxiosResponseType>("/login", {
        username: inputUsername,
        password: inputPassword,
      });

    response.authenticated = apiResponse.data.authenticated;
    if (apiResponse.data.authenticated) {
      response.userId = apiResponse.data.userId;
      response.accessToken = apiResponse.data.acceccToken;
    }
  } catch (error) {
    response.authenticated = false;
  }
  return response;
};

export default postLogin;
