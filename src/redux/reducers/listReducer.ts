import { createAction, createReducer } from "@reduxjs/toolkit";
import { IListDataState, IListItemData } from "../../interfaces/data";
import {
  ActionType,
  DefautInputValues,
  initialListData,
} from "../../constants";

let initialState: IListDataState = {
  listDataOfState: initialListData,
  confirmedData: initialListData,
};

export const confirmAction = createAction(ActionType.CONFIRM);
export const resetAction = createAction(ActionType.RESET);
export const updateAction = createAction<{
  id: string;
  title: string;
  subTitle: string;
}>(ActionType.UPDATE);
export const listReducer = createReducer(initialState, (builder) => {
  builder.addCase(confirmAction, (state) => {
    const confirmed = state.listDataOfState;
    return { ...state, confirmedData: confirmed };
  });
  builder.addCase(resetAction, (state) => {
    const resettedData = state.confirmedData;
    return { ...state, listDataOfState: resettedData };
  });
  builder.addCase(updateAction, (state, action) => {
    const updatedList = state.listDataOfState.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          title: action.payload.title,
          subTitle: action.payload.subTitle,
        };
      }
      return item;
    });
    return { ...state, listDataOfState: updatedList };
  });
});
