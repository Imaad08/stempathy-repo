import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import UpdatedSliderComponent from "../ImageSlider";

const images = [
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/SCR-20240103-pnzj.webp',
  },
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/SCR-20240103-podl.webp',
  },
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/image1.webp',
  },
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/SCR-20231225-sflc.webp',
  },
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/SCR-20231225-sfyf.webp',
  },
  {
      imageURL: 'https://github.com/Imaad08/stempathy-repo/blob/main/public/images/slider/SCR-20231225-sgjf.webp',
  },
];

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-10 lg:pb-14">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="A Little About Us"
                paragraph="We at Stempathy believe that access to a proper education is a basic human right. That’s why we are dedicated to elevating humanity through the education of children around the globe in the field of robotics, programming, and STEM. By creating our own curriculums and teaching them through multiple mediums, we hope to reach our goal. So far, we have spread our mission of teaching STEM to over 150 students and are striving to go past and through the world."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Local Impacts" />
                    <List text="International Impacts" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="100% Free" />
                    <List text="All Ages" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                {/* <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
                <UpdatedSliderComponent images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
