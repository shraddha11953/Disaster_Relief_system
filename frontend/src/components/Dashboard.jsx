import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Active Disasters", "Volunteers", "Help Requests"].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="text-3xl font-bold mt-3">{Math.floor(Math.random() * 100)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
