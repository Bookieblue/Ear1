// components/Testimonials.tsx
"use client"

// components/Testimonials.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="testimonials" className="max-container padding-container pb-10">
      <div className="text-center">
        <h2 data-aos="fade-up" data-aos-delay="200" className="bold-24 text-green-50">
          Testimonials
        </h2>
        <p className="medium-20 xl:medium-26 text-black mb-10">
            What our clients say
          </p>
      </div>
      <div className=" overflow-x-auto">
        <div className=" flex flex-col items-center lg:flex-row">
          <div className="p-6 mr-4 max-xs:flexCenter max-xs:flex-col">
            <Image src="/md.jpeg" alt="Testimonial 1" className="max-md:w-20  lg:w-30 lg:h-30  object-cover rounded-full" />
            <div className="text-gray-800 mt-4">
              <p>
              &quot;Ear1 has completely transformed how I connect with influencers.
                 With just a few clicks, I was able to reach out to industry leaders
                  and get valuable insights that have helped me grow my business. The app&apos;s
                   simplicity and efficiency are unmatched!&quot;
              </p>
              <p className="text-gray-600">- John Doe, CEO</p>
            </div>
          </div>
          <div className=" p-6 mr-4 max-xs:flexCenter max-xs:flex-col">
            <Image src="/woman.jpg" alt="Testimonial 2" className=" max-md:w-20 lg:w-30 lg:h-30 object-cover rounded-full" />
            <div className="text-gray-800 mt-4">
              <p>
              &quot;As a budding entrepreneur, I was struggling to get noticed by influencers 
                in my niche. Thanks to Ear1, I was able to connect with top influencers and 
                receive personalized advice that has been instrumental in shaping my career. 
                I highly recommend Ear1 to anyone looking to level up their networking game.&quot;
              </p>
              <p className="text-gray-600">- Jane Doe, COO</p>
            </div>
          </div>
          <div className="p-6 mr-4 max-xs:flexCenter max-xs:flex-col">
            <Image src="/man.jpg" alt="Testimonial 2" className="max-md:w-20 lg:w-30 lg:h-30 object-cover rounded-full" />
            <div className="text-gray-800 mt-4">
              <p>
              &quot;Ear1 is a game-changer for anyone looking to learn 
                from the best in their field. The platform&apos;s user-friendly 
                interface and wide range of influencers make it easy to find
                 and connect with the right mentors.&quot;
              </p>
              <p className="text-gray-600">- Jane Doe, COO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
