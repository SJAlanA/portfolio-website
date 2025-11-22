import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.target;
        const data = new FormData(form);
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxh3mHTAo0_w78BDUEfcdUqdUhWMx0B9ecqTth-Pe7x857g92k_s_FITmKd0gCtoEi35Q/exec';

        try {
            await fetch(scriptURL, { method: 'POST', body: data });
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-accent">Touch</span></h2>
                    <p className="text-gray-400">Have a project in mind or want to discuss cybersecurity? Send me a message.</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-primary p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="Name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="Name"
                                required
                                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 focus:border-accent focus:outline-none text-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="Email"
                                required
                                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 focus:border-accent focus:outline-none text-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            name="Message"
                            required
                            rows="4"
                            className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 focus:border-accent focus:outline-none text-white transition-colors resize-none"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {status === 'sending' ? 'Sending...' : (
                            <>
                                Send Message <Send size={18} />
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
