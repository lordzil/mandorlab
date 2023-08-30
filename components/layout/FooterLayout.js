import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-orange-400 -mt-2 w-screen items-start ">
        <Image src="/banner.svg" width={4000} height={100} alt="carousel banner" className='object-cover max-h-80'/>
      </div>
      <p className="text-center">&copy; {new Date().getFullYear().toString()} Mandorlab</p>
    </footer>
  );
};

export default Footer;
