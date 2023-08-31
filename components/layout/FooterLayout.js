import Image from "next/image";
//<Image src="/banner.svg" width={4000} height={100} alt="carousel banner" className='object-cover max-h-80 opacity-10'/>


const Footer = () => {
  return (
    <footer>
      <div className=" -mt-2 w-screen items-start">
       <div className="bg-[url('../public/banner.svg')] bg-orange-400 min-h-96">.</div>
        <p className="text-center z-10">&copy; {new Date().getFullYear().toString()} Mandorlab</p>
      </div>
      
    </footer>
  );
};

export default Footer;
