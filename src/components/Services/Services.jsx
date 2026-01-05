import React, { useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaCog,
  FaHeadset,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const [activeTab, setActiveTab] = useState("web");

  const services = [
    {
      id: "web",
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "E-commerce Solutions",
        "API Integration",
        "Performance Optimization",
        "SEO Implementation",
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $3,500",
    },
    {
      id: "mobile",
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "App Store Deployment",
        "Push Notifications",
        "Offline Capabilities",
        "User Authentication",
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $5,000",
    },
    {
      id: "design",
      icon: <FaPalette className="text-3xl" />,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces designed for optimal experience.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "User Testing",
        "Design Handoff",
      ],
      color: "from-green-500 to-teal-500",
      price: "Starting at $2,500",
    },
    {
      id: "marketing",
      icon: <FaChartLine className="text-3xl" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Management",
        "PPC Advertising",
        "Analytics & Reporting",
        "Conversion Optimization",
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,500/month",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      features: [
        "Custom Website Design",
        "Up to 5 Pages",
        "Mobile Responsive",
        "Basic SEO Setup",
        "1 Month Support",
        "Standard Hosting",
      ],
      popular: false,
      color: "border-gray-300",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "one-time",
      features: [
        "Everything in Starter",
        "Up to 15 Pages",
        "E-commerce Functionality",
        "Advanced SEO",
        "3 Months Support",
        "Premium Hosting",
        "CMS Integration",
        "Analytics Setup",
      ],
      popular: true,
      color: "border-blue-500 border-2",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Features",
        "Priority Support",
        "Dedicated Team",
        "24/7 Monitoring",
        "Security Audits",
        "Performance Optimization",
      ],
      popular: false,
      color: "border-gray-300",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and requirements.",
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a detailed project roadmap and timeline.",
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful, user-friendly interfaces.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "Our developers build your solution with clean, efficient code.",
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures everything works perfectly.",
    },
    {
      step: "06",
      title: "Launch",
      description: "We deploy your project and provide ongoing support.",
    },
  ];

  const currentService = services.find((service) => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive digital solutions tailored to your business needs
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

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                <span className="mr-3">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          {currentService && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center text-white mb-6`}
                  >
                    {currentService.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {currentService.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {currentService.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheck className="text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800 mr-4">
                      {currentService.price}
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  className={`bg-gradient-to-br ${currentService.color} p-10 flex items-center justify-center`}
                >
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
                    <p className="mb-6 opacity-90">
                      Schedule a free consultation with our experts
                    </p>
                    <button className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                      Book a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gray-50 rounded-2xl p-8 border ${
                  pkg.color
                } ${
                  pkg.popular
                    ? "shadow-2xl transform -translate-y-2"
                    : "shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-800">
                      {pkg.price}
                    </span>
                    {pkg.period !== "quote" && (
                      <span className="text-gray-600">/{pkg.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    Perfect for {pkg.name.toLowerCase()} businesses
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <FaArrowRight className="text-gray-300 text-2xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaHeadset className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Schedule a Call</h4>
              <p className="opacity-90 mb-4">30-minute free consultation</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
                Book Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaCog className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Get a Quote</h4>
              <p className="opacity-90 mb-4">Detailed project estimate</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
