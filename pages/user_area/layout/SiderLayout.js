import { Menu, Layout } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Favicon from "@/public/favicon.ico";
import { MenuOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

const items = [
  getItem(
    "My Profile",
    "account",
    <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />
  ),
  getItem(
    "My Projects",
    "projects",
    <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />
  ),
  getItem(
    "My Review",
    "user_review",
    <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />
  ),
  getItem(
    "Messages",
    "messages",
    <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />
  ),
  getItem(
    "Settings",
    "settings",
    <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />
  )
];

const siderStyle = {
  textAlign: "center",
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#ffffff",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
};

const menuStyle = {
  textAlign: "left",
  lineHeight: "50px",
  color: "#000000",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column"
};

const SiderLayout = (props) => {
  return (
    <Sider collapsed={props.collapsed} style={siderStyle} width={300}>
      <div>
        <div className="w-full p-8">
          <Link href="/">
            <Image
              width={props.collapsed ? 50 : 300} // Change the image paths accordingly
              height={0}
              src={props.collapsed ? "/favicon.ico" : "/logo.png"} // Change the image paths accordingly
              className=""
              alt="logo"
            />
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={["projects"]}
          mode="inline"
          style={menuStyle}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={`/user_area/${item.key}`}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};

export default SiderLayout;
