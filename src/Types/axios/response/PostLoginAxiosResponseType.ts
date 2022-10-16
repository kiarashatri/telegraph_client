type PostLoginAxiosResponseType = {
  authenticated: boolean;
  emailConfirmation?: boolean;
  userId?: string;
  acceccToken?: string;
};

export default PostLoginAxiosResponseType;
