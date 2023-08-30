import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next'


function App({ Component, pageProps }) {
  // If page layout is available, use it. Else return the page
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App)
