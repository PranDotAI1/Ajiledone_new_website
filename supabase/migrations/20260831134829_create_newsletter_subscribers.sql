/*
# Create newsletter subscribers

1. New Tables
- `newsletter_subscribers` stores email addresses submitted through the public newsletter form.
- `id` is the generated primary key.
- `email` is the normalized unique email address.
- `created_at` records when the subscription was created.

2. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may submit an email or read the public subscription status needed by the app.
- Separate policies are defined for SELECT, INSERT, UPDATE, and DELETE.

3. Important Notes
- This is a single-tenant public marketing site with no sign-in flow.
- Duplicate emails are rejected by the unique constraint and handled gracefully in the interface.
*/

CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read newsletter status" ON public.newsletter_subscribers;
CREATE POLICY "Public can read newsletter status"
  ON public.newsletter_subscribers FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (email = lower(trim(email)) AND length(email) <= 320);

DROP POLICY IF EXISTS "Public can update newsletter subscription" ON public.newsletter_subscribers;
CREATE POLICY "Public can update newsletter subscription"
  ON public.newsletter_subscribers FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (email = lower(trim(email)) AND length(email) <= 320);

DROP POLICY IF EXISTS "Public can remove newsletter subscription" ON public.newsletter_subscribers;
CREATE POLICY "Public can remove newsletter subscription"
  ON public.newsletter_subscribers FOR DELETE
  TO anon, authenticated
  USING (true);
