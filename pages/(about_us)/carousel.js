



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

export default Carousel;