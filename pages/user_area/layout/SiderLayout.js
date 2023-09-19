import { Menu, Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Favicon from '@/public/favicon.ico'

const { Sider } = Layout;
const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${active ? 'text-black font-semibold' : 'text-gray-500'
        }`}
    >
      {children}
    </Link>
  );
};


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('My Profile', 'account', <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />,),
  getItem('My Projects', 'projects', <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />,),
  getItem('My Review', 'user_review', <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />,),
  getItem('Messages', 'messages', <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />,),
  getItem('Settings', 'settings', <Image width={32} height={32} src="/favicon.ico" className="" alt="logo" />,),
]

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fffff0',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'

};

const menuStyle = {
  textAlign: 'left',
  backgroundColor: '#ffffff',
};

const SiderLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsed={collapsed} style={siderStyle} width={300}>
      <div>
        <div className='w-full p-8'>
          <Link href="/">
            <Image
              width={collapsed ? 50 : 300} // Change the image paths accordingly
              height={0}
              src={collapsed ? '/favicon.ico' : '/logo.png'} // Change the image paths accordingly
              className=""
              alt="logo"
            />
          </Link>
        </div>
        <Menu defaultSelectedKeys={['projects']} mode="inline" style={menuStyle}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={`/user_area/${item.key}`}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <div
            onClick={toggleCollapse}
            style={{
              color:'#000000',
          }}
          >
          {collapsed ? '>' : '<'}
        </div>
      </div>
    </Sider>
  );
};

export default SiderLayout;
