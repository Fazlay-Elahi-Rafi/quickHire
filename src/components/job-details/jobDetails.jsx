"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";
import slugify from "slugify";

import jobsData from "../../data/jobs.json";

const JobDetails = ({ jobId }) => {
  const router = useRouter();

  const generateSlug = (title) => {
    return slugify(title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  };

  const matchedJob = jobsData.find((job) => generateSlug(job.title) === jobId);

  useEffect(() => {
    if (jobId && !matchedJob) {
      router.push(`/all-jobs`);
    }
  }, [matchedJob, router, jobId]);

  if (!matchedJob) {
    return null;
  }

  return (
    <>
      <h4 className="mb-0">{matchedJob.title}</h4>
      
    </>
  );
};

export default JobDetails;
