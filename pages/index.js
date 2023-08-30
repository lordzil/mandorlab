import RootLayout from '@/components/layout/PageLayout';
import { useTranslation } from 'next-i18next'
import Carousel from '@/pages/(about_us)/carousel';
import Page from '@/pages/(about_us)/page';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps(context) {
  try {
    // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
  } catch (error) {
    return {}
  }
  
}

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Carousel />
      <Page />
    </div>
    
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
};

export default Home;
