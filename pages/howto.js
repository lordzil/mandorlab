import Image from 'next/image';
import RootLayout from '@/components/layout/PageLayout';
import { useTranslation } from 'next-i18next'

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


const Home = () => {
  const { t } = useTranslation()
  return (
    <main className='flex flex-col min-h-screen mx-auto max-w-3xl px-4 pt-4 pb-16 scroll-smooth md:scroll-auto'>
      <div className="flex row-3 m-10"></div>
      <section id="howto">
        <div className='md:flex-row space-y-10'>
          <h2 className="text-3xl font-['tilt_warp'] text-orange-950 leading-[1.4] mb-5">
            How to Order
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-sm overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                width={100}
                height={100}
                src="/feature_1.png" 
                className="h-48 w-full object-cover md:h-full md:w-48"
                alt="feature image"/>
              </div>
              <div className="p-2 mx-2">
                <div className="uppercase tracking-wide text-black text-orange-900 font-semibold">feature name</div>
                {/*<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>*/}
                <p className="mt-2 text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-sm overflow-hidden md:max-w-2xl">
            <div className="md:flex sapce-x">
              <div className="p-2 mx-2">
                <div className="uppercase tracking-wide text-black text-orange-900 font-semibold">feature name</div>
                {/*<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>*/}
                <p className="mt-2 text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="md:shrink-0">
                <Image
                width={100}
                height={100}
                src="/feature_1.png" 
                className="h-48 w-full object-cover md:h-full md:w-48"
                alt="feature image"/>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-sm overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                width={100}
                height={100}
                src="/feature_1.png" 
                className="h-48 w-full object-cover md:h-full md:w-48"
                alt="feature image"/>
              </div>
              <div className="p-2 mx-2">
                <div className="uppercase tracking-wide text-black text-orange-900 font-semibold">feature name</div>
                {/*<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>*/}
                <p className="mt-2 text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services2">
        
      </section>
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
