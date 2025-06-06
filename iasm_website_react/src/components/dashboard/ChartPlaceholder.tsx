import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartIcon } from 'lucide-react'; // Example icon

interface ChartPlaceholderProps {
  title: string;
  description?: string;
}

const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <BarChartIcon className="h-5 w-5 text-muted-foreground" />
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex items-center justify-center h-60 bg-slate-50 dark:bg-slate-800 rounded-md">
        <div className="text-center text-muted-foreground">
          <p className="text-lg font-semibold">Chart will be displayed here</p>
          <p className="text-sm">Data visualization coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartPlaceholder;
