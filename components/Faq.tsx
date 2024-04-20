"use client"

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FAQ_DATA } from "@/constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 

  return (
    <section id="faq" className="max-container padding-container pb-20">
      <div className="text-center">
        <h2 data-aos="fade-up" data-aos-delay="200" className="bold-24 text-green-50">
        Frequently Asked Questions (FAQs)
        </h2>
        <p className="medium-20 xl:medium-26 text-black mb-10">
        We&apos;ve provided answers to several commonly asked questions. 
        </p>
      </div>
      <div className="space-y-4">
        {FAQ_DATA.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="text-gray-600 h-6 w-6"
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-100">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
