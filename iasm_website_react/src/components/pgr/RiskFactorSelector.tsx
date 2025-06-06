import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock data for risk factors - in a real app, this would come from an API and be more extensive
const mockRiskFactors = [
  { id: 'rf001', description: 'Ruído Contínuo ou Intermitente', category: 'physical', relatedNRs: ['NR15', 'NR9'] },
  { id: 'rf002', description: 'Poeiras Minerais (Sílica)', category: 'chemical', relatedNRs: ['NR15'] },
  { id: 'rf003', description: 'Vírus e Bactérias (Contato com Fluidos)', category: 'biological', relatedNRs: ['NR32'] },
  { id: 'rf004', description: 'Levantamento e Transporte Manual de Peso', category: 'ergonomic', relatedNRs: ['NR17'] },
  { id: 'rf005', description: 'Máquinas e Equipamentos sem Proteção', category: 'accident', relatedNRs: ['NR12'] },
  { id: 'rf006', description: 'Vibração de Corpo Inteiro', category: 'physical', relatedNRs: ['NR9', 'NR15'] },
  { id: 'rf007', description: 'Produtos Químicos (Névoas e Neblinas)', category: 'chemical', relatedNRs: ['NR15', 'NR26'] },
];

interface RiskFactor {
  id: string;
  description: string;
  category: string;
  relatedNRs: string[];
}

const RiskFactorSelector: React.FC = () => {
  const [selectedRiskFactors, setSelectedRiskFactors] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  // const [customRisk, setCustomRisk] = useState(''); // For adding ad-hoc risks

  const handleSelectRiskFactor = (riskFactorId: string) => {
    setSelectedRiskFactors(prev => {
      const newSet = new Set(prev);
      if (newSet.has(riskFactorId)) {
        newSet.delete(riskFactorId);
      } else {
        newSet.add(riskFactorId);
      }
      return newSet;
    });
  };

  const filteredRiskFactors = mockRiskFactors.filter(rf =>
    rf.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rf.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rf.relatedNRs.some(nr => nr.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="risk-search">Search Risk Factors</Label>
        <Input
          id="risk-search"
          placeholder="Type to search by description, category, or NR..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
      </div>

      <div className="max-h-96 overflow-y-auto pr-2 space-y-3">
        {filteredRiskFactors.length > 0 ? (
          filteredRiskFactors.map((rf) => (
            <Card key={rf.id} className={`transition-all ${selectedRiskFactors.has(rf.id) ? 'border-primary' : ''}`}>
              <CardContent className="p-4 flex items-center space-x-4">
                <Checkbox
                  id={`rf-${rf.id}`}
                  checked={selectedRiskFactors.has(rf.id)}
                  onCheckedChange={() => handleSelectRiskFactor(rf.id)}
                />
                <div className="flex-grow">
                  <Label htmlFor={`rf-${rf.id}`} className="font-medium cursor-pointer">
                    {rf.description}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Category: <Badge variant="outline" className="text-xs">{rf.category}</Badge> |
                    NRs: {rf.relatedNRs.map(nr => <Badge key={nr} variant="secondary" className="text-xs mr-1">{nr}</Badge>)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">No risk factors match your search.</p>
        )}
      </div>

      {/* Optional: Add custom risk factor
      <div className="mt-4">
        <Label htmlFor="custom-risk">Add Custom Risk Factor (if not listed)</Label>
        <div className="flex space-x-2">
          <Input
            id="custom-risk"
            placeholder="Describe custom risk..."
            value={customRisk}
            onChange={(e) => setCustomRisk(e.target.value)}
          />
          <Button variant="outline" onClick={() => { / logic to add custom risk / setCustomRisk(''); }}>Add</Button>
        </div>
      </div>
      */}

      <div className="mt-6">
        <h4 className="font-semibold">Selected Risks: {selectedRiskFactors.size}</h4>
        {/* Display selected risks or a summary if needed */}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This component will be enhanced with more robust search, filtering, and categorization,
        and will integrate with the actual risk factor database.
      </p>
    </div>
  );
};

export default RiskFactorSelector;
