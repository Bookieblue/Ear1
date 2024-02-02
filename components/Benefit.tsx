import { BENEFIT } from "@/constants";
import Image from "next/image";
import React from "react";

type BenefitProps = {
  title: string;
  description: string;
  img: string;
};

const BenefitCard = ({ title, description, img }: BenefitProps) => {
  return (
    <div className="relative z-20">
      <Image
        src={img}
        alt="benefit"
        width={50}
        height={50}
        className="absolute z-20 -top-4 left-[45%]"
      />
      <div className="flexCenter h-fit sm:text-center md:h-[250px] shadow-md border border-t-slate-100 px-5 py-6 relative bg-white">
        <div>
          <h2 className="medium-24 mt-3">{title}</h2>
          <p className="regular-16 mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Benefit = () => {
  return (
    <section
      id="benefit"
      data-aos="fade-up"
      className="max-container padding-container pt-5 md:px-20 pb-20 lg:pb-32  md:gap-28 lg:py-20 relative"
    >
      <div className="relative">
        <div className="text-center">
          <h2 className="bold-24 text-green-50">Benefit Of Ear1 Platform</h2>
          <p className="medium-24 xl:medium-26 text-black mb-10">
            A Better Way To Grow Each Other
          </p>
        </div>
        <div className="flexCenter max-container flex flex-col xl:flex-row relative">
          <Image
            src="./benefit-phone.svg"
            alt="circle"
            width={300}
            height={700}
            className=" ml-10 top-5 hidden absolute lg:block"
          />
        </div>
        <div className="grid grid-cols-1 top-56 gap-10 md:grid-cols-2 lg:gap-x-96 lg:gap-y-16 ">
          {BENEFIT.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              img={benefit.img}
              description={benefit.description}
            />
          ))}
        </div>
        {/* <Image
          src="./dotted-circle.svg"
          alt="dotted-circle"
          width={700}
          height={670}
          className="absolute top-40 left-72 -z-20 hidden md:block md:w-[50%]"
        /> */}
      </div>
    </section>
  );
};

export default Benefit;
