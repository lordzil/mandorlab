import { Carousel } from "antd";
import CarouselContent from "./CarouselContent";

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  lineHeight: "200px",
  textAlign: "center",
  arrow: "true",
  autoplaySpeed: 5000,
  zIndex: 999999999
};

const CarouselLayout = () => {
  return (
    <div className="-z-10 sticky pb-32 staticCarousel">
      <Carousel
        autoplay
        style={{
          width: "100%",
          height: "300px",
          maxHeight: "300px",
          display: " flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <CarouselContent />
        <CarouselContent />
        <CarouselContent />
      </Carousel>
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

export default CarouselLayout;
