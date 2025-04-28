import React from "react";
import Image from "next/image";
import { NumberTicker } from "../ui/number-ticker";
import build from "next/dist/build";
import { start } from "repl";
 

const AboutSectionTwo = () => {
  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-6 dark:border-white/[.15] md:pb-7 lg:pb-10">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Side */}
            <div className="w-full px-4 lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Impacts
              </h3>
            </div>

            {/* Right Side */}
            <div className="w-full px-4 lg:w-1/2 flex flex-wrap lg:flex-row justify-center">
              {/* First Section */}
              <div className="mb-9 w-full lg:w-1/2 flex flex-col lg:flex-row lg:items-center">
                <div className="mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-8 mt-8">
                  <Image
                    src="/images/impacts/people.png"
                    alt="logo"
                    className="fill-current"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
                  <NumberTicker value={1000} />+
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Students Reached
                  </p>
                </div>
              </div>

              {/* Second Section */}
              <div className="mb-9 w-full lg:w-1/2 flex flex-col lg:flex-row lg:items-center">
                <div className="mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-8 mt-8">
                  <Image
                    src="/images/impacts/hands.png"
                    alt="logo"
                    className="fill-current"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
                  <NumberTicker value={2} />
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Countries Collaborated With
                  </p>
                </div>
              </div>

              {/* Third Section */}
              <div className="mb-9 w-full lg:w-1/2 flex flex-col lg:flex-row lg:items-center">
                <div className="mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-8 mt-8">
                  <Image
                    src="/images/impacts/click.png"
                    alt="logo"
                    className="fill-current"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
                  <NumberTicker value={11} />
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Curriculums Developed
                  </p>
                </div>
              </div>

              {/* Fourth Section */}
              <div className="mb-9 w-full lg:w-1/2 flex flex-col lg:flex-row lg:items-center">
                <div className="mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-8 mt-8">
                  <Image
                    src="/images/impacts/card.png"
                    alt="logo"
                    className="fill-current"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
                    <NumberTicker value={20} />
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Organizations Collaborated With
                  </p>
                </div>
              </div>

              {/* Sponsorship Section */}
              <div className="mb-9 w-full lg:w-1/2 flex flex-col lg:flex-row lg:items-center justify-center">
                <div className="mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-8 mt-8">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                    <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
                    <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M20 16c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/>
                  </svg>
                </div>
                <div className="flex-grow text-left lg:text-center">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white lg:text-xl xl:text-2xl">
                    $<NumberTicker value={300} />
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Silver Award at SoCal Youth Leadership Summit
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-primary lg:leading-relaxed">
                    Sponsored by Ingenius Prep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;




