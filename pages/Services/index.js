// import Image from "next/image";
import { Flex, Row, Col } from "antd";
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
  const staticImage = [
    {
      url: "/images/service-icon/ac.png",
      id: 1,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/ceiling.png",
      id: 2,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/construction.png",
      id: 3,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/door_n_window.png",
      id: 4,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/electricity.png",
      id: 5,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/floor.png",
      id: 6,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/furniture.png",
      id: 7,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/lan.png",
      id: 8,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/one_day_service.png",
      id: 9,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/park.png",
      id: 10,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/pbx.png",
      id: 11,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/pesticides.png",
      id: 12,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/pipe.png",
      id: 13,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/renovation.png",
      id: 14,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/roof.png",
      id: 15,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/wall.png",
      id: 16,
      desc: "Test 1 2 3"
    },
    {
      url: "/images/service-icon/weld.png",
      id: 17,
      desc: "Test 1 2 3"
    }
  ];
  let printedImage = "";
  let content = "";
  return (
    // <>
    <main className="flex justify-center items-center min-h-screen">
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 m-4 "
        style={{
          position: "relative",
          zIndex: -1,
          alignItems: "center"
        }}
      >
        {staticImage.map((e) => {
          return (
            <div className="servicesImage">
              <img
                key={e.id}
                className="rounded-lg"
                // style={{
                //   width: "30% !important",
                //   height: "30% !important"
                //   // display: "block"
                // }}
                src={e.url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
Services.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Services;
