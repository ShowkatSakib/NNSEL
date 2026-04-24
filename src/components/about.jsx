import React, { useState } from 'react';
import { ChevronRight, Building2, Award, MapPin, Users } from 'lucide-react';

const GOLD = '#D4A574';
const DARK_BG = '#0A0A0A';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { icon: Building2, label: 'Projects', value: '14+' },
    { icon: Award, label: 'Client Satisfaction', value: '98%' },
    { icon: MapPin, label: 'Prime Locations', value: '4+' },
    { icon: Users, label: 'Years of Excellence', value: '9+' },
  ];

  const coreValues = [
    {
      title: 'Architectural Excellence',
      description: 'We blend innovative design with timeless construction principles to create spaces that inspire and endure.',
      icon: '🏗️',
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every detail matters. From foundation to finish, we maintain the highest standards of construction excellence.',
      icon: '⚙️',
    },
    {
      title: 'Client-Centric Vision',
      description: 'Your dream becomes our blueprint. We listen, understand, and deliver properties that exceed expectations.',
      icon: '👥',
    },
    {
      title: 'Sustainable Development',
      description: 'We build responsibly for today and future generations, balancing growth with environmental consciousness.',
      icon: '🌱',
    },
  ];

  const properties = [
    { name: 'Premium Residential', count: '8 projects', location: 'Banani, Basundhara' },
    { name: 'Commercial Spaces', count: '4 projects', location: 'Prime Dhaka Locations' },
    { name: 'Urban Development', count: '2 projects', location: 'Strategic Markets' },
  ];

  return (
    <div style={{ backgroundColor: DARK_BG }} className="min-h-screen text-white">
      {/* Hero Section with Building Image */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Top accent line */}
          <div className="h-1 w-20 mb-6" style={{ backgroundColor: GOLD }}></div>

          {/* Section label */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: GOLD }}
          >
            Who We Are
          </p>

          {/* Grid: Image + Text */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Building Image */}
            <div className="border md:order-2" style={{ borderColor: GOLD }}>
              <img
                src="nn.jpg"
                alt="NNSEL - Premium Residential Property"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="md:order-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Crafting
                <br />
                <span style={{ color: GOLD }}>Quality Spaces</span>
                <br />
                Since 2015
              </h1>

              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                NN Services & Engineering Ltd (NNSEL) is a pioneering real estate and development firm in Bangladesh, setting new benchmarks in architectural design, construction, and project delivery. Headquartered in Banani, a prominent corporate and commercial locale in Dhaka, NNSEL draws on the expertise of its in-house design professionals to craft projects that elevate the urban landscape.
              </p>

              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                NNSEL's showcase of 14 distinguished properties across Banani, Basundhara, Savar, and Gazipur reflects our unwavering commitment to creating environments that inspire and endure.
              </p>

              <button
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 transition-all duration-300 text-black"
                style={{ backgroundColor: GOLD }}
                onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.target.style.opacity = '1')}
              >
                Explore Our Portfolio
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="border p-6 transition-all duration-300 hover:bg-gray-900"
                  style={{ borderColor: GOLD }}
                >
                  <Icon
                    size={32}
                    className="mb-3"
                    style={{ color: GOLD }}
                  />
                  <p className="text-2xl sm:text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="h-1 w-20 mb-4" style={{ backgroundColor: GOLD }}></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Built on Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="border p-8 transition-all duration-300 hover:bg-gray-900"
                style={{ borderColor: GOLD }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: GOLD }}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="h-1 w-20 mb-4" style={{ backgroundColor: GOLD }}></div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Foundation</h2>
            <p className="text-gray-400 mt-4">A diverse portfolio across Bangladesh's prime markets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((prop, idx) => (
              <div
                key={idx}
                className="border p-8 cursor-pointer transition-all duration-300"
                style={{ borderColor: GOLD }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`transition-all duration-300 ${
                    hoveredCard === idx ? 'translate-x-2' : ''
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{prop.name}</h3>
                  <p className="text-3xl font-bold mb-4" style={{ color: GOLD }}>
                    {prop.count}
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{prop.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-950 border-t" style={{ borderColor: GOLD }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: GOLD }}></div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                To pioneer innovative real estate solutions that blend architectural excellence with construction mastery, creating transformative spaces that enhance the urban environment and deliver lasting value to our clients and communities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ChevronRight size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Sustainable urban development</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">World-class architectural design</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Client satisfaction excellence</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div>
              <div className="h-1 w-20 mb-4" style={{ backgroundColor: GOLD }}></div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                To be Bangladesh's most trusted real estate developer, recognized globally for creating iconic properties that set benchmarks in design innovation, construction quality, and sustainable development practices.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">ISO & REHAB certified excellence</span>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Industry-leading project delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={20} style={{ color: GOLD }} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Community & environmental stewardship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience Excellence?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how NNSEL can transform your vision into a landmark property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="font-semibold px-8 py-4 transition-all duration-300 text-black"
              style={{ backgroundColor: GOLD }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Contact Us
            </button>
            <button
              className="border font-semibold px-8 py-4 transition-all duration-300"
              style={{ borderColor: GOLD, color: GOLD }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(212, 165, 116, 0.1)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
