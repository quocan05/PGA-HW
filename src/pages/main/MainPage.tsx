import { Button, Divider, Flex, Space, Typography } from "antd";
import { MainLayout } from "../../layouts/main/mainLayout";
import "./MainPage.scss";
import { ListData } from "../../containers/List/ListData";
import { useDispatch } from "react-redux";
import { confirmAction, resetAction } from "../../redux/reducers/listReducer";
export const MainPage = () => {
  return (
    <MainLayout>
      <ListData />
    </MainLayout>
  );
};
