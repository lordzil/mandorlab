
import Header from './HeaderLayout';
import Footer from './FooterLayout';
import React, { useState } from 'react';
import QuotationModal from '../quotationModal';
import { FloatButton,  } from 'antd';

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className=''>
      <div className="sticky top-0 pt-8 bg-white">
        <Header/>
      </div>

      <div className="">
        {children}
      </div>
      <Footer />
      <FloatButton
        onClick={showModal}
        shape="square"
        className='bg-red-800 hover:bg-orange-600'
        style={{
          right: 24,
        }}
      />
      <QuotationModal open={open} setOpen={setOpen}/>
    </div>
  );
};

export default RootLayout;
