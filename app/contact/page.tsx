import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | STEMpathy DNHS",
  description: "Contact Us with any feedback",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Let us know what you'd like to see!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
