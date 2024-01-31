import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="max-container gap-20 mt-10 lg:mt-32  md:gap-28 lg:py-0 lg:px-0 xl:flex-row">
      <div className="flexCenter max-container">
        <div data-aos='flip-left' className="w-[750px] h-fit lg:h-[428px] mx-7 bg-white border-t-2 border-green-50 shadow-md">
          <div className=" py-5 px-5 lg:py-10 lg:px-20">
            <p className="bold-36 text-black  text-center">
              Download App, It’s Free
            </p>
            <p className="regular-16 mt-10">
              Accessing a top person in industries have never been simpler. But
              imagine having a platform to connect you to that top person in
              your field to offer advice and expert guidance.{" "}
            </p>
            <p className="regular-16 mt-10">
              With ear1, you can now directly DM and chat with top person in
              your field without your messages geting lost in unserious DMs.
            </p>
            <div className="flex flex-col md:flex-row md:flexCenter gap-4 pt-8 pb-10 lg:pb-24">
              <Image
                src="./play-store.svg"
                alt="playstore"
                width={171}
                height={52}
              />
              <Image
                src="./apple-store.svg"
                alt="playstore"
                width={171}
                height={52}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-40 h-[350px] object-fill bg-green-500 lg:bg-transparent">
        <div className="text-center medium-18 lg:medium-20 mx-7 pt-16">
        <p>© 2021, ear1social</p>
        <p>Follow Us On Twitter</p>
        <p>Term & Conditions {''}{''}Privacy Policy</p>
        </div>
        <Image
                src="./footer-bg.svg"
                alt="people"
                width={1500}
                height={80} 
        className="absolute bottom-0 -z-20 hidden lg:block"
          />
      <div className="absolute bg-gray-90 w-full bottom-0 ">
        <p className="text-white p-10 text-center">All Right Reserved</p>
      </div>
      </div>
      
    </section>
  );
};

export default Footer;
