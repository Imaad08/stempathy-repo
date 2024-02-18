import Breadcrumb from "@/components/Common/Breadcrumb";
import Leadership from "@/components/Leadership";
import BuyButtonComponent from "@/components/BuyButton";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Leadership Page | STEMpathy DNHS",
  description: "See our leadership team",
  // other metadata
};

const LeadPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Leadership Page"
        description="View our leadership team"
      />

      <Leadership />
      
    </>
  );
};

export default LeadPage;
