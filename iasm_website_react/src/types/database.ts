export interface UserProfile {
  id: string; // UUID, references auth.users(id)
  updated_at?: string; // Timestamptz
  username?: string;
  full_name?: string;
  avatar_url?: string;
  website?: string;
  role: 'consultant' | 'manager' | 'employee'; // User role
}

export interface Company {
  id: string; // UUID, primary key
  created_at?: string; // Timestamptz
  name: string;
  cnpj?: string; // Brazilian company identifier
  contact_email?: string;
  contact_phone?: string;
  address?: string;
}

export interface PgrAssessment {
  id: string; // UUID, primary key
  company_id: string; // Foreign key to Company
  consultant_id: string; // Foreign key to UserProfile (consultant)
  assessment_date: string; // Date
  status: 'pending' | 'in_progress' | 'completed' | 'archived';
  created_at?: string; // Timestamptz
  updated_at?: string; // Timestamptz
  report_url?: string; // Link to the generated PGR document
}

export interface RiskFactor {
  id: string; // UUID, primary key
  created_at?: string; // Timestamptz
  description: string;
  category: 'physical' | 'chemical' | 'biological' | 'ergonomic' | 'accident'; // e.g., Ruído, Poeira, Bactérias, Postura Inadequada, Máquinas sem Proteção
  severity: 'low' | 'medium' | 'high' | 'critical';
  probability: 'low' | 'medium' | 'high';
  nr_norms?: string[]; // Related NR norms, e.g., ['NR1', 'NR7', 'NR15']
  source_details?: string; // Details about the source of the risk
}

export interface AssessmentRisk {
  id: string; // UUID, primary key
  pgr_assessment_id: string; // Foreign key to PgrAssessment
  risk_factor_id: string; // Foreign key to RiskFactor
  created_at?: string; // Timestamptz
  observations?: string; // Specific observations for this risk in this assessment
  // Additional fields for this specific assessment of the risk
  control_measures_existing?: string;
  control_measures_recommended?: string;
  risk_level_calculated?: 'low' | 'medium' | 'high' | 'critical'; // Calculated based on severity and probability
}

export interface ActionItem {
  id: string; // UUID, primary key
  assessment_risk_id?: string; // Optional: Foreign key to AssessmentRisk (if action is for a specific risk)
  pgr_assessment_id: string; // Foreign key to PgrAssessment (if action is general for the assessment)
  created_at?: string; // Timestamptz
  description: string;
  responsible_person_id?: string; // Foreign key to UserProfile (employee/manager responsible)
  due_date?: string; // Date
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  completion_date?: string; // Date
  notes?: string;
}

// Enum types for roles, status, etc. could also be defined here if preferred
// export enum UserRole { CONSULTANT = 'consultant', MANAGER = 'manager', EMPLOYEE = 'employee' }
// ... and so on for other enum-like fields.
