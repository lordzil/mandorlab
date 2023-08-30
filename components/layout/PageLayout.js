import Header from './HeaderLayout';
import Footer from './FooterLayout';




const RootLayout = ({ children }) => {
  return (
    <div>
    <div className="sticky top-0 pt-8 bg-white">
      <Header />
    </div>
    
    <div className="">
        {children}
    </div>
    <Footer />
    </div>
  );
};

export default RootLayout;
