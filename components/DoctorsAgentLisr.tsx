import { AIDoctorAgents } from "@/shared/list";
import DoctorAgentCard from "./DoctorAgentCard";

const DoctorsAgentLisr = () => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">Agente médico especialista en IA</h2>

      <div className="">
        {AIDoctorAgents.map((doctor) => (
          <div key={doctor.id}>
            <DoctorAgentCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsAgentLisr;
