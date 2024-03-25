export interface IListItemData {
  id: string;
  key: number;
  title: string;
  subTitle: string;
  img: string;
}

export interface IListDataState {
  listDataOfState: IListItemData[];
  confirmedData: IListItemData[];
}
