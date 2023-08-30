import Link from "next/link";
import Header from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";

const RootLayout = ({ children }) => {
  return (
    <div>
    
    
    <div className="flex flex-row">
      <div className="flex h-screen sticky top-0 pr-5 shadow-md">
        <SidebarLayout />
      </div>
      <div className="flex-grow">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
    </div>
    </div>
  );
};

export default RootLayout;
