import React, { useState, useEffect } from "react";
import { Image } from "antd";
// import RootLayout from "../../components/layout/PageLayout";
import RootLayout from "@/components/layout/PageLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCookies } from "react-cookie";

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

export default function review() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { t } = useTranslation();

  // const cookies = useCookies(["user_jwt"]);
  useEffect(() => {
    // getStaticProps();
    // if (cookies) {
    getQuotationList();
    // }
  }, []);

  const getQuotationList = async () => {
    setLoading(true);
    try {
      // Send a POST request to your API for authentication
      const response = await fetch("http://34.101.200.253:8089/quotation/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJhdXRoIjoiYWRtaW4xQG1hbmRvcmxhYnMuY29tIiwiaWQiOiIxIiwiaWF0IjoxNjk4MjU1NjY0LCJleHAiOjE2OTgyNjEwNjR9.5me-m0McYl98bTNhKsZV2RIBJSMpH9Q8fgTU9Dh_GpA`
        }
      });
      setData(response);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen mx-auto max-w-3xl px-4 pt-4 pb-32 scroll-smooth md:scroll-auto">
      <div>
        {/* <h2 className={title_style}>{t("REVIEW")}</h2> */}
        <h2 className={title_style}>{"REVIEW"}</h2>
      </div>
      <div className="flex row-3 m-10">
        <section>
          <div className="md:flex-col space-y-10">
            <div
              className="md:flex-row space-y-10"
              style={{
                position: "relative",
                zIndex: -1
              }}
            >
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className="md:flex-col space-y-10">
              <p className="mt-2 text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex row-3 m-10">
        <section>
          <div className="md:flex-col space-y-10">
            <div
              className="md:flex-row space-y-10"
              style={{
                position: "relative",
                zIndex: -1
              }}
            >
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className="md:flex-col space-y-10">
              <p className="mt-2 text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex row-3 m-10">
        <section>
          <div className="md:flex-col space-y-10">
            <div
              className="md:flex-row space-y-10"
              style={{
                position: "relative",
                zIndex: -1
              }}
            >
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className="md:flex-col space-y-10">
              <p className="mt-2 text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

review.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
// export default review;
