import Link from "next/link";
import BuyButtonComponent from "../BuyButton";

const Donate = () => {
  return (
    <>
      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-10 lg:pb-14">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  DONATE
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Welcome to our donation page! At STEMPATHY, we're dedicated
                  to elevating humanity through STEM education. Your
                  contribution helps us provide access to STEM learning for
                  underprivileged children globally, eliminating educational
                  disparities. Support Club STEMpathy today and be a part of
                  creating a brighter future. Thank you for making STEM
                  education accessible to every child!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://gofund.me/cfb6dac5"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Help Give Back
                  </Link>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 flex items-center justify-center">
                <BuyButtonComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
