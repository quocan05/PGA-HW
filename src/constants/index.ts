import { IListItemData } from "../interfaces/data";
import { v4 as uuidv4 } from "uuid";

export const DefautInputValues = {
  TITLE: "this is inline you can editable",
  SUB_TITLE: "this is multi-line version",
};

export const initialListData: IListItemData[] = [
  {
    id: uuidv4(),
    key: 1,
    title: DefautInputValues.TITLE,
    subTitle: DefautInputValues.SUB_TITLE,
    img: "https://i.pinimg.com/564x/70/e9/d1/70e9d19535e48baa84842cfef880da08.jpg",
  },
  {
    id: uuidv4(),
    key: 2,
    title: DefautInputValues.TITLE,
    subTitle: DefautInputValues.SUB_TITLE,
    img: "https://i.pinimg.com/564x/70/e9/d1/70e9d19535e48baa84842cfef880da08.jpg",
  },
  {
    id: uuidv4(),
    key: 3,
    title: DefautInputValues.TITLE,
    subTitle: DefautInputValues.SUB_TITLE,
    img: "https://i.pinimg.com/564x/70/e9/d1/70e9d19535e48baa84842cfef880da08.jpg",
  },
];

//ENUM

export enum ActionType {
  CONFIRM = "confirm",
  RESET = "reset",
  UPDATE = "update",
}

export type Props = {
  itemData: IListItemData;
  handleConfirm: (state: boolean) => void;
  handleReset: (state: boolean) => void;
  handleClickReset: () => void;
};

export const isEvenNumber = (value: number) => {
  return value % 2 === 0;
};

export const getDateFormat = (value: number) => {
  let timestamp: number = Date.now();

  // Tạo một đối tượng Date từ timestamp
  let dateObject: Date = new Date(timestamp);

  // Lấy ngày, tháng và năm từ đối tượng Date
  let day: string | number = dateObject.getDate();
  let month: string | number = dateObject.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
  let year: number = dateObject.getFullYear();

  // Đảm bảo rằng ngày và tháng đều có hai chữ số bằng cách thêm số 0 nếu cần
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Tạo chuỗi ngày tháng năm trong định dạng 'dd mm yyyy'
  let formattedDate: string = `${day} / ${month} / ${year}`;
  return formattedDate;
};
