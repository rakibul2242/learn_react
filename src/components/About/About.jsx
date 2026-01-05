import React from "react";
import { FaRocket, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";

function About() {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "100+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "10+", label: "Years Experience", icon: <FaLightbulb /> },
    { number: "25+", label: "Awards Won", icon: <FaAward /> },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Quality",
      description: "Every line of code is written with excellence in mind.",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and transparent communication.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Integrity",
      description: "Honesty and ethics guide all our business decisions.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're passionate about creating exceptional digital experiences that
            drive results and make a difference.
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

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2 flex justify-center">
                  <span className="mr-3 text-blue-600">{stat.icon}</span>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2014, we started as a small team of passionate
                developers with a vision to transform digital experiences. What
                began as a startup in a garage has grown into a leading digital
                agency.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we collaborate with businesses of all sizes, from
                startups to Fortune 500 companies, helping them achieve their
                digital goals through innovative solutions and strategic
                thinking.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Learn More About Our Journey
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-80 rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-sm">
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth and create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from project development
              to client relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${value.color}`}
                >
                  <span className="text-2xl">•</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to delivering excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                <p className="text-blue-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  Visionary leader with 15+ years in tech innovation and
                  business strategy.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Sarah Miller</h3>
                <p className="text-blue-600 mb-4">Lead Developer</p>
                <p className="text-gray-600">
                  Full-stack developer passionate about creating scalable,
                  efficient solutions.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-400"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-4">UI/UX Designer</p>
                <p className="text-gray-600">
                  Creative designer focused on user-centered design and
                  beautiful interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
