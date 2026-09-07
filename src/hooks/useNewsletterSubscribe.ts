import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export type SubscribeStatus = 'idle' | 'loading' | 'success' | 'already' | 'error';

export function useNewsletterSubscribe() {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'already') {
      const t = setTimeout(() => setStatus('idle'), 6000);
      return () => clearTimeout(t);
    }
  }, [status]);

  async function subscribe(email: string) {
    setStatus('loading');
    setSubmittedEmail(email);

    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      setStatus('error');
      return;
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: normalized });

    if (error) {
      if (error.code === '23505') {
        setStatus('already');
        return;
      }
      setStatus('error');
      return;
    }
    setStatus('success');
  }

  return { status, submittedEmail, subscribe };
}
