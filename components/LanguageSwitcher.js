import Image from 'next/image';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  
  const handleLocaleChange = (locale) => {
    if (locale === router.locale) {
        // If the clicked locale is the same as the current locale,
        // redirect back to the root path
        router.push('/');
      } else {
        router.push(router.asPath, router.asPath, { locale });
      };
  };

  return (
    <div className="flex flex-row md:gap-1 self-end">
      <button className="flex flex-row items-center" onClick={() => handleLocaleChange('id')}>
        <span className="font-bold text-xs md:mx-2 invisible md:visible">ID</span>
        <Image src="/locales/id/flag.svg" alt="Korean Flag" width={32} height={32} />
      </button>
      <button className="flex flex-row items-center" onClick={() => handleLocaleChange('kr')}>
      <span className="font-bold text-xs md:mx-2 invisible md:visible">KR</span>
        <Image src="/locales/kr/flag.svg" alt="Korean Flag" width={32} height={32} />
      </button>
      <button className="flex flex-row items-center" onClick={() => handleLocaleChange('en')}>
        <span className="font-bold text-xs md:mx-2 invisible md:visible">EN</span>
        <Image src="/locales/en/flag.svg" alt="Korean Flag" width={32} height={32} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;