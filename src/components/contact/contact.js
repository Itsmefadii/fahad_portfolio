import React, { useState } from 'react';
import './contact.css'

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    function validateEmail(e) {
        return /\S+@\S+\.\S+/.test(e);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setStatus('');
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('Please fill in all fields.');
            return;
        }
        if (!validateEmail(email)) {
            setStatus('Please enter a valid email address.');
            return;
        }

    const recipient = 'fahadiqbalhbd@gmail.com';
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent('Contact from ' + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mailto;
    setStatus(`Opening mail client to ${recipient}...`);
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setStatus('');
        }, 1200);
    }

    return (
        <div id="contact" className="contact-main-div">
            <h1 className="contact-main-heading">Contact</h1>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                    <label className="contact-label">
                        <span className="sr-only">Name</span>
                        <input
                            type="text"
                            className="contact-input"
                            placeholder="Your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="contact-label">
                        <span className="sr-only">Email</span>
                        <input
                            type="email"
                            className="contact-input"
                            placeholder="your@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <label className="contact-label contact-label-full">
                    <span className="sr-only">Message</span>
                    <textarea
                        className="contact-textarea"
                        placeholder="Write your message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={6}
                        required
                    />
                </label>

                <div className="contact-actions">
                    <button type="submit" className="contact-submit">Send Message</button>
                    {status && <div className="contact-status" role="status">{status}</div>}
                </div>
            </form>
        </div>
    )
}