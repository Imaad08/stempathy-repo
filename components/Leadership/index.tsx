import Link from "next/link";
import BuyButtonComponent from "../BuyButton";
import Cards from "@/components/Cards";
const Leadership = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };
  return (
    <>
      <section id="about" className="pt-8 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-10 lg:pb-14">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  LEADERSHIP
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Meet our leadership team!
                </p>
            </div>
            
            </div>
            
            
          </div>
          <Cards />
          
        </div>
        
        
      </section>
    </>
  );
};

export default Leadership;
