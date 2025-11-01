import { Home, User, Activity, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-white w-60 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:text-teal-300 cursor-pointer"><Home size={20}/> Dashboard</li>
        <li className="flex items-center gap-3 hover:text-teal-300 cursor-pointer"><User size={20}/> Profile</li>
        <li className="flex items-center gap-3 hover:text-teal-300 cursor-pointer"><Activity size={20}/> Reports</li>
        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer"><LogOut size={20}/> Logout</li>
      </ul>
    </div>
  );
}
