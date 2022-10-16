type GetUserProfileEmitResponseType = {
  _id: string;
  name: string;
  family: string;
  username: string;
  biography: string;
  photo: string;
  isFollowed: boolean;
  isBlocked: boolean;
  mutual: boolean;
  last_seen: Date;
};

export default GetUserProfileEmitResponseType;
