import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, CreditCard, MessageSquare, MessageCircle, LogOut } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Credits", path: "/credits", icon: CreditCard },
  { name: "Chat & Schedule", path: "/chat", icon: MessageSquare },
  { name: "Feedback", path: "/feedback", icon: MessageCircle },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 font-family-poppins min-h-screen bg-white border-r-2 border-[#E5E5E5] flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="SkillBridge" className="h-12" />
        </Link>
      </div>
    
      <hr className=" border-b mb-3 border-[#E5E5E5]" />

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-family-poppins text-sm transition-all ${
                    isActive
                      ? "bg-light-teal text-teal font-medium"
                      : "text-[#575757] hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={() => {
            // Handle logout logic here
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-family-poppins text-sm text-[#575757] hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
