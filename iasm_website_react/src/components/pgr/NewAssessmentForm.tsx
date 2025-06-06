import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // For company selection
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // For date picker
// import { Calendar } from "@/components/ui/calendar"; // For date picker
// import { CalendarIcon } from "lucide-react";
// import { format } from "date-fns";

// Mock data for companies - in a real app, this would come from an API
// const mockCompanies = [
//   { id: 'comp001', name: 'Tech Solutions Ltd.' },
//   { id: 'comp002', name: 'Industrial Co.' },
//   { id: 'comp003', name: 'Construction Builders Inc.' },
// ];

const NewAssessmentForm: React.FC = () => {
  const [assessmentName, setAssessmentName] = useState('');
  const [assessmentDate, setAssessmentDate] = useState<Date | undefined>(new Date());
  const [companyId, setCompanyId] = useState<string | undefined>(undefined);
  const [scope, setScope] = useState('');
  // const [consultantId, setConsultantId] = useState<string | undefined>(undefined); // Assuming logged in user is consultant

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to create new assessment (e.g., API call)
    console.log({
      assessmentName,
      assessmentDate,
      companyId,
      scope,
      // consultantId,
    });
    // Reset form or navigate
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Selection - Placeholder, will need a proper searchable select or similar */}
        <div>
          <Label htmlFor="company">Client Company</Label>
          {/* <Select onValueChange={setCompanyId} value={companyId}>
            <SelectTrigger id="company">
              <SelectValue placeholder="Select a company" />
            </SelectTrigger>
            <SelectContent>
              {mockCompanies.map(company => (
                <SelectItem key={company.id} value={company.id}>{company.name}</SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <Input id="company-placeholder" placeholder="Search or select company (placeholder)" />
          <p className="text-xs text-gray-500 mt-1">Full company selection component will be implemented later.</p>
        </div>

        <div>
          <Label htmlFor="assessmentName">Assessment Name / Reference</Label>
          <Input
            id="assessmentName"
            type="text"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="e.g., PGR Annual Review 2024"
            required
          />
        </div>

        <div>
          <Label htmlFor="assessmentDate">Assessment Date</Label>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${!assessmentDate && "text-muted-foreground"}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {assessmentDate ? format(assessmentDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={assessmentDate}
                onSelect={setAssessmentDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}
          <Input
            type="date"
            id="assessmentDate-placeholder"
            value={assessmentDate ? assessmentDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setAssessmentDate(e.target.value ? new Date(e.target.value) : undefined)}
          />
           <p className="text-xs text-gray-500 mt-1">Full date picker will be implemented later.</p>
        </div>

        {/* Consultant - could be auto-filled based on logged-in user */}
        <div>
          <Label htmlFor="consultant">Consultant</Label>
          <Input id="consultant" type="text" placeholder="[Auto-filled: Logged-in User]" disabled />
        </div>
      </div>

      <div>
        <Label htmlFor="scope">Scope / Objectives</Label>
        <Textarea
          id="scope"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder="Describe the scope of this PGR assessment, including specific areas, processes, or job functions to be evaluated."
          rows={4}
        />
      </div>

      {/* <div className="flex justify-end">
        <Button type="submit">Save Basic Details</Button>
      </div> */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This form will expand to include more fields and better input controls (like searchable company list and date pickers).
      </p>
    </form>
  );
};

export default NewAssessmentForm;
