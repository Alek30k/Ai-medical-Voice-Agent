"use client";

import Image from "next/image";
import { useState } from "react";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="">
      {historyList.length == 0 ? (
        <div className="">
          <Image
            src={"/medical-assistance.png"}
            alt="Vacio"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className="">List</div>
      )}
    </div>
  );
};

export default HistoryList;
