import { Button } from "@/components/ui/button";
import HistoryList from "./_components/HistoryList";
import DoctorsAgentList from "@/components/DoctorsAgentList";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-2xl">Mi panel de control</h2>
        <Button>+ Consultar con el doctor</Button>
      </div>
      <HistoryList />
      <DoctorsAgentList />
    </div>
  );
};

export default Dashboard;
