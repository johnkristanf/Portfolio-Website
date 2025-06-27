// app/api/send/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()
    const { name, email, message } = body

    if (!email || !message) {
        return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 })
    }

    try {
        const data = await resend.emails.send({
            from: 'John Kristan Torremocha <onboarding@resend.dev>', // use your verified domain later
            to: [process.env.EMAIL_RECEIVER!],
            subject: 'Message from Portfolio',
            text: message,
            replyTo: email
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
