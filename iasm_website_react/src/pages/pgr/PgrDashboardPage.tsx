import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AssessmentList from '@/components/pgr/AssessmentList'; // Will be created shortly

const PgrDashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <CardTitle className="text-2xl">PGR Management Dashboard</CardTitle>
              <CardDescription>
                Oversee and manage all Program of Risk Management assessments.
              </CardDescription>
            </div>
            <Link to="/pgr/new" className="mt-4 sm:mt-0">
              <Button>New PGR Assessment</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Existing Assessments</h2>
          {/* AssessmentList will be integrated here */}
          <AssessmentList />
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            This dashboard will allow consultants and managers to track the status of PGRs,
            initiate new assessments, and view detailed reports.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PgrDashboardPage;
