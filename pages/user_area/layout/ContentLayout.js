import { Layout } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Content } = Layout;


const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? 'text-black font-semibold' : 'text-gray-500'
      }`}
    >
      {children}
    </Link>
  );
};

const ContentLayout = ({ children }) => {
  return (
    
      <Content className="flex-[8] mx-10 p-3 rounded min-h-[300px]">
        {children}
      </Content>
    
  );
};

export default ContentLayout;
