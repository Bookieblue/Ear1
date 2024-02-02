import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="max-container padding-container flex flex-col gap-20 pt-5 pb-20  md:gap-28 md:px-20 lg:pb-32 xl:flex-row">
      <div>
      <div className="flex flex-col gap-10 flex-1 lg:flex-row">
        <div className="lg:w-2/3">
          <h2 className="bold-24 text-green-50">About ear1</h2>
          <p className="medium-24 xl:medium-26 text-black">Think: LinkedIn + OnlyFans.</p>
          <p className="regular-16 text-black pt-8 leading-8">
            Connecting with Influencers to seek advise and guidance can be
            difficult as most Influencers DMs on Twitter, Instagram and LinkedIn
            get flooded with more messages than they can answer, and important
            messages gets lost in thousands of unserious DMs, but ear1as make
            the process simple for you.{" "}
          </p>

          <p className="regular-16 text-black py-10 leading-8">
            With ear1, Influencers can now charge you small fee to make real
            connection and talk to them. You can talk to one influencer, or talk
            to several and get a broader range of perspectives.
          </p>
        </div>
        <div className="md:flexCenter">
            <Image 
            src='./phones.svg'
            alt='phones'
            width={493}
            height={568}
            className="md:w-[60%] sm:w-[50%]  "
            />
        </div>
      </div>
      <div className="flex flex-col leading-8 lg:flex-row">
        <div className="lg:w-1/2">
        <Image 
            src='./iphone11.svg'
            alt='phones'
            width={400}
            height={550}
            className="hidden lg:block"
            />
        </div>
        <div className="lg:w-1/2 mt-5">
         <p className="medium-24 xl:medium-26 text-black">Talk To Your Favourite Influencer In Your Industry.</p>
         <p className="regular-16 pt-8">You can now DM and chat one influencer, or DM several others in your field to ask questions, 
            discuss your progress, learn from their experience to improve yourself for just kick on a new idea.
            Got an upcoming interview you need to nail? You only need to pay to DM and chat your Influencer for
            advise. </p>
        <p className="medium-24 xl:medium-26 text-black pt-10">Get Access To Unique Advice & Expert Guidance.</p>
         <p className="regular-16 pt-8">Ear1 help Influencers to filters out unserious people and encourage 
         faster response to DM messages from serious people who really want to improve their skills and 
         knowledge without wasting their time.  </p>
        </div>
      </div>

      </div>
     
    </section>
  );
};

export default About;
