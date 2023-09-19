import '@/styles/globals.css';
import React from 'react';
import { appWithTranslation } from 'next-i18next'
import { AuthProvider } from '@/components/AuthContext';


function App({ Component, pageProps }) {
  // If page layout is available, use it. Else return the page
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <AuthProvider>
        {getLayout(<Component {...pageProps} />)}
    </AuthProvider>
  );
}

export default appWithTranslation(App);