import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// TO: wherever you want enquiries delivered (any email, no domain needed)
const TO_EMAIL = 'joseph@djavafactory.com'
// FROM: use Resend's shared domain until sinarmajan.com.my is verified
const FROM_EMAIL = 'Sinar Majan <onboarding@resend.dev>'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, company, email, phone, interest, message } = req.body

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${company} — Sinar Majan`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <div style="background: linear-gradient(135deg, #0d9488, #00d4aa); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Material Enquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">Sinar Majan Website</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; width: 130px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Company</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${company}</td></tr>
              <tr><td style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${phone}</td></tr>` : ''}
              ${interest ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Interest</td><td style="padding: 8px 0; font-size: 14px;">${interest}</td></tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Message</p>
              <p style="font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <div style="margin-top: 28px;">
              <a href="mailto:${email}?subject=Re: Your enquiry to Sinar Majan" style="display: inline-block; background: linear-gradient(135deg, #0d9488, #00d4aa); color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
