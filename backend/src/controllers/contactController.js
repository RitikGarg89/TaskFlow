import Contact from "../models/Contact.js";

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields: name, email, subject, and message",
            });
        }

        const trimmedName = typeof name === "string" ? name.trim() : "";
        const trimmedEmail = typeof email === "string" ? email.toLowerCase().trim() : "";
        const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
        const trimmedMessage = typeof message === "string" ? message.trim() : "";

        if (trimmedName.length < 2 || trimmedName.length > 100) {
            return res.status(400).json({
                success: false,
                message: "Full name must be between 2 and 100 characters",
            });
        }

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address",
            });
        }

        if (trimmedSubject.length < 3 || trimmedSubject.length > 200) {
            return res.status(400).json({
                success: false,
                message: "Subject must be between 3 and 200 characters",
            });
        }

        if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
            return res.status(400).json({
                success: false,
                message: "Message must be between 10 and 2000 characters",
            });
        }

        const contact = await Contact.create({
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage,
        });

        res.status(201).json({
            success: true,
            message: "Thank you for reaching out! Your message has been received and our team will get back to you soon.",
            contact: {
                id: contact.id,
                name: contact.name,
                subject: contact.subject,
                createdAt: contact.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

