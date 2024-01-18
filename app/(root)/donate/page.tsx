import Breadcrumb from "@/components/Common/Breadcrumb";
import Donate from "@/components/Donate";
import BuyButtonComponent from "@/components/BuyButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Page | STEMpathy DNHS",
  description: "Donate to fund future projects",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Donate Page"
        description="Donate to help us build a brighter future!"
      />

      <Donate />
      
    </>
  );
};

export default ContactPage;
