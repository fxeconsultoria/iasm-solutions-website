-- SQL DDL Statements for IASEM Project

-- User Profiles
-- Stores additional user details, linked to Supabase Auth users.
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE, -- Links to auth.users table
  updated_at TIMESTAMPTZ, -- Timestamp of the last update
  username TEXT UNIQUE, -- User's chosen username
  full_name TEXT, -- User's full name
  avatar_url TEXT, -- URL for user's avatar image
  website TEXT, -- User's personal or company website
  role TEXT NOT NULL CHECK (role IN ('consultant', 'manager', 'employee')) -- Role of the user within the system
);
COMMENT ON TABLE public.user_profiles IS 'Stores additional user details, linked to Supabase Auth users.';
COMMENT ON COLUMN public.user_profiles.id IS 'Links to auth.users table in Supabase.';
COMMENT ON COLUMN public.user_profiles.role IS 'Role of the user, e.g., consultant, manager, employee.';

-- Companies
-- Stores information about client companies.
CREATE TABLE public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Primary key for the company
  created_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of creation
  name TEXT NOT NULL, -- Name of the company
  cnpj TEXT UNIQUE, -- Brazilian company identifier (CNPJ), unique
  contact_email TEXT, -- Contact email for the company
  contact_phone TEXT, -- Contact phone for the company
  address TEXT -- Physical address of the company
);
COMMENT ON TABLE public.companies IS 'Stores information about client companies.';
COMMENT ON COLUMN public.companies.cnpj IS 'Brazilian company identifier (CNPJ), should be unique.';

-- PGR Assessments
-- Stores information about Program of Risk Management (PGR) assessments.
CREATE TABLE public.pgr_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Primary key for the assessment
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, -- Foreign key to the company being assessed
  consultant_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE RESTRICT, -- Foreign key to the consultant performing the assessment
  assessment_date DATE NOT NULL, -- Date of the assessment
  status TEXT NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed', 'archived')), -- Current status of the assessment
  created_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of creation
  updated_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of the last update
  report_url TEXT -- Optional link to the generated PGR document/report
);
COMMENT ON TABLE public.pgr_assessments IS 'Stores information about Program of Risk Management (PGR) assessments.';
COMMENT ON COLUMN public.pgr_assessments.company_id IS 'Link to the company being assessed.';
COMMENT ON COLUMN public.pgr_assessments.consultant_id IS 'Link to the consultant (user_profiles) who performed the assessment.';
COMMENT ON COLUMN public.pgr_assessments.status IS 'Status of the PGR assessment (e.g., pending, in_progress, completed).';

-- Risk Factors
-- Defines generic risk factors that can be identified in assessments.
CREATE TABLE public.risk_factors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Primary key for the risk factor
  created_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of creation
  description TEXT NOT NULL UNIQUE, -- Detailed description of the risk factor, should be unique
  category TEXT NOT NULL CHECK (category IN ('physical', 'chemical', 'biological', 'ergonomic', 'accident')), -- Category of the risk
  severity TEXT NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')), -- Intrinsic severity of the risk
  probability TEXT NOT NULL CHECK (probability IN ('low', 'medium', 'high')), -- Intrinsic probability of the risk occurring
  nr_norms TEXT[], -- Array of related Brazilian NR norms (e.g., NR1, NR15)
  source_details TEXT -- Additional details about the common sources of this risk
);
COMMENT ON TABLE public.risk_factors IS 'Defines generic risk factors that can be identified in assessments.';
COMMENT ON COLUMN public.risk_factors.description IS 'Description of the risk factor (e.g., Excessive Noise, Silica Dust Exposure).';
COMMENT ON COLUMN public.risk_factors.category IS 'Category of the risk (e.g., physical, chemical, biological, ergonomic, accident).';
COMMENT ON COLUMN public.risk_factors.severity IS 'Intrinsic severity of the risk factor.';
COMMENT ON COLUMN public.risk_factors.probability IS 'Intrinsic probability of the risk factor.';
COMMENT ON COLUMN public.risk_factors.nr_norms IS 'Related Brazilian Regulatory Norms (NRs).';

-- Assessment Risks
-- Links a specific PGR Assessment to identified Risk Factors, including context-specific details.
CREATE TABLE public.assessment_risks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Primary key for this specific assessed risk
  pgr_assessment_id UUID NOT NULL REFERENCES public.pgr_assessments(id) ON DELETE CASCADE, -- Foreign key to the PGR assessment
  risk_factor_id UUID NOT NULL REFERENCES public.risk_factors(id) ON DELETE RESTRICT, -- Foreign key to the generic risk factor
  created_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of creation
  observations TEXT, -- Specific observations for this risk in this assessment's context
  control_measures_existing TEXT, -- Description of existing control measures
  control_measures_recommended TEXT, -- Description of recommended control measures
  risk_level_calculated TEXT CHECK (risk_level_calculated IN ('low', 'medium', 'high', 'critical')), -- Calculated risk level for this specific instance
  UNIQUE (pgr_assessment_id, risk_factor_id) -- Ensures a risk factor is not added multiple times to the same assessment
);
COMMENT ON TABLE public.assessment_risks IS 'Links PGR assessments to risk factors, with specific details for that assessment.';
COMMENT ON COLUMN public.assessment_risks.pgr_assessment_id IS 'Link to the specific PGR assessment.';
COMMENT ON COLUMN public.assessment_risks.risk_factor_id IS 'Link to the identified generic risk factor.';
COMMENT ON COLUMN public.assessment_risks.observations IS 'Specific observations about the risk in the context of this assessment.';
COMMENT ON COLUMN public.assessment_risks.risk_level_calculated IS 'Calculated risk level after considering specific context and controls.';

-- Action Items
-- Describes actions to be taken, often derived from PGR assessments or specific risks.
CREATE TABLE public.action_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Primary key for the action item
  -- Link to either a specific risk in an assessment or a general assessment
  assessment_risk_id UUID REFERENCES public.assessment_risks(id) ON DELETE SET NULL, -- Optional: if action is for a specific assessed risk
  pgr_assessment_id UUID NOT NULL REFERENCES public.pgr_assessments(id) ON DELETE CASCADE, -- Required: link to the overall assessment
  created_at TIMESTAMPTZ DEFAULT now(), -- Timestamp of creation
  description TEXT NOT NULL, -- Detailed description of the action required
  responsible_person_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL, -- Optional: User responsible for the action
  due_date DATE, -- Target date for completion
  status TEXT NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')), -- Current status of the action item
  completion_date DATE, -- Actual date of completion
  notes TEXT, -- Additional notes or comments about the action item
  CONSTRAINT chk_action_item_link CHECK (assessment_risk_id IS NOT NULL OR pgr_assessment_id IS NOT NULL) -- Ensures it's linked to at least an assessment
);
COMMENT ON TABLE public.action_items IS 'Tracks action items for PGR assessments or specific risks.';
COMMENT ON COLUMN public.action_items.assessment_risk_id IS 'Link to a specific risk identified in an assessment (optional).';
COMMENT ON COLUMN public.action_items.pgr_assessment_id IS 'Link to the overall PGR assessment.';
COMMENT ON COLUMN public.action_items.responsible_person_id IS 'User (from user_profiles) responsible for completing the action.';
COMMENT ON COLUMN public.action_items.status IS 'Status of the action item.';

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pgr_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.risk_factors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_risks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.action_items ENABLE ROW LEVEL SECURITY;

-- Example Policies (to be refined based on application logic)
-- Policies for user_profiles:
-- Users can see their own profile.
-- Users can update their own profile.
CREATE POLICY "Allow individual user read access" ON public.user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Allow individual user update access" ON public.user_profiles FOR UPDATE USING (auth.uid() = id);

-- Policies for companies:
-- Authenticated users can see all companies (adjust as needed, e.g., based on user role or linkage)
CREATE POLICY "Allow authenticated read access to companies" ON public.companies FOR SELECT TO authenticated USING (true);
-- Allow managers or consultants to create companies (example)
CREATE POLICY "Allow manager/consultant to create companies" ON public.companies FOR INSERT TO authenticated WITH CHECK (
  (SELECT role FROM public.user_profiles WHERE id = auth.uid()) IN ('manager', 'consultant')
);
-- Add more policies for update/delete as per requirements

-- Policies for pgr_assessments:
-- Users can see assessments they are linked to (e.g., consultant or part of the assessed company).
CREATE POLICY "Allow linked users read access to pgr_assessments" ON public.pgr_assessments FOR SELECT TO authenticated USING (
  consultant_id = auth.uid() OR
  EXISTS (
    SELECT 1 FROM public.companies c
    JOIN public.user_profiles up ON up.id = auth.uid() -- Assuming a link between user and company (e.g., via another table or role)
    WHERE c.id = company_id -- This part needs refinement based on how users are linked to companies
  )
);
-- Consultants can create assessments.
CREATE POLICY "Allow consultants to create pgr_assessments" ON public.pgr_assessments FOR INSERT TO authenticated WITH CHECK (
  (SELECT role FROM public.user_profiles WHERE id = auth.uid()) = 'consultant' AND consultant_id = auth.uid()
);

-- Further policies for risk_factors, assessment_risks, action_items will be needed.
-- For example, risk_factors might be publicly viewable or only by authenticated users.
CREATE POLICY "Allow authenticated read access to risk_factors" ON public.risk_factors FOR SELECT TO authenticated USING (true);

-- Assessment_risks should be viewable by those who can see the parent pgr_assessment.
CREATE POLICY "Allow linked users read access to assessment_risks" ON public.assessment_risks FOR SELECT TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.pgr_assessments pa
    WHERE pa.id = pgr_assessment_id AND (
      pa.consultant_id = auth.uid() OR
      EXISTS (
        SELECT 1 FROM public.companies c
        --  JOIN public.user_profiles up ON up.id = auth.uid() -- Link user to company
        WHERE c.id = pa.company_id -- This part needs refinement
      )
    )
  )
);

-- Action_items should be viewable/editable based on roles and linkage to assessments/companies.
CREATE POLICY "Allow linked users read access to action_items" ON public.action_items FOR SELECT TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.pgr_assessments pa
    WHERE pa.id = pgr_assessment_id AND (
      pa.consultant_id = auth.uid() OR
      responsible_person_id = auth.uid() OR
      EXISTS (
        SELECT 1 FROM public.companies c
        --  JOIN public.user_profiles up ON up.id = auth.uid() -- Link user to company
        WHERE c.id = pa.company_id -- This part needs refinement
      )
    )
  )
);

-- Note: The policies above are examples and need to be thoroughly reviewed and tested
-- based on the specific authorization rules of the application.
-- Consider creating specific roles in PostgreSQL and granting permissions to those roles
-- rather than just using `authenticated`.
-- The linkage between users and companies for employees of a company needs to be defined
-- (e.g., via a `company_users` mapping table or by adding `company_id` to `user_profiles` for non-consultants).
-- For simplicity, some policies above grant broad access to 'authenticated' users or require direct linkage.
-- Real-world scenarios would require more granular checks.
-- Example: If an 'employee' role is added to user_profiles, they should only see data related to their company.
-- If a 'manager' from a company logs in, they should see all data for their company.
-- Consultants should see data for assessments they are assigned to.
-- Admin/Superuser roles might have broader access (not defined here).
-- RLS policies for UPDATE and DELETE also need to be defined.
-- For example, only the consultant who created an assessment or a manager should be able to update it.
-- Only specific roles should be able to insert into certain tables.
-- Ensure to test all policies thoroughly.
