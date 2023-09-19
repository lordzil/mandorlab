import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter, scrollTo } from 'next/router'; // Import useRouter
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher';
import { Button, Modal, notification } from 'antd'
import LoginModal from '../loginModal';
import { useAuth } from '../AuthContext';

const menuItems = [
  { label: `NAV_LABEL_ABOUT_US`, url: `/` },
  { label: `NAV_LABEL_HOW_TO`, url: `/howto` },
  { label: `NAV_LABEL_SERVICES`, url: `/services` },
  { label: `NAV_LABEL_EVENT`, url: `/event` },
  { label: `NAV_LABEL_REVIEW`, url: `/review` },
  //{ label: `NAV_LABEL_SUPPORT`, url: `/newsletter` },
  //{ label: `NAV_LABEL_USER_AREA`, url: `/user_area/projects` },
];

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;
  //console.log(pathname)
  return (
    <Link
      href={href}
      scroll={true}
      className={`text-xs font-lato md:text-sm hover:bg-orange-200 hover:text-red-900 block py-2 md:py-3 px-2 md:px-4 ${
        active
          ? 'text-orange-400 font-semibold'
          : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const {user, logout} = useAuth();
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'Click the icon below to open the quotation request form!',
      placement,
      style: {
        bottom: 100, // Adjust the offset value as needed
      },
    })
  };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const { t } = useTranslation();

  const handleLogout = () => {
    console.log(user)
    logout()
    router.push("/")
  };

  return (
    <header className="flex flex-col">
      {contextHolder}
      <div className="flex flex-row px-12 mb-5">
        <div className="flex self-end">
          <Link href="/">
            <Image
              width={300}
              height={0}
              src="/logo.png"
              className="w-200 md:w-120"
              alt="logo"
            />
          </Link>
        </div>  
        <div className="flex-auto"></div>
        <LanguageSwitcher />
      </div>
        
      <div className="flex items-stretch px-0 md:pl-12 bg-red-900">
        <nav className="flex flex-row w-full justify-between">
          <ul className="flex flex-wrap md:flex-grow text-white ">
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <ActiveMenuLink href={url}>{t(label)}</ActiveMenuLink>
              </li>
            ))}
            <li>
              <p className='text-xs font-lato md:text-sm hover:bg-orange-200 hover:text-red-900 block py-2 md:py-3 px-2 md:px-4'
                onClick={() => openNotification('bottomRight')}>{t("NAV_LABEL_NEW_QUOTATION")}</p>
            </li>
          </ul>
          <ul className="flex">
            {user.isAuth
              ? 
              <li className='flex items-center px-2'>
              <Link href='/user_area/projects'>
              <p className='text-xs font-lato md:text-sm bg-orange-400 hover:bg-orange-200 text-red-900 py-1 px-3 md:px-5 rounded-md'> {t("NAV_LABEL_USER_AREA")}</p>
              </Link>
              </li> 
            : ""
            }
            <li className='flex items-center px-2'>
              <p className='text-xs font-lato md:text-sm bg-orange-400 hover:bg-orange-200 text-red-900 py-1 px-3 md:px-5 rounded-md'
                onClick={() => user.isAuth ? handleLogout() : showModal()}
              >
                {user.isAuth ? t("Logout") : t("Login")}
              </p>
            </li>

          </ul>
        </nav>
        <LoginModal open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
