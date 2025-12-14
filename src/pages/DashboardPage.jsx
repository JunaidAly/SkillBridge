import { Briefcase, Calendar, Star } from "lucide-react";

function DashboardPage() {
  const stats = [
    {
      title: "Credit Balance",
      value: "1,250",
      icon: Briefcase,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Scheduled Sessions",
      value: "3",
      icon: Calendar,
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
    },
    {
      title: "Average Rating",
      value: "4.9",
      icon: Star,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-family-poppins text-3xl font-bold text-black mb-2">
          Welcome back, Jane!
        </h1>
        <p className="font-family-poppins text-gray">
          Here's an overview of your SkillBridge activity.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-8">
        <h2 className="font-family-poppins text-2xl font-medium text-black mb-4">
          Quick Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <p className="font-family-poppins text-sm text-gray mb-3">
                  {stat.title}
                </p>
                <div className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={stat.iconColor} size={20} />
                </div>
                <p className="font-family-poppins text-3xl font-bold text-black">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
