import Image from "next/image";
import { Skeleton, Anchor } from "antd";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState, useRef } from "react";
import RootLayout from "@/components/layout/PageLayout";
import About from "../About-us/About";
import { useRouter } from "next/router";

const title_style =
  "text-3xl font-bold font-tilt text-gray-900 leading-[1.4] mb-5";
export async function getStaticProps(context) {
  try {
    // extract the locale identifier from the URL
    const { locale } = context;
    return {
      props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale))
      }
    };
  } catch (error) {
    return {};
  }
}
const CreateQuotation = (props) => {
  const [lastVisitedPage, setLastVisitedPage] = useState("");

  // useEffect(() => {
  //   // Store the current route in state when the route changes
  //   setLastVisitedPage(router.asPath);
  // }, [router.asPath]);// const [isOpenQuotation, setIsOpenQuotation] = useState(false);
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return; // 👈️ return early if first render
  //   }
  //   setIsOpenQuotation(!isOpenQuotation);
  // }, [props.toggleStatus]);
  // return (
  //   <RootLayout toggleQuotation={isOpenQuotation}>
  //     <About />
  //   </RootLayout>
  // );
  return;
};
CreateQuotation.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default CreateQuotation;
