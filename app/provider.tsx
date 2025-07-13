"use client";

import { UserDetailContext } from "@/context/UserDetailContex";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

export type UserDetail = {
  id: string | null;
  email: string | null;
  name: string | null;
  credits: number;
};

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();

  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    const result = await axios.post("/api/users");

    setUserDetail(result.data);
  };

  return (
    <div className="">
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider;
