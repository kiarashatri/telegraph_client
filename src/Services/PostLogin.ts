import axios from "axios";

type PostLoginType = {
  post_data: {
    authenticated: string;
    access_token: String;
  };
  post_status: number;
};

export default async function PostLogin(Username: string, Password: string) {
  let post_data;
  let post_status;
  try {
    await axios
      .post<PostLoginType>(
        `${process.env.REACT_APP_API_SERVER}/login`,
        { username: Username, password: Password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        post_data = res.data;
        post_status = res.status;
      });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      post_data = error.message;
      post_status = 400;
    } else {
      post_data = error;
      post_status = 500;
    }
  }
  return { post_data, post_status };
}
