import Link from 'next/link';
import Image from 'next/image';
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

const SidebarLayout = ({ children }) => {
  return (    
      <div className="p-10">
        <div className='w-full'>
        <Link href="/">
            <Image
              width={300}
              height={0}
              src="/logo.png"
              className=""
              alt="logo"
            />
          </Link>
        </div>
        
        <nav>
          <ul className="grid gap-5 mt-20">
            <li>
              <ActiveMenuLink href="/user_area/account">
                My Profile
              </ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/user_area/projects">
                My Projects
              </ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/user_area/user_review">
                Review
              </ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/user_area/messages">
                Messages
              </ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/user_area/settings">
                Settings
              </ActiveMenuLink>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default SidebarLayout;
