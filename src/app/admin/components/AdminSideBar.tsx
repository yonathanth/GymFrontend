import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.svg";

interface AdminSidebarProps {
  setActiveNav: (nav: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ setActiveNav }) => {
  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Gym Members", path: "/admin/gym-member" },
    { name: "Attendance", path: "/admin/attendance-list" },

    { name: "Employees", path: "/admin/employee" },
    { name: "Inventory", path: "/admin/inventory" },
    { name: "Stock", path: "/admin/stock" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Financial Report", path: "/admin/financial-report" },
    { name: "Services", path: "/admin/services" },
    { name: "Moderators", path: "/admin/moderators" },
  ];

  return (
    <aside className="bg-black w-40 text-white flex flex-col border-r-[0.5px] border-gray-800 h-screen z-50  overflow-y-auto ">
      <div className="p-[0.85rem] border-b-[0.5px] border-gray-800">
        <Image src={logo} alt="logo" className="w-28 mx-auto" />
      </div>
      <nav className="flex-grow mx-auto flex flex-col gap-4 pt-10 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="w-full text-left px-4 font-extralight py-3 hover:text-customBlue focus:text-customBlue"
            onClick={() => setActiveNav(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
