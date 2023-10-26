// import Image from "next/image";
import { Image, Flex, Row, Col } from "antd";
import { Skeleton, Anchor } from "antd";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RootLayout from "@/components/layout/PageLayout";
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

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <main
        className="flex flex-col h-screen m-auto"
        style={{
          position: "relative",
          zIndex: -1,
          alignItems: "center"
        }}
      >
        {/* <div>
          <h2 className={title_style}>{t("SERVICES")}</h2>
          <p className=" text-gray-700 text-justify">{t("SERVICES_TEXT")}</p>
        </div>
        <div className="flex row-3 m-10"></div> */}
        {/* <Row gutter={18}>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              // width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              // width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              // width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
        <Row gutter={18}>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
        <Row gutter={18}>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <Image
              className="servicesImage"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row> */}
      </main>
    </>
  );
};
Services.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Services;
