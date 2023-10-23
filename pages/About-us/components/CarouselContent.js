import React from "react";
import { Card } from "antd";

const contentStyle = {
  maxHeight: "200px !important",
  maxWidth: "200px !important"
};

const CarouselContent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100% !important",
        height: "100% !important"
      }}
    >
      <Card
        title="Card"
        size="medium"
        // style={{ maxHeight: "200px !important", maxWidth: "200px !important" }}
      >
        {/* <p>Card content</p> */}

        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            4.95
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            73 reviews
          </a>
        </div>
        <div>
          <p>
            “Testimonial text from customer, lorem ipsum dolor sit amet
            consectetur adipiscing elit”
          </p>
        </div>
      </Card>
    </div>
  );
};

/*
const Carousel = () => {
  return (
    <div className="grid grid-flow-col bg-[url('../public/banner.svg')] bg-orange-100 w-screen items-start h-[30vh] px-10 py-4 gap-8 overflow-scroll">
      <div className='card w-96 place-self-stretch '>
        Card image 1
      </div>
      <div className='card w-96 place-self-stretch '>
        Card image 2
      </div>
      <div className='card w-96 place-self-stretch '>
        Card image 3
      </div>
      <div className='card w-96 place-self-stretch '>
        Card image 4
      </div>
      <div className='card w-96 place-self-stretch '>
        Card image 5
      </div>
    </div>
    );
};
*/

export default CarouselContent;
