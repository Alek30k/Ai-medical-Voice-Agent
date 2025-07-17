import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const menuOptions = [
  {
    id: 1,
    name: "Inicio",
    path: "/inicio",
  },
  {
    id: 2,
    name: "Historia",
    path: "/historia",
  },
  {
    id: 3,
    name: "Precio",
    path: "/precio",
  },
  {
    id: 4,
    name: "Perfil",
    path: "/perfil",
  },
];

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40">
      <Image src="/logo.svg" alt="Logo" width={180} height={90} />
      <div className="hidden md:flex gap-12 items-center justify-center ">
        {menuOptions.map((option) => (
          <h2 key={option.id} className="hover:font-bold cursor-pointer">
            <Link href={option.path} className="">
              {option.name}
            </Link>
          </h2>
        ))}
      </div>
      <UserButton />
    </div>
  );
};

export default AppHeader;
