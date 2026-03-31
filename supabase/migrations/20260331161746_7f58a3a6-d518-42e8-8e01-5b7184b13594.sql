
-- Create table for editable site copy (H1/H2 headings)
CREATE TABLE public.site_copy (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_key TEXT NOT NULL,
  copy_key TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_key, copy_key, language)
);

-- Enable RLS
ALTER TABLE public.site_copy ENABLE ROW LEVEL SECURITY;

-- Anyone can read site copy (public content)
CREATE POLICY "Site copy is publicly readable"
  ON public.site_copy FOR SELECT
  USING (true);

-- Only authenticated users can modify (admin use)
CREATE POLICY "Authenticated users can insert site copy"
  ON public.site_copy FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site copy"
  ON public.site_copy FOR UPDATE TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete site copy"
  ON public.site_copy FOR DELETE TO authenticated
  USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_copy_updated_at
  BEFORE UPDATE ON public.site_copy
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
