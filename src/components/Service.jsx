const services = [
  {
    title: "Find Expert Tutors",
    desc: "Search verified tutors by subject, experience, and rating.",
    icon: "🎯",
  },
  {
    title: "Easy Booking System",
    desc: "Book sessions instantly based on available time slots.",
    icon: "📅",
  },
  {
    title: "Flexible Learning",
    desc: "Choose online, offline, or hybrid learning modes.",
    icon: "💻",
  },
  {
    title: "Affordable Pricing",
    desc: "Set hourly rates that fit your budget and needs.",
    icon: "💰",
  },
];

const Service = () => {
  return (
    <section className="py-16 ">
      <div className="w-11/12 mx-auto">


        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need to connect with the right tutor
          </p>
        </div>

     
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <div className="text-4xl mb-3">
                {service.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Service;