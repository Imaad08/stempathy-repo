import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

            <SectionTitle title="Our Goals" paragraph="" center />

            <div className="flex flex-wrap justify-center">
              {featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"
                >
                  <SingleFeature feature={feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
