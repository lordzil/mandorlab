import Image from "next/image";
import { Skeleton, Anchor } from "antd";
import { useTranslation } from "next-i18next";
import About from "./About-us/About";
import Header from "@/components/layout/HeaderLayout";
const title_style =
  "text-3xl font-bold font-tilt text-gray-900 leading-[1.4] mb-5";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <About />
    </>
  );
};

export default Homepage;
