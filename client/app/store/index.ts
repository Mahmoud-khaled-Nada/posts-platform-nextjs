import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./postSlice";
import friendRequestReducer from "./friends/friendRequestSlice";
import friendReducer from "./friends/friendSlice";
import NotificationReducer from "./notifications";
import userReducer from "./userSlice";
import tabsReducer from "./tabSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    friendRequest: friendRequestReducer,
    friend: friendReducer,
    notification: NotificationReducer,
    tabs: tabsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
