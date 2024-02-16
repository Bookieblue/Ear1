import Image from "next/image";
import React from "react";


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col mt-20 gap-20 py-5 pb-16 lg:pb-28 md:gap-28 md:px-20 lg:py-20 xl:flex-row">
      <div className="flex flex-col lg:w-[50%] lg:py-5  ">
        <h1 className="bold-40 lg:bold-52 ">
            DM & Chat with <span className="text-green-50">Influencers</span> Better
        </h1>
        <p className=" regular-16 pt-4 md:regular-18 leading-8">
        ear1 connect serious audiences with top person in their field to 
        elevate knowledge and career.  Download App now to DM your favourite.
        </p>
        <div className="grid grid-rows-1 pb-10 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-8 lg:pb-24 w-1/2">
            <Image
            src='./play-store.svg'
            alt='playstore'
            width={171}
            height={52}
            />
             <Image
            src='./apple-store.svg'
            alt='playstore'
            width={171}
            height={52}
            />
      </div>
        </div>
    </section>
  );
};

export default Hero;
