import RootLayout from './layout/PageLayout';
import DashboardLayout from '@/pages/user_area/layout/ContentLayout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

const Reviews = () => {
  return <div>User reviews here...</div>;
};

Reviews.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Reviews;
