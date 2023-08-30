import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const DashboardLayout = ({ children }) => {
  return (
    
      <div className="flex-[8] mx-10 p-3 rounded min-h-[300px]">
        {children}
      </div>
    
  );
};

export default DashboardLayout;
