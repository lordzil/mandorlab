import { useState } from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { MenuOutlined } from "@ant-design/icons";

const HeaderLayout = (props) => {
  console.log("@@@ HeaderLayout", props);
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  return (
    <header className="flex flex-col">
      <div className="flex flex-row">
        <div
          className="flex flex-row px-9 mt-5"
          onClick={props.toggleCollapse}
          style={{
            flex: 1,
            paddingLeft: "1rem"
          }}
        >
          <MenuOutlined />
          {/* {collapsed ? <MenuOutlined /> : <MenuOutlined />} */}
        </div>
        <div className="flex flex-row px-3 mt-5">
          <div className="flex self-end"></div>
          <div className="flex-auto"></div>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex items-stretch px-0 md:px-12 bg-orange h-14"></div>
    </header>
  );
};

export default HeaderLayout;
