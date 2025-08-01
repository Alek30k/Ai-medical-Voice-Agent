"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="mt-10">
      {historyList.length == 0 ? (
        <div className="flex flex-col items-center justify-center p-7 border border-dashed rounded-2xl ">
          <Image
            src={"/medical-assistance.png"}
            alt="Vacio"
            width={150}
            height={150}
          />
          <h2 className="font-bold text-xl mt-2">No hay consultas recientes</h2>
          <p>Parece que aún no has consultado con ningún médico.</p>
          <Button className="mt-3">+ Iniciar una Consulta </Button>
        </div>
      ) : (
        <div className="">List</div>
      )}
    </div>
  );
};

export default HistoryList;
