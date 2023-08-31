import { Carousel } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#EA580C',
  arrow: 'true',
  autoplaySpeed: 5000
};

const CarouselLayout = () => {
  return (
    <div className='-z-10 sticky pb-32'>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
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
