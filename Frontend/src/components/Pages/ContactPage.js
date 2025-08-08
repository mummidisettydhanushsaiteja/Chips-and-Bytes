// contact.js
import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import '../../style.css';

const initialForm = { name: '', email: '', message: '' };

// Basic email regex (simple, sufficient for frontend hinting)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // for form-level messages

  // Validate on demand
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  // Live validation when fields are touched
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      setErrors(validate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setStatusMessage(null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(false);
    setStatusMessage(null);

    if (Object.keys(validationErrors).length > 0) {
      // focus first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      el?.focus();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialForm);
        setTouched({});
        setErrors({});
        setStatusMessage({
          type: 'success',
          text: "Thanks for your message. We'll get back to you soon!",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data.error || 'Failed to send message. Please try again.';
        setStatusMessage({ type: 'error', text: msg });
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setStatusMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const renderError = (field) => {
    if (touched[field] && errors[field]) {
      return (
        <small className="error" id={`${field}-error`} aria-live="polite">
          {errors[field]}
        </small>
      );
    }
    return null;
  };

  return (
    <section className="contact-page" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact Us</h1>
      <p>We'd love to hear from you! Reach out with questions, feedback, or collaboration ideas.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="form-status">
        {statusMessage && (
          <div
            className={`form-status ${statusMessage.type === 'error' ? 'error-box' : 'success-box'}`}
            role={statusMessage.type === 'error' ? 'alert' : 'status'}
            id="form-status"
          >
            {statusMessage.text}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="name">
            Name<span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            disabled={loading}
            autoComplete="name"
          />
          {renderError('name')}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            disabled={loading}
            autoComplete="email"
          />
          {renderError('email')}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="5"
            required
            disabled={loading}
          />
          {renderError('message')}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Sending…' : 'Send Message'}
        </button>

        {submitted && (
          <p className="success-message" role="status">
            Thanks for your message. We'll get back to you soon!
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactPage;
