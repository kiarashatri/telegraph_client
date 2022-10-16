// Dependency of using redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// import reducer slice's
import userReducer from "./slice/user";
import messengesReducer from "./slice/messeges";
import tweetsReducer from "./slice/tweets";

// export store for using in redux provider
export const store = configureStore({
  reducer: {
    user: userReducer,
    tweets: tweetsReducer,
    messenges: messengesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
