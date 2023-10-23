import Image from "next/image";
import { Skeleton, Anchor } from "antd";
import RootLayout from "@/components/layout/PageLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Carousel from "./components/Carousel";

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

export async function test() {
  console.log("@@@ TEST CALLED");
}

const Review = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="flex flex-col min-h-screen mx-auto max-w-3xl px-4 pt-4 pb-32 scroll-smooth md:scroll-auto">
        <div>
          <h2 className={title_style}>{t("REVIEW")}</h2>
          <p className=" text-gray-700 text-justify">{t("REVIEW_TEXT")}</p>
        </div>
        <div className="flex row-3 m-10"></div>
      </main>
    </>
  );
};

Review.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Review;
