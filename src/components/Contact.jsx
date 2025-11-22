import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <section id="contact" className="pb-20">
            <h3 className="text-sm font-mono text-text-muted mb-8 uppercase tracking-widest">Contact</h3>
            <div className="max-w-xl">
                <p className="text-2xl mb-12 font-light">
                    Interested in collaborating or discussing security? <br />
                    <span className="text-white">Drop me a line.</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                            <input
                                type="text"
                                name="Name"
                                required
                                placeholder="Name"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-text-muted focus:outline-none focus:border-white transition-colors"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="email"
                                name="Email"
                                required
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-text-muted focus:outline-none focus:border-white transition-colors"
                            />
                        </div>
                    </div>
                    <div className="group">
                        <textarea
                            name="Message"
                            required
                            rows="1"
                            placeholder="Message"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-text-muted focus:outline-none focus:border-white transition-colors resize-none"
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="text-lg font-medium hover:text-text-muted transition-colors disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message ->'}
                        </button>
                        {status === 'success' && <span className="text-green-500 text-sm">Sent successfully.</span>}
                        {status === 'error' && <span className="text-red-500 text-sm">Error sending.</span>}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
