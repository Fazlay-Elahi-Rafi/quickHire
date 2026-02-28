"use client";

import React from "react";
import { useParams } from "next/navigation";

import Navbar from "@/components/header/navbar";
import JobDetails from "@/components/job-details/jobDetails";

const JobDetailsPage = ({ params }) => {
  const routerParams = useParams();
  const jobId = params?.jobId || routerParams?.jobId;

  return (
    <>
      <Navbar navBgColor="qh-navbar__bg" />
      <JobDetails jobId={jobId} />
    </>
  );
};

export default JobDetailsPage;
