import { ReactNode } from "react";
import DashboardSideBar from "@/features/dashboard/components/sidebar";
import DashboardNavbar from "@/features/dashboard/components/navbar";
import DashboardFooter from "@/features/dashboard/components/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex'>
      <DashboardSideBar/>
      <section className='p-5 flex-4'>
        <DashboardNavbar/>
        {children}
      </section>
      <DashboardFooter/>
    </main>
  );
};

export default Layout;