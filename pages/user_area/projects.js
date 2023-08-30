import RootLayout from './layout/PageLayout';
import DashboardLayout from '@/pages/user_area/layout/ContentLayout';

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

const Projects = () => {
  return <div>User projects here...</div>;
};

Projects.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Projects;
