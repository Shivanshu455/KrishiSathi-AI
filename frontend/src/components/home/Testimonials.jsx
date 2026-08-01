import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Punjab",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "KrishiSathi helped me identify crop diseases early and improve my wheat production. The AI recommendations were surprisingly accurate.",
  },
  {
    name: "Sunita Devi",
    location: "Himachal Pradesh",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The weather alerts and crop recommendations have become a part of my daily farming routine. It saves both time and money.",
  },
  {
    name: "Mahesh Patel",
    location: "Gujarat",
    image: "https://i.pravatar.cc/150?img=58",
    review:
      "The platform is simple to use, and the market insights helped me choose the right time to sell my crops for a better profit.",
  },
];

function Testimonials() {
  return (
    <section className="bg-green-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            Testimonials

          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">

            Trusted By

            <span className="block text-green-600">

              Farmers Across India

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Thousands of farmers rely on KrishiSathi to make
            smarter agricultural decisions every day.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <Quote
                size={36}
                className="text-green-600"
              />

              <p className="mt-6 leading-8 text-gray-600">

                "{item.review}"

              </p>

              <div className="mt-8 flex">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h4 className="font-bold text-gray-900">

                    {item.name}

                  </h4>

                  <p className="text-sm text-gray-500">

                    {item.location}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;