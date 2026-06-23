import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { PRODUCT_INTEREST_OPTIONS } from '../../data/content'
import type { EnquiryForm } from '../../types'

type Status = 'idle' | 'loading' | 'success' | 'error'

const INITIAL: EnquiryForm = {
  name: '', company: '', email: '', phone: '', interest: '', message: '',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState<EnquiryForm>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')

  const set = (field: keyof EnquiryForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-colors'

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            Request a Quote
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Tell us what you need. Our team will review your enquiry and respond within
            1 business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Details</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, label: '+60 XX-XXXX XXXX' },
                  { icon: Mail, label: 'enquiry@sinarmajan.com.my' },
                  { icon: MapPin, label: 'Peninsular Malaysia' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-teal-400" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-teal-500/5 border border-teal-500/15">
              <div className="text-white font-medium text-sm mb-1">Response time</div>
              <div className="text-zinc-400 text-sm">
                We typically respond to all enquiries within 1 business day during working hours
                (Mon–Fri, 9am–6pm MYT).
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <CheckCircle size={48} className="text-teal-400" />
                <h3 className="text-white font-bold text-xl">Enquiry Sent!</h3>
                <p className="text-zinc-400 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-teal-400 text-sm hover:text-teal-300 transition-colors cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                      Full Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Ahmad bin Ali"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                      Company Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      required
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Syarikat ABC Sdn Bhd"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                      Email <span className="text-teal-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+60 12-345 6789"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                    Product Interest
                  </label>
                  <select value={form.interest} onChange={set('interest')} className={inputCls}>
                    <option value="">Select a category...</option>
                    {PRODUCT_INTEREST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 text-xs font-medium mb-1.5 block">
                    Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Describe what you need — material type, quantity, delivery location, timeline..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-100 cursor-pointer text-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
