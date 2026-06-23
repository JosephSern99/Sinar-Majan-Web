import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PRODUCT_INTEREST_OPTIONS } from '../data/content'
import type { EnquiryForm } from '../types'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

type Status = 'idle' | 'loading' | 'success' | 'error'
const INITIAL: EnquiryForm = { name: '', company: '', email: '', phone: '', interest: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<EnquiryForm>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const set = (field: keyof EnquiryForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputCls = `w-full px-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 transition-all duration-200 outline-none focus:ring-2`
  const inputStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 10,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  }
  const inputFocusStyle = { boxShadow: '0 0 0 3px rgba(13,148,136,0.12)', borderColor: '#0d9488' }

  return (
    <>
      {/* Page Hero */}
      <section style={{ background: '#1a1e2e' }} className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ ...font, color: '#00d4aa' }}
            className="text-xs font-semibold tracking-widest uppercase mb-6"
          >
            / Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold leading-tight max-w-2xl"
            style={{ ...serif, color: '#ffffff' }}
          >
            Let's start a{' '}
            <em className="not-italic" style={{ color: '#00d4aa' }}>conversation.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg max-w-lg leading-relaxed"
            style={{ ...font, color: '#94a3b8' }}
          >
            Tell us your material requirements. We'll respond within 1 business day with
            availability, lead times, and pricing.
          </motion.p>
        </div>
      </section>

      {/* Contact body */}
      <section style={{ background: '#f4f7f9' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-14">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="card-glossy p-7 flex flex-col gap-5">
              {[
                { icon: Phone, label: 'Phone', value: '+60 XX-XXXX XXXX' },
                { icon: Mail, label: 'Email', value: 'enquiry@sinarmajan.com.my' },
                { icon: MapPin, label: 'Location', value: 'Kuala Lumpur, Malaysia' },
                { icon: Clock, label: 'Response Time', value: 'Within 1 business day' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.12)' }}
                  >
                    <Icon size={17} style={{ color: '#0d9488' }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5" style={font}>{label}</div>
                    <div className="text-sm font-semibold text-slate-800" style={font}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-glossy p-7">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3" style={font}>Office Hours</div>
              <p className="text-sm text-slate-600 leading-relaxed" style={font}>
                Monday – Friday<br />
                9:00am – 6:00pm MYT
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card-glossy p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-start gap-4 py-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: '#e6faf6', border: '1px solid rgba(13,148,136,0.2)' }}
                  >
                    <CheckCircle size={28} style={{ color: '#0d9488' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900" style={serif}>Enquiry received.</h3>
                  <p className="text-slate-500" style={font}>
                    Thank you for reaching out. We'll get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-sm font-semibold cursor-pointer transition-colors"
                    style={{ ...font, color: '#0d9488' }}
                  >
                    Send another enquiry →
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                        Full Name <span style={{ color: '#0d9488' }}>*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Ahmad bin Ali"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, { boxShadow: 'none', borderColor: '#e2e8f0' })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                        Company Name <span style={{ color: '#0d9488' }}>*</span>
                      </label>
                      <input
                        required
                        value={form.company}
                        onChange={set('company')}
                        placeholder="Syarikat ABC Sdn Bhd"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, { boxShadow: 'none', borderColor: '#e2e8f0' })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                        Email <span style={{ color: '#0d9488' }}>*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@company.com"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, { boxShadow: 'none', borderColor: '#e2e8f0' })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+60 12-345 6789"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, { boxShadow: 'none', borderColor: '#e2e8f0' })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                      Product Interest
                    </label>
                    <select
                      value={form.interest}
                      onChange={set('interest')}
                      className={inputCls}
                      style={{ ...inputStyle, color: form.interest ? '#1e293b' : '#94a3b8' }}
                    >
                      <option value="">Select a category...</option>
                      {PRODUCT_INTEREST_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" style={font}>
                      Message <span style={{ color: '#0d9488' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Describe what you need — material type, quantity, delivery location, project timeline..."
                      className={`${inputCls} resize-none`}
                      style={inputStyle}
                      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, { boxShadow: 'none', borderColor: '#e2e8f0' })}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2.5 text-sm px-4 py-3 rounded-xl"
                      style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', ...font }}
                    >
                      <AlertCircle size={15} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2.5 text-sm font-semibold text-white px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', ...font }}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
