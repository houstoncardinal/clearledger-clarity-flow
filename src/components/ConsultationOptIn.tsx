import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Lock,
} from 'lucide-react';

const ConsultationOptIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenges: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please share your name and email so we can reach you.');
      return;
    }

    setSubmitting(true);

    const payload = new FormData();
    payload.append('form-name', 'consultation');
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('company', formData.company);
    payload.append('challenges', formData.challenges);
    payload.append('goals', 'Homepage consultation request');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload as any).toString(),
      });

      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-17027608656/X7WjCPbVt_obENDgsrc_',
          value: 1.0,
          currency: 'USD',
        });
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', challenges: '' });
    } catch (err) {
      setError('Something went wrong. Please try again or call (903) 815-9488.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="consultation-opt-in"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-3xl border border-primary/10 bg-white/70 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(168,85,247,0.35)] overflow-hidden">
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left — narrative */}
              <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-primary/[0.04] to-purple-500/[0.06] border-b lg:border-b-0 lg:border-r border-primary/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-1.5 border border-primary/15 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Complimentary Consultation
                  </span>
                </div>

                <h2 className="mt-6 font-heading text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                  Speak with a{' '}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Certified ProAdvisor
                  </span>
                </h2>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Share a few details and we'll reach out within two business hours
                  to schedule a private, no-obligation consultation tailored to
                  your business.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    { icon: Clock, text: 'Reply within 2 business hours' },
                    { icon: Shield, text: 'Confidential. No sales pressure.' },
                    { icon: CheckCircle2, text: 'Custom proposal after the call' },
                  ].map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-purple-500/15 border border-primary/15">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </span>
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-primary/10 flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="w-3.5 h-3.5" />
                  Your information is encrypted and never shared.
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple-600 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                      Request received.
                    </h3>
                    <p className="mt-3 text-muted-foreground max-w-sm">
                      Thank you. A member of our team will reach out within two
                      business hours to schedule your consultation.
                    </p>
                    <Link to="/consultation" className="mt-6">
                      <Button variant="outline">
                        Or book a time now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form
                    name="consultation"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="consultation" />
                    <p hidden>
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="opt-name"
                          className="text-xs font-semibold uppercase tracking-wide text-foreground/70"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="opt-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={100}
                          required
                          placeholder="Jane Doe"
                          className="h-12 rounded-xl border-primary/15 bg-white/80 backdrop-blur focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="opt-email"
                          className="text-xs font-semibold uppercase tracking-wide text-foreground/70"
                        >
                          Email *
                        </label>
                        <Input
                          id="opt-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={255}
                          required
                          placeholder="jane@company.com"
                          className="h-12 rounded-xl border-primary/15 bg-white/80 backdrop-blur focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="opt-phone"
                          className="text-xs font-semibold uppercase tracking-wide text-foreground/70"
                        >
                          Phone
                        </label>
                        <Input
                          id="opt-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={30}
                          placeholder="(903) 555-0100"
                          className="h-12 rounded-xl border-primary/15 bg-white/80 backdrop-blur focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="opt-company"
                          className="text-xs font-semibold uppercase tracking-wide text-foreground/70"
                        >
                          Company
                        </label>
                        <Input
                          id="opt-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          maxLength={150}
                          placeholder="Company name"
                          className="h-12 rounded-xl border-primary/15 bg-white/80 backdrop-blur focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="opt-challenges"
                        className="text-xs font-semibold uppercase tracking-wide text-foreground/70"
                      >
                        How can we help?
                      </label>
                      <Textarea
                        id="opt-challenges"
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleChange}
                        maxLength={1000}
                        rows={3}
                        placeholder="Briefly describe your bookkeeping needs or biggest challenge."
                        className="rounded-xl border-primary/15 bg-white/80 backdrop-blur focus-visible:ring-primary/30 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive font-medium">
                        {error}
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        disabled={submitting}
                        className="w-full sm:w-auto"
                      >
                        {submitting ? 'Sending...' : 'Request My Consultation'}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        Free • No commitment • Reply in 2 hours
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationOptIn;
