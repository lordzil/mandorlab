import Image from "next/image";
import RootLayout from "@/components/layout/PageLayout";
import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];
const Howto = () => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    //color: token.colorTextTertiary,
    //backgroundColor: token.colorFillAlter,
    //borderRadius: token.borderRadiusLG,
    //border: `1px dashed ${token.colorBorder}`,
    marginTop: 16
  };
  return (
    <main className="flex flex-col max-h-100vh mx-auto max-w-3xl px-4 pt-32 pb-32 scroll-smooth md:scroll-auto">
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24
        }}
      >
        {current < steps.length - 1 && (
          <Button
            className="bg-orange-400 text-white hover:bg-orange-800 hover:text-white"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px"
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </main>
  );
};

Howto.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Howto;
