import Brand from "@/components/brand/brand";
import Category from "@/components/category/category";
import Hero from "@/components/hero/hero";
import React from "react";

export const metadata = {
  title: "QuickHire - Job Board Next.js Template",
  description:
    "A modern and responsive job board template built with Next.js, designed to connect employers and job seekers seamlessly.",
};

const Page = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Category />
    </>
  );
};

export default Page;
