import { ReactNode } from "react";
import DashboardSideBar from "@/features/dashboard/components/sidebar";
import DashboardNavbar from "@/features/dashboard/components/navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex '>
      <DashboardSideBar/>
      <div className='p-5 flex-4'>
        <DashboardNavbar/>
        {children}
      </div>
    </div>
  );
};

export default Layout;