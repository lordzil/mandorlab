import RootLayout from '@/components/layout/PageLayout';
import { useTranslation } from 'next-i18next'
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

export const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <main className='flex flex-col max-h-100vh mx-auto max-w-3xl px-4 pt-32 pb-32 scroll-smooth md:scroll-auto'>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20 !leading-[1.4]">
        Get in touch via Email
      </h3>
      <div className="">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="block h-14 mt-10 mx-auto w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
        />
        <button
          type="button"
          className="block mt-6 h-14 mx-auto w-full px-6 py-3 leading-none font-semibold rounded-lg text-white bg-gray-900 focus:outline-none"
        >
          Try It
        </button>
      </div>
    </main>
  );
};

Newsletter.getLayout = (page) => (
  <RootLayout>{page}</RootLayout>
);

export default Newsletter;
