// import Image from "next/image";
import { Flex, Row, Col } from "antd";
import { Skeleton, Anchor } from "antd";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RootLayout from "@/components/layout/PageLayout";
import { useState } from "react";
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
  const separatedArrays = [];

  // Define the number of elements in each inner array
  const elementsPerArray = 5;

  for (let i = 0; i < staticImage.length; i += elementsPerArray) {
    // Use slice to extract a portion of the array containing 4 elements
    const newArray = staticImage.slice(i, i + elementsPerArray);
    separatedArrays.push(newArray);
  }

  const [clicked, setCliked] = useState("");

  return (
    // <>
    <main className="flex justify-center items-center min-h-screen md:container md:mx-auto">
      <div
        className="flex basis-full flex-col items-center"
        style={{
          position: "relative",
          zIndex: -1
        }}
      >
        {separatedArrays.map((e) => {
          return (
            <div className="flex grow">
              {e.map((e) => {
                return (
                  <img
                    key={e.id}
                    className="rounded-s-sm"
                    src={e.url}
                    alt=""
                    height={"180px"}
                    width={"180px"}
                    // onClick={}
                  />
                );
              })}
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
