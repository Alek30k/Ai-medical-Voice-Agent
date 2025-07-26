import { Button } from "@/components/ui/button";
import HistoryList from "./_components/HistoryList";
import DoctorsAgentLisr from "@/components/DoctorsAgentLisr";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-2xl">Mi panel de control</h2>
        <Button>+ Consultar con el doctor</Button>
      </div>
      <HistoryList />
      <DoctorsAgentLisr />
    </div>
  );
};

export default Dashboard;
