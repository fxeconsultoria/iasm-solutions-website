import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // For status indicators

// Mock data for now
const mockAssessments = [
  { id: 'asm001', companyName: 'Tech Solutions Ltd.', date: '2024-07-15', status: 'completed', consultant: 'Dr. Alice Expert' },
  { id: 'asm002', companyName: 'Industrial Co.', date: '2024-08-01', status: 'in_progress', consultant: 'Mr. Bob Consultant' },
  { id: 'asm003', companyName: 'Construction Builders Inc.', date: '2024-08-20', status: 'pending', consultant: 'Dr. Alice Expert' },
];

const AssessmentList: React.FC = () => {
  // In a real app, you'd fetch this data
  const assessments = mockAssessments;

  if (assessments.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500 dark:text-gray-400">No PGR assessments found.</p>
        <Link to="/pgr/new" className="mt-4 inline-block">
          <Button>Create First Assessment</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {assessments.map((assessment) => (
        <Card key={assessment.id} className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{assessment.companyName}</CardTitle>
              <Badge
                variant={
                  assessment.status === 'completed' ? 'default' :
                  assessment.status === 'in_progress' ? 'secondary' : // Consider different colors for badges
                  'outline'
                }
                className={
                  assessment.status === 'completed' ? 'bg-green-500 text-white' :
                  assessment.status === 'in_progress' ? 'bg-blue-500 text-white' :
                  ''
                }
              >
                {assessment.status.replace('_', ' ').toUpperCase()}
              </Badge>
            </div>
            <CardDescription>Assessment ID: {assessment.id}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Date: {assessment.date}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Consultant: {assessment.consultant}
            </p>
            {/* Add more details as needed, e.g., number of risks, action items pending */}
          </CardContent>
          <CardFooter>
            <Link to={`/pgr/${assessment.id}`} className="w-full">
              <Button variant="outline" className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AssessmentList;
