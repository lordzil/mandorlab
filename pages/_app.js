import "@/styles/globals.css";
// import "@/styles/CarouselStyleSheet.css";
import React, { useState } from "react";
import { appWithTranslation } from "next-i18next";
import { AuthProvider } from "@/components/AuthContext";
import ComponentPagLayoutDefault from "@/components/layout/PageLayout";
// import { HistoryProvider } from "../contexts/History";

function App({ Component, pageProps }) {
  const [toggleQuotation, setToggleQuotation] = useState(false);

  const toggleQuotationButton = (toggle) => {
    setToggleQuotation(toggle);
  };
  // If page layout is available, use it. Else return the page
  // const getLayout =
  //   Component.getLayout ||
  //   ((page) => <ComponentPagLayoutDefault>{page}</ComponentPagLayoutDefault>);
  const getLayout = Component.getLayout || ((page) => page);
  const customProps = { toggle: true };

  return (
    <AuthProvider>
      {/* <HistoryProvider> */}
      {getLayout(
        <Component
          toggleQuotation={toggleQuotationButton}
          toggleQuotationStatus={toggleQuotation}
          {...pageProps}
        />
      )}
      {/* </HistoryProvider> */}
    </AuthProvider>
  );
}

export default appWithTranslation(App);
