import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Office",
      details: ["123 Business Street", "New York, NY 10001", "United States"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: ["info@company.com", "support@company.com"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM",
        "Sun: Closed",
      ],
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with our team. We're here to help with your questions
            and projects.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 1440 120">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-600 hover:shadow-lg transition-all duration-300"
                      >
                        <Icon className="text-xl" />
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                <p className="mb-4">We'd love to meet you in person!</p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                  Send a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We've received your message
                      and will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-gray-700 mb-2 font-medium">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        * Required fields
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="ml-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: "How long does it take to get a response?",
                      a: "We typically respond within 24 hours during business days.",
                    },
                    {
                      q: "Do you offer free consultations?",
                      a: "Yes, we offer a 30-minute free consultation for new clients.",
                    },
                    {
                      q: "What are your working hours?",
                      a: "Our support team is available Monday-Friday, 9 AM - 6 PM EST.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Our support team is ready to help you right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-sm">
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="opacity-90 mb-6">
                Chat with our support team in real-time
              </p>
              <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-sm">
              <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
              <p className="opacity-90 mb-6">
                24/7 emergency technical support
              </p>
              <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
