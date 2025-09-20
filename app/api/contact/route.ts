import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Log the form submission (replace with actual email service)
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      timestamp: new Date().toISOString()
    })
    
    // TODO: Integrate with email service (e.g., Resend, SendGrid, or SMTP)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@windhoek-ot.com',
    //   to: process.env.CONTACT_FORWARD_EMAIL,
    //   subject: `New Contact Form Submission from ${formData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${formData.name}</p>
    //     <p><strong>Email:</strong> ${formData.email}</p>
    //     <p><strong>Phone:</strong> ${formData.phone}</p>
    //     <p><strong>Service Interest:</strong> ${formData.service}</p>
    //     <p><strong>Message:</strong> ${formData.message}</p>
    //   `
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
