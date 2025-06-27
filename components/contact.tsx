'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '',  message: '' })
    const [isSending, setIsSending] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })

        const data = await res.json()

        if (res.ok && data.success) {
            toast.success('Message Sent Successfully!')
            setIsSending(false)
            setForm({ name: '', email: '',  message: '' })
        } else {
            toast.error('Error in sending message, please try again!')
            setIsSending(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-8 gradient-text">
                    Let's Build Something Amazing
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                    Ready to bring your ideas to life? Let's discuss your next project.
                </p>

                <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-2 border-violet-600 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-2 border-violet-600 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors"
                            />
                        </div>
                       
                        <textarea
                            placeholder="Your Message"
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-transparent border-2 border-violet-600 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`${isSending ? 'cursor-not-allowed bg-gray-500' : 'bg-gradient-to-r from-violet-600 to-purple-600  hover:from-violet-700 hover:to-purple-700'} w-full py-3 rounded-lg font-semibold  transition-all duration-300 transform hover:scale-105`}
                        >
                            {isSending ? (
                                <>
                                    <Loader2 className="inline-block animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>

                <div className="flex justify-center space-x-6 mt-12">
                    <a
                        href="#"
                        className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors"
                    >
                        <span className="text-xl">📧</span>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors"
                    >
                        <span className="text-xl">💼</span>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors"
                    >
                        <span className="text-xl">🐙</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
