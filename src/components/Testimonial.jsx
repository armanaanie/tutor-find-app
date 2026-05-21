export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "HSC Student",
      image:
  "https://i.ibb.co.com/KcGfNW9p/premium-photo-1676838436730-ece8eab1e397-q-80-w-687-auto-format-fit-crop-ixlib-rb-4-1.jpg" ,
      review:
        "This platform helped me find an amazing Math tutor. My grades improved significantly within just two months.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tanvir Hasan",
      role: "University Student",
      image:
      "https://i.ibb.co.com/vCw0HJmb/photo-1500648767791-00dcc994a43e-q-80-w-400-auto-format-fit-crop.jpg" ,
      review:
        "The tutors are very professional and supportive. Booking sessions was simple and the learning experience was excellent.",
      rating: 5,
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "SSC Candidate",
      image:"https://i.ibb.co.com/qLzs6NXp/photo-1438761681033-6461ffad8d80-q-80-w-400-auto-format-fit-crop.jpg" ,
      review:
        "I loved the smooth experience and highly qualified tutors. The platform design is also very user friendly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20  w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold ">
            What Students Say
          </h2>

          <p className="text-gray-500 mt-2">
            Hear from students who found the perfect tutor and improved their
            learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4 text-yellow-500 text-lg">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                “{testimonial.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
