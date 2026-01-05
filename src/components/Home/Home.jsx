import React from "react";
import {
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router";

function Home() {
  const features = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Fast Performance",
      description:
        "Lightning-fast load times and smooth animations for optimal user experience.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "User Friendly",
      description:
        "Intuitive interfaces designed with user experience as priority.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Scalable Solutions",
      description:
        "Grow with confidence with architecture that scales with your business.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content:
        "This platform transformed our business operations. Highly recommended!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "The best decision we made for our digital transformation journey.",
      avatar: "MC",
    },
    {
      name: "Alexandra Smith",
      role: "Marketing Director",
      content: "Results exceeded our expectations. The team is exceptional.",
      avatar: "AS",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">
                Digital Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Modern solutions for modern businesses. Fast, scalable, and
              beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
              >
                Get Started Free
                <FaArrowRight className="ml-2" />
              </Link>
              <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  5.0
                </div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional design to
              deliver outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              How It Works
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Simple steps to get started with our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Sign Up", "Customize", "Launch"].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-3/4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {step}
                </h3>
                <p className="text-gray-600">
                  {index === 0 && "Create your account in less than 2 minutes"}
                  {index === 1 && "Configure settings to match your needs"}
                  {index === 2 && "Go live and start growing your business"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4 text-yellow-400">{"★".repeat(5)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their digital
            presence.
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime",
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <FaCheck className="text-green-500 mr-3" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
