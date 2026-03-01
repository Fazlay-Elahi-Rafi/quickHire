import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import JobCard from "@/components/job/job-card";
import React from "react";

export const metadata = {
  title: "QuickHire - Job Board Next.js Template",
  description:
    "A modern and responsive job board template built with Next.js, designed to connect employers and job seekers seamlessly.",
};

const AllJobsPage = () => {
  return (
    <>
      <Navbar navBgColor="qh-navbar__bg" />
      <JobCard />

      <Footer />
    </>
  );
};

export default AllJobsPage;
