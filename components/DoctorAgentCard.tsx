import Image from "next/image";

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
  return (
    <div className="">
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={200}
        height={300}
        className="w-full h-[250px] object-cover rounded-xl"
      />
      <h3 className="font-bold text-lg mt-2">{doctorAgent.specialist}</h3>
      <p className="text-sm text-gray-600 mt-1">{doctorAgent.description}</p>
      <div className="mt-2">
        <span className="text-sm text-gray-500">
          {doctorAgent.subscriptionRequired
            ? "Suscripción requerida"
            : "Gratis"}
        </span>
      </div>
    </div>
  );
};

export default DoctorAgentCard;
