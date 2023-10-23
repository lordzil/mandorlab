import RootLayout from "@/components/layout/PageLayout";
import { useTranslation } from "next-i18next";
// import Carousel from "@/pages/Homepage/components/carousel";
import About from "./About-us/About";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
// import HeaderLayout from "./user_area/layout/HeaderLayout";

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

const LandingPage = () => {
  const { t } = useTranslation();
  const [quotationModalState, setQuotationModalState] = useState(false);
  return (
    <div>
      <About />
    </div>
  );
};
// LandingPage.getLayout = (page) => {
//   return <HeaderLayout>{page}</HeaderLayout>;
// };
LandingPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default LandingPage;
