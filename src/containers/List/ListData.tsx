import { Button, Divider, Flex, Space } from "antd";
import { ListItem } from "../../components/list.item/ListItem";
import "./ListData.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useCallback, useState } from "react";
import { confirmAction, resetAction } from "../../redux/reducers/listReducer";
import { getDateFormat } from "../../constants";
export const ListData = () => {
  const datas = useSelector((state: RootState) => state.listData);

  const dispatch = useDispatch();
  const [confirmBtn, setConfirmBtn] = useState(false);
  const [reserBtn, setResetBtn] = useState(false);
  const handleConfirmBtn = useCallback((conf: boolean) => {
    setConfirmBtn(conf);
  }, []);
  const handleResetBtn = useCallback((reset: boolean) => {
    setResetBtn(reset);
  }, []);

  const handleClickReset = () => {
    dispatch(resetAction());
    setResetBtn(false);
    setConfirmBtn(false);
  };
  const handleClickConfirm = () => {
    dispatch(confirmAction());
    setResetBtn(false);
    setConfirmBtn(false);
  };

  return (
    <>
      <Space
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Divider
          plain
          orientation="left"
          style={{ color: "#ffff", fontWeight: "600" }}
        >
          {`Today is : ${getDateFormat(Date.now())}`}
        </Divider>
        <Button
          disabled={!confirmBtn}
          type="primary"
          onClick={() => {
            handleClickConfirm();
          }}
        >
          Confirm
        </Button>
        <Button
          disabled={!reserBtn}
          onClick={() => {
            console.log("click reset");
            handleClickReset();
          }}
        >
          Reset
        </Button>
      </Space>
      <Flex vertical gap={5} style={{ width: "100%" }}>
        {datas.listDataOfState.map((item) => {
          return (
            <div>
              <ListItem
                key={item.id}
                itemData={item}
                handleConfirm={handleConfirmBtn}
                handleReset={handleResetBtn}
                handleClickReset={handleClickReset}
              />
            </div>
          );
        })}
      </Flex>
    </>
  );
};
