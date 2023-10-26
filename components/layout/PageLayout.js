import Header from "./HeaderLayout";
import Footer from "./FooterLayout";
import React, { useState, useEffect } from "react";
import QuotationModal from "../quotationModal";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const router = useRouter();
  useEffect(() => {
    // Check if the current pathname includes "homepage/something"
    if (router.pathname.includes("quotation")) {
      setOpen(true);
    }
  }, [router.pathname]);

  return (
    <div className="">
      <div className="sticky top-0 pt-8 bg-white">
        <Header />
      </div>

      <div className="">{children}</div>
      <Footer />

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24
        }}
      >
        <FloatButton
          icon={<WhatsAppOutlined />}
          className="hover:bg-orange-600"
          href="https://api.whatsapp.com/send?phone=87886836001&text=consult%2C%20your%20needs%20with%20us%20"
        />
        <FloatButton onClick={showModal} className="hover:bg-orange-600" />
      </FloatButton.Group>
      <QuotationModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RootLayout;
