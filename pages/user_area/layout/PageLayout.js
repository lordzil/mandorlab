import { Layout } from "antd";

import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import React, { useState } from "react";

const RootLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = (action, props) => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout toggleCollapse={() => toggleCollapse()} />
        {children}
      </Layout>
    </Layout>
  );
};

export default RootLayout;
