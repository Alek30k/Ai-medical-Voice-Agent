type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId: string;
  subscriptionRequired: boolean;
};

type props = {
  doctorAgent: doctorAgent;
};

const DoctorAgentCard = ({ doctorAgent }: props) => {
  return <div className="">DoctorAgentCard</div>;
};

export default DoctorAgentCard;
