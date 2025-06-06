import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewAssessmentForm from '@/components/pgr/NewAssessmentForm'; // Will be created
import RiskFactorSelector from '@/components/pgr/RiskFactorSelector'; // Will be created

const NewAssessmentPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New PGR Assessment</CardTitle>
          <CardDescription>
            Start a new Program of Risk Management assessment for a client company.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Section 1: Company Details & Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Assessment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <NewAssessmentForm />
            </CardContent>
          </Card>

          {/* Section 2: Risk Factor Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Identify Risk Factors</CardTitle>
              <CardDescription>
                Select applicable risk factors for this assessment. You can add specific observations later.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RiskFactorSelector />
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2 mt-6">
            <Button variant="outline">Save Draft</Button>
            <Button>Submit Assessment</Button>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            This page will guide the consultant through the steps of creating a new PGR,
            including selecting the company, defining the scope, identifying risks,
            and planning control measures.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewAssessmentPage;
