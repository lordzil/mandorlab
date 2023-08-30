import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Translator = async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default Translator;