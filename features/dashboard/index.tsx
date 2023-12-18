import Card from "@/features/dashboard/components/card";
import Transaction from "@/features/dashboard/components/transaction";
import Chart from "@/features/dashboard/components/chart";
import RightBar from "@/features/dashboard/components/rightbar";

const Dashboard = () => {
  return (
    <div className='mt-5 flex gap-5'>
      <div className='flex-3 flex flex-col gap-5'>
        <ul className='flex justify-between gap-5'>
          <Card/>
          <Card/>
          <Card/>
        </ul>
        <Transaction/>
        <Chart/>
      </div>
      <RightBar/>
    </div>
  );
};

export default Dashboard;