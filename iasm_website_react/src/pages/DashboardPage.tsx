import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LogoutButton from '../components/auth/LogoutButton';
import KpiCard from '../components/dashboard/KpiCard';
import ActivityItem from '../components/dashboard/ActivityItem';
import ChartPlaceholder from '../components/dashboard/ChartPlaceholder';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, BarChart2, Activity, CheckCircle, Clock } from 'lucide-react'; // Example icons

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data for demonstration
  const mockKpis = [
    { title: "Active PGR Assessments", value: "12", description: "+2 from last month", icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
    { title: "Assessments In Progress", value: "5", icon: <Clock className="h-4 w-4 text-muted-foreground" /> },
    { title: "Completed Assessments", value: "48", description: "85% Completion Rate", icon: <CheckCircle className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Client Companies", value: "25", icon: <Users className="h-4 w-4 text-muted-foreground" /> },
  ];

  const mockActivities = [
    { activity: "New PGR assessment created for 'Alpha Corp'", timestamp: "2 hours ago", user: user?.email || 'System' },
    { activity: "Risk 'Chemical Exposure' updated in 'Beta LLC' assessment", timestamp: "5 hours ago", user: "consultant@iasem.com" },
    { activity: "Action item 'Install new ventilation' marked as complete for 'Gamma Inc.'", timestamp: "1 day ago", user: "manager@gamma.com" },
    { activity: "User 'john.doe@client.com' logged in.", timestamp: "2 days ago"},
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PGR Monitoring Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email}! Here's an overview of your PGR activities.
          </p>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>

      {/* KPIs Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 tracking-tight">Key Performance Indicators</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mockKpis.map(kpi => (
            <KpiCard key={kpi.title} title={kpi.title} value={kpi.value} description={kpi.description} icon={kpi.icon} />
          ))}
        </div>
      </section>

      {/* Main Content Area (Charts and Recent Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section - Takes up 2/3 on large screens */}
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold mb-4 tracking-tight">Visual Insights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ChartPlaceholder title="Assessments by Status" description="Distribution of PGR assessments based on their current status." />
            <ChartPlaceholder title="Risks by Category" description="Breakdown of identified risks by their categories (e.g., physical, chemical)." />
          </div>
           {/* You can add more chart placeholders or other elements here */}
        </section>

        {/* Recent Activity Section - Takes up 1/3 on large screens */}
        <section className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Activity className="mr-2 h-5 w-5" /> Recent Activity
              </CardTitle>
              <CardDescription>Latest updates and actions within the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockActivities.map((act, index) => (
                  <ActivityItem key={index} activity={act.activity} timestamp={act.timestamp} user={act.user} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-8">
        This is a placeholder dashboard. Actual data and full functionality will be implemented in subsequent tasks.
      </footer>
    </div>
  );
};

export default DashboardPage;
