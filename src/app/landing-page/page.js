"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-3 sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <h1 className="text-2xl font-bold text-blue-700">Boys Hostel</h1>
      
            <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>  
        <li><a href="#rooms" className="hover:text-blue-600 transition">Rooms</a></li> 
         <li><a href="#facilities" className="hover:text-blue-600 transition">Facilities</a></li> 
          <li><a href="#gallery" className="hover:text-blue-600 transition">Gallery</a></li>
         <li> <a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>

          
</ul>
       
       
        <Link
          href="/admin/login"
          className="px-4 py-2 bg-[#003262] text-white rounded-lg hover:bg-blue-700 transition"
        >
        Admin Login
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-[#003262] text-white rounded-lg hover:bg-blue-700 transition"
        >
         Student Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-snug">
            Comfortable & Affordable Living for Students
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            BlueNest Boys Hostel offers safe, peaceful, and fully furnished rooms for university students.
            Enjoy comfort, Wi-Fi, delicious meals, and a perfect study environment.
          </p>
          <Link
            href="/roombooking"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Book Your Room Now
          </Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/hostel-building.png"
          alt="Hostel building"
          className="md:w-1/2 w-full mt-10 md:mt-0 rounded-2xl shadow-lg"
        />
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-16 bg-white text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          Established in 2025,  Boys Hostel provides premium accommodation for students.
          Located near the university, our hostel ensures comfort, security, and an ideal study environment.
        </p>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="px-10 py-16 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-10">Our Rooms</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
           
            { title: "Double Sharing", price: "PKR 10,000 / month", img: "/room-1.png" },
            { title: "Fourth Sharing", price: "PKR 6,000 / month", img: "/room-1.png" },
          ].map((room, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={room.img} alt={room.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-blue-700">{room.title}</h4>
                <p className="text-gray-600 mt-1">{room.price}</p>
                <Link
                  href="/roombooking"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="px-10 py-16 bg-white text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-10">Facilities We Offer</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
           
            { icon: "📶", title: "Free Wi-Fi", desc: "High-speed internet for study and entertainment." },
            { icon: "🛡️", title: "24/7 Security", desc: "CCTV monitored secure premises." },
            { icon: "🚿", title: "Hot Water", desc: "Hot & cold water supply all day." },
            { icon: "🪑", title: "Study Area", desc: "Quiet and comfortable study space." },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="text-lg font-semibold text-blue-700">{f.title}</h4>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-10 py-16 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-10">Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["/room-1.png", "/room-1.png", "/room-1.png", "/room-1.png", "/room-1.png", "/room-1.png"].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-16 bg-white text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h3>
        <p className="text-gray-600 mb-6">
          📍  Near University Road, Sahiwal | 📞  0300-1234567 | ✉️  info@bluenesthostel.com
        </p>
        <Link
          href="/roombooking"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Apply for Room
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        © {new Date().getFullYear()} Boys Hostel | Designed by Muhammad Nasir
      </footer>
    </div>
  );
}
