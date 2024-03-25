import React from "react";
import { MainLayoutProps } from "../../interfaces/layouts";
import { Header } from "../header/headerLayout";
import { Footer } from "../footer/footerLayout";
import "./mainLayout.scss";
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
