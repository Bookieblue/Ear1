import { BENEFIT, WORKS } from "@/constants";
import Image from "next/image";
import React from "react";

type GuideProps = {
  title: string;
  description: string;
};

const GuideCard = ({ title, description }: GuideProps) => {
  return (
    <div className="w-[100%]">
      <div>
        <h2 className="medium-24 mt-3">{title}</h2>
        <p className="regular-16 mt-3">{description}</p>
      </div>
    </div>
  );
};

const Guide = () => {
  return (
    <section
      id='guide'
      className="max-container padding-container flex flex-col gap-20 pt-5 pb-20 lg:pb-32  md:px-20 md:gap-28 xl:flex-row"
    >
      <div  data-aos="fade-up">
        <div className="text-center">
          <h2 className="bold-24 text-green-50">How It Works</h2>
          <p className="medium-24 xl:medium-26 text-black">
            Instant Chat With Your Favourite Influencers{" "}
          </p>
        </div>
        <div className="mt-20 text-center">
          <div className="mt-10 flex flex-col flexCenter w-[100%] gap-10 lg:flex-row lg:mt-20 lg:gap-20">
            <div className="">
              <div className="flexCenter">
                <Image
                  src="./download-app.svg"
                  alt="phone-human"
                  width={230}
                  height={100}
                  className="w-[60%] md:w-[20%] lg:w-[83%] "
                />
              </div>
              <GuideCard
                title="Install ear1 app"
                description="Download ear1 app on Google Play for Andriod Users, and download ear1 app from Apple store."
              />
            </div>
            <div className="">
              <div className="flexCenter">
                <Image
                  src="./ask-for-invite.svg"
                  alt="phone-human"
                  width={140}
                  height={100}
                  className="w-[40%] md:w-[15%] lg:w-[40%]"
                />
              </div>
              <GuideCard
                title="Ask for invite"
                description="Ear1 is currently in closed bete, you will need an invite from someone who is already in the app or ask for invite publicly on Twitter."
              />
            </div>
            <div>
              <div className="flexCenter">
                <Image
                  src="./connect.svg"
                  alt="phone-human"
                  width={240}
                  height={100}
                  className="w-[70%] md:w-[30%] lg:w-[70%]"
                />
              </div>
              <GuideCard
                title="Connect & Start chatting"
                description="Pay your faviourite top person in your field a small fee to learn  from them and improve yourself and your business."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
