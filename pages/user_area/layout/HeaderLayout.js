import { useState } from 'react';
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  return (
    <header className="flex flex-col">
      <div className="flex flex-row px-12 mt-5">
        <div className="flex self-end">
          
        </div>  
        <div className="flex-auto"></div>
        <LanguageSwitcher />
      </div>
        
      <div className="flex items-stretch px-0 md:px-12 bg-orange h-14">
      </div>
    </header>
  );
};

export default Header;
