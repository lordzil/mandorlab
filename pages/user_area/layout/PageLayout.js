import { Layout } from "antd";

import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";




const RootLayout = ({ children }) => {
  return (
    <Layout>    
      <SiderLayout />
      <Layout>
        <HeaderLayout />
        {children}
      </Layout>
    </Layout>
  );
};

export default RootLayout;
