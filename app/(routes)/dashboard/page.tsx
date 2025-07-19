import { Button } from "@/components/ui/button";
import HistoryList from "./_components/HistoryList";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <Button>+ Consultar con el doctor</Button>
      </div>
      <HistoryList />
    </div>
  );
};

export default Dashboard;
