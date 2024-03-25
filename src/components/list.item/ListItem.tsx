import TextArea from "antd/es/input/TextArea";
import "./ListItem.scss";
import { Divider, Image, Input, Spin, Typography } from "antd";
import { isEvenNumber, Props } from "../../constants";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  confirmAction,
  resetAction,
  updateAction,
} from "../../redux/reducers/listReducer";
export const ListItem = (prop: Props) => {
  const { itemData, handleConfirm, handleReset, handleClickReset } = prop;

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingSubTitle, setIsEditingSubTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState(itemData.title);
  const [subTitle, setSubTitle] = useState(itemData.subTitle);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const beginTitle = itemData.title;
  const beginSubTitle = itemData.subTitle;

  const handleChangeToInputTitle = () => {
    setIsEditingTitle(true);
  };
  const handleChangeToInputSubTitle = () => {
    setIsEditingSubTitle(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      isEditingTitle &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsEditingTitle(false);
    }
    if (
      isEditingSubTitle &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsEditingSubTitle(false);
    }
  };

  const handleBlurTitle = () => {
    setIsEditingTitle(false);
  };
  const handleBlurSubTitle = () => {
    setIsEditingSubTitle(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    setSubTitle(itemData.subTitle);
    setTitle(itemData.title);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [itemData, itemData.title, itemData.subTitle]);

  return (
    <div className="wrapper" key={itemData.id}>
      <div className="wrapper-image">
        {isLoading ? (
          <>Loading image</>
        ) : (
          <Image
            src={itemData.img}
            width={100}
            style={{ borderRadius: "50%" }}
          />
        )}
      </div>
      <div
        id={itemData.id}
        ref={wrapperRef}
        className={
          isEvenNumber(itemData.key)
            ? isLoading
              ? "wrapper"
              : "wrapper-even"
            : isLoading
            ? "wrapper"
            : "wrapper-odd"
        }
      >
        {isLoading ? (
          <Spin />
        ) : isEditingTitle ? (
          <Input
            className="custom-item"
            value={title}
            onChange={(e) => {
              handleConfirm(beginTitle === e.target.value ? false : true);
              handleReset(beginTitle === e.target.value ? false : true);
              setTitle(e.target.value);
              dispatch(
                updateAction({
                  id: itemData.id,
                  title: e.target.value,
                  subTitle: subTitle,
                })
              );
            }}
            onBlur={handleBlurTitle}
          ></Input>
        ) : (
          <Typography
            className="display-data"
            onClick={handleChangeToInputTitle}
            style={{
              padding: "4px 11px",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        )}
        <Divider style={{ margin: 10 }} />
        {isLoading ? (
          <br />
        ) : isEditingSubTitle ? (
          <TextArea
            autoSize
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
              handleConfirm(beginSubTitle === e.target.value ? false : true);
              handleReset(beginSubTitle === e.target.value ? false : true);
              dispatch(
                updateAction({
                  id: itemData.id,
                  title: title,
                  subTitle: e.target.value,
                })
              );
            }}
            onBlur={handleBlurSubTitle}
          />
        ) : (
          <Typography
            className="display-data"
            onClick={handleChangeToInputSubTitle}
            style={{ padding: "4px 11px" }}
          >
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
