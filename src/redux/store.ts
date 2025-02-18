import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reducers/listReducer";

export const store = configureStore({
  reducer: {
    listData: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
