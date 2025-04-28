import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import LatestArticles from "@/components/LatestArticles/LatestArticles";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEMPATHY",
  description: "This is Home for STEMpathy DNHS",
  // other metadata
};

export default function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <LatestArticles />
      <Features />
    </>
  );
}
