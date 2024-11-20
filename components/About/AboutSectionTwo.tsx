import React from "react";
import Image from "next/image";

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
            <div className="w-full px-4 lg:w-1/2 flex flex-wrap lg:flex-row">
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
                    500+
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
                    2
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
                    7
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Events Planned
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
                    $800
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color lg:leading-relaxed">
                    Money Raised
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
