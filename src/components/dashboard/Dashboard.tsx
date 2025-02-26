import { Card } from "@/components/ui/card";
import { Bell, Building2, Users } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const propertyData = [
  { name: "California", value: 500 },
  { name: "Texas", value: 300 },
  { name: "New York", value: 250 },
  { name: "Florida", value: 200 },
];

const userActivityData = [
  { month: "Jan", users: 850 },
  { month: "Feb", users: 900 },
  { month: "Mar", users: 1050 },
  { month: "Apr", users: 1200 },
];

const COLORS = ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"];

export default function Dashboard() {
  const metrics = [
    {
      label: "Total Properties Listed",
      value: "1,250",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      label: "Top Zip Codes",
      value: "90210, 10001, 60610",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      label: "Most Active Users",
      value: "John Doe (200), Jane Smith (150)",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Subscription Expiry",
      value: "5 days remaining",
      icon: <Bell className="w-6 h-6 animate-bounce text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0077b6]">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#00b4d8] font-medium">
                  {metric.label}
                </p>
                <p className="text-xl font-bold mt-2 text-gray-800">
                  {metric.value}
                </p>
              </div>
              <div className="text-[#0077b6] bg-blue-50 p-3 rounded-lg">
                {metric.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-none hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-bold text-[#0077b6] mb-6">
            Property Distribution
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={propertyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={true}
                >
                  {propertyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-none hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-bold text-[#0077b6] mb-6">
            Monthly Active Users
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#0077b6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
