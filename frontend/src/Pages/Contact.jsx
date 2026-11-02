import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../Utils/api";

function Contact() {
    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [touched, setTouched] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Pre-fill user data if authenticated
    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                name: prev.name || user.name || "",
                email: prev.email || user.email || "",
            }));
        }
    }, [user]);

    const validateField = (field, value) => {
        const trimmed = typeof value === "string" ? value.trim() : "";

        switch (field) {
            case "name":
                if (!trimmed) return "Full name is required";
                if (trimmed.length < 2) return "Name must be at least 2 characters";
                if (trimmed.length > 100) return "Name cannot exceed 100 characters";
                return "";

            case "email": {
                if (!trimmed) return "Email address is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(trimmed)) return "Please enter a valid email address";
                if (trimmed.length > 100) return "Email cannot exceed 100 characters";
                return "";
            }

            case "subject":
                if (!trimmed) return "Subject is required";
                if (trimmed.length < 3) return "Subject must be at least 3 characters";
                if (trimmed.length > 200) return "Subject cannot exceed 200 characters";
                return "";

            case "message":
                if (!trimmed) return "Message is required";
                if (trimmed.length < 10) return "Message must be at least 10 characters";
                if (trimmed.length > 2000) return "Message cannot exceed 2000 characters";
                return "";

            default:
                return "";
        }
    };

    const validateForm = () => {
        const errors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            subject: validateField("subject", formData.subject),
            message: validateField("message", formData.message),
        };

        const hasErrors = Object.values(errors).some((err) => !!err);
        setFieldErrors(errors);
        return !hasErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setFieldErrors((prev) => ({
                ...prev,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setFieldErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        // Mark all fields as touched
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true,
        });

        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            const data = await api.post("/contact", {
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim(),
            });

            if (data.success) {
                setSubmitSuccess(true);
                setFormData({
                    name: user?.name || "",
                    email: user?.email || "",
                    subject: "",
                    message: "",
                });
                setTouched({});
                setFieldErrors({});
            } else {
                setSubmitError(data.message || "Failed to submit message");
            }
        } catch (err) {
            setSubmitError(
                err.message || "Something went wrong. Please check your connection and try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    const resetSuccessState = () => {
        setSubmitSuccess(false);
        setSubmitError("");
    };

    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-12 px-4 sm:my-8 sm:gap-16 sm:px-6 lg:my-10 lg:gap-20 lg:px-8">
            {/* A. Page introduction */}
            <header className="flex flex-col items-center gap-4 text-center sm:gap-5">
                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 sm:text-sm">
                    Contact Us
                </span>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Get in Touch
                </h1>

                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    Have questions, feedback, or need help with TaskFlow? We're here
                    to support you. Reach out to our team using the form below or
                    contact channels.
                </p>
            </header>

            {/* B. Contact information cards */}
            <section
                aria-label="Contact channels"
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {/* Email Support */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:p-7">
                    <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>

                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Email Support
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            For technical issues, bugs, or questions regarding your
                            TaskFlow account and tasks.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs font-semibold text-blue-600 sm:text-sm">
                            support@taskflow.example.com
                        </span>
                        <p className="mt-1 text-xs text-slate-400">
                            [Support Placeholder]
                        </p>
                    </div>
                </div>

                {/* General Enquiries */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:p-7">
                    <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                        </div>

                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            General Enquiries
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Questions about TaskFlow features, roadmap,
                            partnerships, or how to use the platform.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs font-semibold text-indigo-600 sm:text-sm">
                            info@taskflow.example.com
                        </span>
                        <p className="mt-1 text-xs text-slate-400">
                            [Enquiry Placeholder]
                        </p>
                    </div>
                </div>

                {/* Feedback and Suggestions */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:col-span-2 sm:p-7 lg:col-span-1">
                    <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                            </svg>
                        </div>

                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Feedback & Suggestions
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Have an idea for a feature or an improvement?
                            We continuously shape TaskFlow around user needs.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs font-semibold text-emerald-600 sm:text-sm">
                            feedback@taskflow.example.com
                        </span>
                        <p className="mt-1 text-xs text-slate-400">
                            [Feedback Placeholder]
                        </p>
                    </div>
                </div>
            </section>

            {/* Note banner explaining submission recording */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900">
                <div className="flex items-start gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-blue-600"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <div>
                        <p className="font-semibold text-blue-900">
                            Database Integration Active
                        </p>
                        <p className="mt-1 text-slate-600">
                            Contact email addresses above are clearly marked placeholders.
                            Every message submitted via the form below is securely validated,
                            sanitized, and saved to our database so our team can review it.
                        </p>
                    </div>
                </div>
            </div>

            {/* C & D. Contact Form Section */}
            <section
                aria-labelledby="contact-form-title"
                className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-10 lg:p-12"
            >
                <div className="mb-8">
                    <h2
                        id="contact-form-title"
                        className="text-2xl font-bold text-slate-900 sm:text-3xl"
                    >
                        Send us a Message
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                        Fill in the required information below and we'll review your
                        submission promptly.
                    </p>
                </div>

                {/* Success alert */}
                {submitSuccess ? (
                    <div
                        role="alert"
                        className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-800"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-green-900">
                                    Message Submitted Successfully!
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-green-700">
                                    Thank you for reaching out. Your message has been safely recorded in our system.
                                    Our team will get back to you as soon as possible.
                                </p>
                                <button
                                    type="button"
                                    onClick={resetSuccessState}
                                    className="mt-4 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        {/* Error alert */}
                        {submitError && (
                            <div
                                role="alert"
                                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                    <span>{submitError}</span>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="block text-sm font-semibold text-slate-700"
                                >
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="e.g. Alex Johnson"
                                    aria-required="true"
                                    aria-invalid={touched.name && !!fieldErrors.name}
                                    aria-describedby={
                                        touched.name && fieldErrors.name
                                            ? "contact-name-error"
                                            : undefined
                                    }
                                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-offset-1 ${
                                        touched.name && fieldErrors.name
                                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                            : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                                    }`}
                                />
                                {touched.name && fieldErrors.name && (
                                    <p
                                        id="contact-name-error"
                                        role="alert"
                                        className="mt-1.5 text-xs font-medium text-red-600"
                                    >
                                        {fieldErrors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Address */}
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="block text-sm font-semibold text-slate-700"
                                >
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="alex@example.com"
                                    aria-required="true"
                                    aria-invalid={touched.email && !!fieldErrors.email}
                                    aria-describedby={
                                        touched.email && fieldErrors.email
                                            ? "contact-email-error"
                                            : undefined
                                    }
                                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-offset-1 ${
                                        touched.email && fieldErrors.email
                                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                            : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                                    }`}
                                />
                                {touched.email && fieldErrors.email && (
                                    <p
                                        id="contact-email-error"
                                        role="alert"
                                        className="mt-1.5 text-xs font-medium text-red-600"
                                    >
                                        {fieldErrors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="contact-subject"
                                    className="block text-sm font-semibold text-slate-700"
                                >
                                    Subject <span className="text-red-500">*</span>
                                </label>
                                <span className="text-xs text-slate-400">
                                    {formData.subject.length}/200
                                </span>
                            </div>
                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                maxLength={200}
                                value={formData.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="e.g. Question about task priority organization"
                                aria-required="true"
                                aria-invalid={touched.subject && !!fieldErrors.subject}
                                aria-describedby={
                                    touched.subject && fieldErrors.subject
                                        ? "contact-subject-error"
                                        : undefined
                                }
                                className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-offset-1 ${
                                    touched.subject && fieldErrors.subject
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                        : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                                }`}
                            />
                            {touched.subject && fieldErrors.subject && (
                                <p
                                    id="contact-subject-error"
                                    role="alert"
                                    className="mt-1.5 text-xs font-medium text-red-600"
                                >
                                    {fieldErrors.subject}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="contact-message"
                                    className="block text-sm font-semibold text-slate-700"
                                >
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <span
                                    className={`text-xs ${
                                        formData.message.length > 1900
                                            ? "font-semibold text-red-500"
                                            : "text-slate-400"
                                    }`}
                                >
                                    {formData.message.length}/2000
                                </span>
                            </div>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                maxLength={2000}
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Please share details about your inquiry or feedback (minimum 10 characters)..."
                                aria-required="true"
                                aria-invalid={touched.message && !!fieldErrors.message}
                                aria-describedby={
                                    touched.message && fieldErrors.message
                                        ? "contact-message-error"
                                        : undefined
                                }
                                className={`mt-2 w-full resize-y rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-offset-1 ${
                                    touched.message && fieldErrors.message
                                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                        : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                                }`}
                            />
                            {touched.message && fieldErrors.message && (
                                <p
                                    id="contact-message-error"
                                    role="alert"
                                    className="mt-1.5 text-xs font-medium text-red-600"
                                >
                                    {fieldErrors.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 px-6 font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-44"
                            >
                                {submitting ? (
                                    <>
                                        <svg
                                            className="h-5 w-5 animate-spin text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </div>
    );
}

export default Contact;

